
// export default function Home() {
//   // return <Navbar />;
//   return (
//     <div>
//     </div>
//   )
// }

import { client } from '@/sanity/lib/client';
import Container from './components/Container';
import Image from 'next/image';
import LinkButton from './components/LinkButton';
import { FilledButton, OutlinedButton } from './components/Buttons';

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <>
      <div className = "bg-gradient-to-r from-indigo-100 to-indigo-600 flex justify-evenly items-start h-screen">
        <div className='flex flex-col p-8 justify-end gap-2'>
          <p className=' object-top text-center text-5xl '>Welcome to Kevin&apos;s Draft Picker!</p>
          <p className = 'text-center '>
            This is a fantasy draft picking tool. <br/>
            Please read the blog to learn more!
          </p>
          <div className='flex justify-center gap-3 my-2'>
            <FilledButton><a href='/blog'>Read my blog</a></FilledButton>
            <FilledButton><a href='/photos'>Check out my photos</a></FilledButton>
          </div>
        </div>
      </div>
    </>
  );
}

async function getBlogPosts() {
  const query = `*[_type == 'blogPost'] | order(date desc) {
    title,
    description,
    date,
    'slug':slug.current,
    image
  }`;

  const posts = await client.fetch(query);
  return posts;
}