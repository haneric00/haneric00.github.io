import React from "react";
import { client } from '@/sanity/lib/client';
export default function Blog() {
 
   return (
    <>
        <div className = "bg-gradient-to-br from-purple-200 via-purple-400 to-purple-800 flex justify-evenly items-start h-screen">
            <p className="leading-loose flex items-center justify-center h-screen font-bold text-3xl text-center">
                This is an extension of the final project in CSE331, hence the title Kevin&apos;s Draft Picker!
                <br></br>
                Unfortunately I was not able to get it working, but I hope this skeleton is a good proof of concept of what
                I was aiming for!
            </p>

        </div>
    </>
   )

  }