"use client";

import React, { } from "react";
import { Draft } from "./page";

interface EditorProps {
    initialState: Draft;
    currId: number;
    availPicks: string[];
    Drafters: string[];
    numRounds: number;
    drafterName: string;
}

interface EditorState {
    currDrafter: string;
    roundsCounter: number;
    isTurn: boolean;
    availPicks: string[];
    pickHistory: draftPick[];
}

type draftPick = {
    pickName: string;
    drafterName: string;
    round: number;
}

// type Page =  "start" | "draft";

export class Editor extends React.Component<EditorProps, EditorState> {
    // currDrafter: string;
    // roundsCounter: number;
    // isTurn: boolean;
    // availPicks: string[];
    // pickHistory: draftPick[];
    constructor(props: any) {
        super(props);
        // this.currDrafter = "";
        // this.roundsCounter = this.props.numRounds;
        // this.availPicks = this.props.availPicks;
        // this.pickHistory = [];
        // this.page = "start";
        // this.isTurn = false;
        this.state = { currDrafter: "", roundsCounter: this.props.numRounds, isTurn: false, availPicks: this.props.availPicks, pickHistory: [] };
        this.checkCurrDrafter();
    }

    render = (): JSX.Element => {
        
        // console.log("in render: " + this.currDrafter)
        if (this.state.pickHistory.length === (this.props.Drafters.length * this.props.numRounds)) {
            let pastPicks: JSX.Element[] = [];
            let pickNames: JSX.Element[] = [];
            let pickers: JSX.Element[] = [];
            let keyCounter = 1;
            for (const item of this.state.pickHistory) {
                let pickNum = item.round;
                pastPicks.push(
                    <li key={keyCounter}>{pickNum}</li>
                // <li key={item}><a href="#" onClick={(e) => this.handleLoad(e, item)}>{item}</a></li>
                )
                keyCounter++;
                let pickName = item.pickName;
                pickNames.push(
                    <li key={keyCounter}>{pickName}</li>
                )
                keyCounter++;
                let picker = item.drafterName;
                pickers.push(
                    <li key={keyCounter}>{picker}</li>
                )
                keyCounter++;
              } 
                return <div>
                    <h3><label htmlFor="Status">Status of draft {this.props.currId}</label></h3>
                    <body>
            <table>
                <tr>
                    <td>
                        <h4>Pick number</h4>
                        <ul >
                            
                            {pastPicks}
                        </ul>
                    </td>
                    <td>
                        <h4>Name</h4>
                        <ul >
                            {pickNames}
                        </ul>
                    </td>
                    <td>
                        <h4>Drafted by</h4>
                        <ul>
                          {pickers}
                        </ul>
                    </td>
                </tr>
            </table>
        </body>
        <label htmlFor="">Draft is complete.</label>
        </div>
        }
        if (this.state.pickHistory.length === 0 && this.props.drafterName === this.state.currDrafter) {
            const saved: JSX.Element[] = [];
            for (const item of this.state.availPicks) {
            saved.push(
                <option key={item}>{item}</option>
            // <li key={item}><a href="#" onClick={(e) => this.handleLoad(e, item)}>{item}</a></li>
            )
          } 
            return <div>
            <h3><label htmlFor="Status">Status of draft {this.props.currId}</label></h3>
            <label htmlFor="">No picks made yet.</label>
            <br />
            <label htmlFor="">It is your turn to pick!</label>
            <select id= "dropdown draft">
                <option key='NA'>Pick</option>
                {saved}
            </select>
            <button onClick={this.handleDraft}>Draft</button>
            </div>
        } else if (this.state.pickHistory.length === 0 && this.props.drafterName != this.state.currDrafter) {
            return <div>
            <h3><label htmlFor="Status">Status of draft {this.props.currId}</label></h3>
            <label htmlFor="">No picks made yet.</label>
            <br></br>
            <label htmlFor="notYourTurn">Waiting for {this.state.currDrafter} to pick</label>
            <button onClick={this.refresh}>Refresh page</button> 
            </div>
        } else if (this.props.drafterName !== this.state.currDrafter) {
            let pastPicks: JSX.Element[] = [];
            let pickNames: JSX.Element[] = [];
            let pickers: JSX.Element[] = [];
            let keyCounter = 1;
            for (const item of this.state.pickHistory) {
                let pickNum = item.round;
                pastPicks.push(
                    <li key={keyCounter}>{pickNum}</li>
                // <li key={item}><a href="#" onClick={(e) => this.handleLoad(e, item)}>{item}</a></li>
                )
                keyCounter++;
                let pickName = item.pickName;
                pickNames.push(
                    <li key={keyCounter}>{pickName}</li>
                )
                keyCounter++;
                let picker = item.drafterName;
                pickers.push(
                    <li key={keyCounter}>{picker}</li>
                )
                keyCounter++;
              } 

                return <div>
                    <h3><label htmlFor="Status">Status of draft {this.props.currId}</label></h3>
                    <body>
            <table>
                <tr>
                    <td>
                        <h4>Pick number</h4>
                        <ul >
                            
                            {pastPicks}
                        </ul>
                    </td>
                    <td>
                        <h4>Name</h4>
                        <ul >
                            {pickNames}
                        </ul>
                    </td>
                    <td>
                        <h4>Drafted by</h4>
                        <ul>
                          {pickers}
                        </ul>
                    </td>
                </tr>
            </table>
        </body>
        <label htmlFor="notYourTurn">Waiting for {this.state.currDrafter} to pick</label>
            <button onClick={this.refresh}>Refresh page</button> 
                    </div>
        } else {
            const saved: JSX.Element[] = [];
            for (const item of this.state.availPicks) {
                saved.push(
                    <option key={item}>{item}</option>
                // <li key={item}><a href="#" onClick={(e) => this.handleLoad(e, item)}>{item}</a></li>
                )
              } 
            let pastPicks: JSX.Element[] = [];
            let pickNames: JSX.Element[] = [];
            let pickers: JSX.Element[] = [];
            let keyCounter = 1;
            for (const item of this.state.pickHistory) {
                let pickNum = item.round;
                pastPicks.push(
                    <li key={keyCounter}>{pickNum}</li>
                // <li key={item}><a href="#" onClick={(e) => this.handleLoad(e, item)}>{item}</a></li>
                )
                keyCounter++;
                let pickName = item.pickName;
                pickNames.push(
                    <li key={keyCounter}>{pickName}</li>
                )
                keyCounter++;
                let picker = item.drafterName;
                pickers.push(
                    <li key={keyCounter}>{picker}</li>
                )
                keyCounter++;
              } 

                return <div>
                    <h3><label htmlFor="Status">Status of draft {this.props.currId}</label></h3>
                    <body>
            <table>
                <tr>
                    <td>
                        <h4>Pick number</h4>
                        <ul >
                            
                            {pastPicks}
                        </ul>
                    </td>
                    <td>
                        <h4>Name</h4>
                        <ul >
                            {pickNames}
                        </ul>
                    </td>
                    <td>
                        <h4>Drafted by</h4>
                        <ul>
                          {pickers}
                        </ul>
                    </td>
                </tr>
            </table>
        </body>
        <label htmlFor="">It is your turn to pick!</label>
            <select id= "dropdown draft">
                <option key='NA'>Pick</option>
                {saved}
            </select>
            <button onClick={this.handleDraft}>Draft</button>
            
        </div>
        }
    }

