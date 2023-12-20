import { Request, Response } from "express";


/** Returns a list of all the named save files. */
export function Dummy(req: Request, res: Response) {
  const name = first(req.query.name);
  if (name === undefined) {
    res.status(400).send('missing "name" parameter');
  } else {
    res.json(`Hi, ${name}`);
  }
}


// Helper to return the (first) value of the parameter if any was given.
// (This is mildly annoying because the client can also give mutiple values,
// in which case, express puts them into an array.)
function first(param: any): string|undefined {
  if (Array.isArray(param)) {
    return first(param[0]);
  } else if (typeof param === 'string') {
    return param;
  } else {
    return undefined;
  }
}

// helper type to store vital data about drafts such as ID, # of rounds, original draft picks, and drafters
type Draft = {
  DraftId: number;
  DraftRounds: number;
  DraftPicks: string[];
  Drafters: string[];
}

// helper type to store vital data about draft order, such as the number of rounds, and who is currently drafting
type draftHelper = {
  numRounds: number;
  order: number;
  currDrafter: string;
}

// helper type to store data about draft picks, such as what number pick they are, their name, and who drafted them
type draftPick = {
  pickName: string;
  drafterName: string;
  round: number;
}

/* this block contains all of our data structures. 
draftOrder keeps track of who is currently drafting per draftId
draft keeps track of the general data such as draftId, # of rounds, available picks, and drafters
currDraftId is used by newDraftId to generate unique draftIds every time
pickChart is used to keep track of past picks
*/
const draftOrder: Map<number, draftHelper> = new Map();
const draft: Map<number, Draft> = new Map();
const currDraftId: number[] = [];
const pickChart: Map<number, draftPick[]> = new Map();
let draftIdCounter: number = 0;

// newDraftId creates new draftIds every time a new draft is created
export function newDraftId(): number {
  currDraftId.push(draftIdCounter);
  const num = currDraftId.length;
  draftIdCounter++;
  return num;
}

// newDraft creates new drafts which means creating and updating all of our relevant data structures, draftOrder, draft, and pickChart
export function newDraft(req: Request, res: Response) {
  const DraftId = newDraftId();
  // console.log(DraftId + " <= draftId")
  // const newDraftPicks = JSON.parse(req.body.draftPicks);
  const newDraftPicks = req.body.draftPicks;
  if (newDraftPicks === undefined || !Array.isArray(newDraftPicks)) {
    res.status(400).send("error with saving draft");
    return;
  }
  
  // const draftRounds = JSON.parse(req.body.draftRounds);
  const draftRounds = req.body.draftRounds;
  if(draftRounds === undefined || draftRounds < 1 || draftRounds !instanceof Number) {
    res.status(400).send("error with number of draft rounds");
    return;
  }
  
  const drafters = req.body.drafters;
  // const drafters = JSON.parse(req.body.drafters);
  if(drafters === undefined || drafters.length <= 1) {
    res.status(400).send("error with number of drafters");
    return;
  }
  
  const newDraft: Draft = {
    DraftId: DraftId,
    DraftPicks: newDraftPicks,
    Drafters: drafters,
    DraftRounds: draftRounds
  };

  const currDraftOrder: draftHelper = {
    numRounds: draftRounds,
    order: 0,
    currDrafter: drafters[0]
  };

  draftOrder.set(DraftId, currDraftOrder);
  draft.set(DraftId, newDraft);
  pickChart.set(DraftId, []);
  res.json(DraftId);
  // res.send(DraftId);
}

// getDraft returns the Draft object linked to a given draftId. If the given draftId is undefined or doesn't exist in the map
// status 400 is sent
export function getDraft(req: Request, res: Response) {
  // console.log("reached getDraft")
  const Id = req.body.draftId;
  if (Id === undefined) {
    res.status(400).send("Error sending DraftId to server");
    return;
  }
 
  if(draft.has(Id)) {
    res.json(draft.get(Id));
  } else {
    res.status(400).send("draft doesn't exist");
  }
}

