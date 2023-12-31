
import React from "react";
import { client } from '@/sanity/lib/client';
import { FilledButton, OutlinedButton } from "../components/Buttons";



export default function Draft() {
 
   return (
    //   <div className="content-center grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-indigo-600 to-indigo-100 justify-evenly items-start h-screen p-8">
    //   <div className="flex flex-col gap-4 place-content-center space-y-4">
    //     <form>
          
    //           <label htmlFor="createNewDraft">Create New Draft: </label>
    //           <br></br>
    //           <label>
    //             Drafter: <input type="text" />
    //           </label>
    //           <label>
    //             Draft ID: <input type="number" />
    //           </label>
    //           <br></br>
    //           <label htmlFor="Rounds">Rounds (minimum 2):  <input type="number" placeholder="number" /></label>
    //       <table>
    //         <thead>
    //           <tr>
    //             <th>
    //               <label htmlFor="textarea1">Options (one per line)</label>
    //               <textarea id="textarea1" placeholder="Draft picks here" rows={10} style={{ width: "100%" }}></textarea>
    //             </th>
    //             <th>
    //               <label htmlFor="textarea2">Drafters (one per line, in order)</label>
    //               <textarea id="textarea2" placeholder="Drafters here" rows={10} style={{ width: "100%" }}></textarea>
    //             </th>
    //           </tr>
    //         </thead>
    //       </table>
          
    //       <FilledButton>Create</FilledButton>
    //     </form>
    //   </div>
    // </div> 
  <div className="bg-gradient-to-r from-indigo-600 to-indigo-100 flex flex-col justify-evenly">
       <label htmlFor="createNewDraft" className="text-white text-3xl object-left-top p-8 justify-end gap-2" >
          Join Draft:
        </label>
    <div className=" grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-indigo-600 to-indigo-100 justify-evenly items-start h-screen p-8">
    
        <div className="flex flex-col gap-8 place-content-center space-y-8">
      <form>
       
        <br />
        <label className="text-white">
          Drafter name: <input type="text" className="rounded-md p-2 border border-gray-300 w-full" />
        </label>
        <label className="text-white">
          Draft ID: <input type="number" className="rounded-md p-2 border border-gray-300 w-full" />
        </label>
        <br />
        <br></br>
        <OutlinedButton>
          Join
        </OutlinedButton>
      </form>
    </div>
  </div>
</div>

  )

  }