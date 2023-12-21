
import React from "react";
import { client } from '@/sanity/lib/client';
import { FilledButton } from "../components/Buttons";



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
    <div className="content-center grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-indigo-600 to-indigo-100 justify-evenly items-start h-screen p-8">
    <div className="flex flex-col gap-8 place-content-center space-y-8">
      <form>
        <label htmlFor="createNewDraft" className="text-white">
          Create New Draft:
        </label>
        <br />
        <label className="text-white">
          Drafter: <input type="text" className="rounded-md p-2 border border-gray-300 w-full" />
        </label>
        <label className="text-white">
          Draft ID: <input type="number" className="rounded-md p-2 border border-gray-300 w-full" />
        </label>
        <br />
        <label htmlFor="Rounds" className="text-white">
          Rounds (minimum 2): <input type="number" placeholder="number" className="rounded-md p-2 border border-gray-300 w-full" />
        </label>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="textarea1" className="text-white">
              Options (one per line)
            </label>
            <textarea id="textarea1" placeholder="Draft picks here" rows={10} className="rounded-md p-2 border border-gray-300 w-full"></textarea>
          </div>
          <div>
            <label htmlFor="textarea2" className="text-white">
              Drafters (one per line, in order)
            </label>
            <textarea id="textarea2" placeholder="Drafters here" rows={10} className="rounded-md p-2 border border-gray-300 w-full"></textarea>
          </div>
        </div>
  
        {/* Assuming FilledButton is a custom component with Tailwind styles */}
        <FilledButton>
          Create
        </FilledButton>
      </form>
    </div>
  </div>
  

  )

  }