// getCurrDrafter sends the current drafter given a draftId and iterates the draftOrder so next time getCurrDrafter is called
// the next drafter in line is returned.
export function getCurrDrafter(req: Request, res: Response) {
    // const draftId = JSON.parse(req.body.currId);
    const draftId = req.body.currId;
    // console.log("ID: " + draftId);
    // console.log("reached getCurrDrafter");
    if (draftId === undefined) {
      res.status(400).send("error drafting");
      return;
    }
    const drafterSet = draft.get(draftId)?.Drafters;
    // console.log(drafterSet)
    
    if (draftOrder.get(draftId) === undefined) {
      res.status(400).send("error with drafting");
      return;
    } else if (draftOrder.get(draftId) != undefined) {
      let currDraftOrder = draftOrder.get(draftId);
      let currIndex = currDraftOrder?.order;
      let currNumRounds = currDraftOrder?.numRounds;
      

      // res.json(drafterSet![currIndex!]);
      res.json(currDraftOrder?.currDrafter)
      ///////////////////////////////////////////////////////// below iterates to next drafter
      // console.log(currDraftOrder?.currDrafter);
      if (currIndex! === drafterSet!.length - 1) {
        currIndex! = 0;
        currNumRounds!--;
        const newDraftHelper: draftHelper = {
          numRounds: currNumRounds!,
          order: currIndex,
          currDrafter: drafterSet![0]
        }
        draftOrder.set(draftId, newDraftHelper);
      } else {
        let newCurrIndex = 1 + currIndex!;
        const newDraftHelper: draftHelper = {
          order: newCurrIndex,
          numRounds: currNumRounds!,
          currDrafter: drafterSet![newCurrIndex]
        }
        draftOrder.set(draftId, newDraftHelper);
      }
    }
} 

// conductDraft updates server side data structures that x drafter drafted y pick, and then returns the pickChart for the given draftId
// the pickChart is used to display all previous drafts
export function conductDraft(req: Request, res: Response) {

  const currentDrafter = req.body.drafter;
  const currDraftId = req.body.draftId;
  const currDraftPick = req.body.pick;

  const newPick = {
    pickName: currDraftPick,
    drafterName: currentDrafter,
    round: pickChart.get(currDraftId)?.length as number + 1
  };
  // draftPickCounter++;

  if (!pickChart.has(currDraftId)) {
    res.status(400).send("error conducting draft");
    return;
  }
  // console.log(pickChart.has(currDraftId))

  let currPickArray = pickChart.get(currDraftId);
  currPickArray!.push(newPick);
  res.json(currPickArray);
  // console.log(currPickArray);


  if (draft.get(currDraftId) === undefined){
    res.status(400).send("draft ID does not exist (conductDraft");
    return;
   }
  const updateDraft = draft.get(currDraftId) as Draft;

  const updateDraftPicks = updateDraft!.DraftPicks

  const newDraftPicks = updateDraftPicks.filter(item => item !== currDraftPick);

  const draftNew: Draft = {
    DraftId: currDraftId,
    DraftPicks: newDraftPicks,
    Drafters: updateDraft.Drafters,
    DraftRounds: updateDraft.DraftRounds
  }
  
  // updateDraft!.DraftPicks = newDraftPicks;
  // draft.set(currDraftId, updateDraft!);
  draft.set(currDraftId, draftNew);
}

// checkCurrDrafter is used for the refresh button, and checks the draftOrder data structure for the current drafter. Very similar to getDrafter but without
// iterating the draftOrder
export function checkCurrDrafter(req: Request, res: Response) {
  const currId = req.body.currId;
  if (currId === undefined) {
    res.status(400).send("error checking current drafter");
    return;
  }
  let bigObject = draftOrder.get(currId);
  let currDrafter = bigObject?.currDrafter;
  res.json(currDrafter);
  // console.log("reached checkCurrDrafter's end")
  // console.log(currDrafter)
}

export function checkPickHistory(req: Request, res: Response) {
  const currDraftId = req.body.draftId;
  if (currDraftId === undefined || !pickChart.has(currDraftId)) {
    res.status(400).send("error checking pick history");
    return;
  }
  let currPickArray = pickChart.get(currDraftId);
  res.json(currPickArray);
}