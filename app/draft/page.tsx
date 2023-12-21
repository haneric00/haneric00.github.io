import React from "react";
import { client } from '@/sanity/lib/client';
import { FilledButton } from "../components/Buttons";



export default function Draft() {
 
   return (
      //   <div className="content-center grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-indigo-600 to-indigo-100 justify-evenly items-start h-screen p-8">
      //   <div className="flex flex-col gap-4 place-content-center">
      //     <label htmlFor="createNewDraft">Create New Draft: </label>
      //     <label>
      //       Drafter: <input type="text" />
      //     </label>
      //     <label>
      //       Draft ID: <input type="number" />
      //     </label>

      //     <label htmlFor="Rounds">Rounds (minimum 2):  <input type="number" placeholder = "number"/></label>
      //     <div>
      //       <body>
      //       <table>
      //         <tr>
      //           <td>
      //             <label htmlFor="textarea1">Options (one per line)</label>
      //             <textarea id="textarea1" placeholder="Draft picks here"rows={10} style={{width: "100%"}}></textarea>
      //           </td>
      //           <td>
      //             <label htmlFor="textarea2">Drafters (one per line, in order)</label>
      //             <textarea id="textarea2" placeholder="Drafters here" rows={10} style={{width: "100%"}}></textarea>
      //           </td>
      //         </tr>
      //       </table>
      //       <FilledButton>Create</FilledButton>
      //       </body>
      //     </div>
      //   </div>
      // </div>
      <div className="content-center grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-indigo-600 to-indigo-100 justify-evenly items-start h-screen p-8">
      <div className="flex flex-col gap-4 place-content-center">
        <form>
          <label htmlFor="createNewDraft">Create New Draft: </label>
          <label>
            Drafter: <input type="text" />
          </label>
          <label>
            Draft ID: <input type="number" />
          </label>

          <label htmlFor="Rounds">Rounds (minimum 2):  <input type="number" placeholder="number" /></label>
          
          <table>
            <thead>
              <tr>
                <th>
                  <label htmlFor="textarea1">Options (one per line)</label>
                  <textarea id="textarea1" placeholder="Draft picks here" rows={10} style={{ width: "100%" }}></textarea>
                </th>
                <th>
                  <label htmlFor="textarea2">Drafters (one per line, in order)</label>
                  <textarea id="textarea2" placeholder="Drafters here" rows={10} style={{ width: "100%" }}></textarea>
                </th>
              </tr>
            </thead>
          </table>
          
          <FilledButton>Create</FilledButton>
        </form>
      </div>
    </div>

  )

  }