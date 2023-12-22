/* eslint-disable react/no-children-prop */

"use client";
import { client } from '@/sanity/lib/client';
import Container from './components/Container';
import Image from 'next/image';
import LinkButton from './components/LinkButton';
import { FilledButton, OutlinedButton } from './components/Buttons';
import React, { Component } from "react";
import Head from 'next/head';

import { Editor } from './editor';
import Navbar from './components/Navbar';


export default function Home() {
  
  return (
    <>
      <div className = "bg-gradient-to-r from-indigo-100 to-indigo-600 flex justify-evenly items-start h-screen">
        <div className='flex flex-col p-8 justify-end gap-2'>
          <p className='object-top text-center text-5xl font-bold'>Welcome to Kevin&apos;s Draft Picker!</p>
          <p className = 'text-center '>
            This is a fantasy draft picking tool. <br/>
            Please read the blog to learn more!
          </p>
          <div className='flex justify-center gap-3 my-2'>
            <FilledButton><a href='/blog'>Read my blog</a></FilledButton>
            {/* <FilledButton><a href='/photos'>Check out my photos</a></FilledButton> */}
            <FilledButton><a href='/draft'>Join existing draft</a></FilledButton>
            <FilledButton><a href ='/start'>Start a new draft</a></FilledButton>
          </div>
          <div className="h-screen items-center justify-center">
             <img
               src="https://media.pff.com/2023/08/fantasy-cover.jpg?w=956&h=538"
               alt="Description of the image"
               className=" w-956 h-538 object-cover"
             />
          </div>
        </div>
      </div>
    </>
  );
}

// async function getBlogPosts() {
//   const query = `*[_type == 'blogPost'] | order(date desc) {
//     title,
//     description,
//     date,
//     'slug':slug.current,
//     image
//   }`;

//   const posts = await client.fetch(query);
//   return posts;
// }