    // used to refresh the draft history. fetches /api/getDraft which updates the available options for draftpicks, and then later on calls checkCurrDrafter which
    // updates the current drafter abd aksi refreshPickHistory which updates the pickHistory.
    refresh = () => {
        let body = JSON.stringify({draftId: this.props.currId})
        fetch("/api/getDraft", {method: "POST", body: body, headers: {'Content-Type': "application/json"}})
        .then(this.refreshRes)
    }

    // refresh helper function
    refreshRes = (res: Response) => {
        console.log("reached refreshRes")
        if (res.status === 200) {
            res.json()
            .then(this.refreshHelper)
        } else {
            console.error("failed fetch request")
        }
    }

    // refresh helper function (here refreshPickHistory and checkCurrDrafter are called)
    refreshHelper = (val: any) => {
        console.log("reached refreshHelper")
        if (Array.isArray(val.DraftPicks)) {
            this.setState({availPicks: val.DraftPicks});
            console.log("successfully updated")
        } else {
            console.error("error updating available picks")
        }
        // this.isTurn = false;
        // this.getDrafter();
        this.refreshPickHistory();
        this.checkCurrDrafter();
        this.forceUpdate();
    }

    // updates the current drafter using fetch /api/checkCurrDrafter 
    checkCurrDrafter = () => {
        let body = JSON.stringify({currId: this.props.currId});
        fetch("/api/checkCurrDrafter", {method: "POST", body: body, headers: {'Content-Type': "application/json"}})
        .then(this.checkHelper)
    }

    // checkCurrDrafter helper function
    checkHelper = (res: Response) => {
        console.log("checkHelper status: " + res.status)
        if (res.status === 200) {
            res.json()
            .then(this.updateCurrDrafter)
        } else {
            console.error("failed fetch request")
        }
    }

    // checkCurrDrafter helper function
    updateCurrDrafter = (val: any) => {
        this.setState({currDrafter: val});
    }

    // handleDraft sends data to server regarding which drafter drafted which pick using fetch /api/conductDraft
    handleDraft = () => {
        const dropdown = document.getElementById("dropdown draft") as HTMLSelectElement;
        const dropdownValue = dropdown.value;
        console.log(dropdownValue);
        if (dropdownValue === "Pick") {
            return;
        }
        const id = this.props.currId;
        const drafterName = this.state.currDrafter;
        let body = JSON.stringify({drafter: drafterName, draftId: id, pick: dropdownValue})
        console.log(body);
        console.log("reached fetch")
        fetch("/api/conductDraft", {method: "POST", body: body, headers: {'Content-Type': "application/json"}})
        .then(this.handleDraftRes)
    }

    // handleDraft helper function
    handleDraftRes = (res: Response) => {
        if (res.status === 200) {
            console.log("reached handleDraftRes")
            res.json()
            .then(this.handleDraftFinal)
        } else {
            console.error("error at handleDraftRes")
        }
    }

    // handleDraft Helper function (also calls getDrafter and refresh)
    handleDraftFinal = (val: any) => {
        console.log("reached hanldeDraftFinal")
        if (Array.isArray(val)) {
            this.setState({pickHistory: val});
        } 
        this.setState({isTurn: false});
        this.getDrafter();
        this.refresh();
    }

    // getDrafter updates the current drafter, but also iterates through the draftOrder (the key difference between it and getCurrDrafter)
    // it does so using fetch /api/getCurrDrafter
    getDrafter = () => {
        // console.log("reached getDrafter")
        let currId = JSON.stringify({currId: this.props.currId});
        // console.log(currId);
        fetch("/api/getCurrDrafter", {method: "POST", body: currId, headers: {'Content-Type': "application/json"}})
            .then(this.handleDrafterRes)
    }

    // getDrafter helper function
    handleDrafterRes = (res: Response) => {
        // console.log("reached handleDrafterRes")
        if (res.status === 200) {
            res.json()
            .then(this.handleDrafter)
        } else {
            console.error("error at handleDrafterRes")
        }
    }

    // getDrafter helper function
    handleDrafter = (vals: any) => {
        // console.log("reached handleDrafter")
        // console.log(vals + " this is vals <=")
        if (vals === this.props.drafterName) {
            this.setState({isTurn: true});
        } 
        this.setState({currDrafter: vals});
        // console.log(this.currDrafter)
        this.forceUpdate();
    }

    // refreshPickHistory refreshes the pick history using fetch /api/checkPickHistory to get the most up to date version from server
    refreshPickHistory = () => {
        let body = JSON.stringify({draftId: this.props.currId});
        fetch("/api/checkPickHistory", {method: "POST", body: body, headers: {'Content-Type': "application/json"}})
        .then(this.refreshPHHelper)
    }

    // refreshPickHistory helper function
    refreshPHHelper = (res: Response) => {
        if (res.status === 200) {
            res.json()
            .then(this.refreshPHUpdate)
        } else {
            console.error("failed fetch request")
        }
    }

    // refreshPickHistory helper function
    refreshPHUpdate = (val: any) => {
        if (Array.isArray(val)) {
            this.setState({pickHistory: val})
        }
    }

}