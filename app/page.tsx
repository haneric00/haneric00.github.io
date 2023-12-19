
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
      <div className = "bg-gradient-to-r from-indigo-100 to-indigo-600 flex justify-evenly w-full pt-6 mb-16">
        <div className='flex flex-col p-8 justify-end gap-2'>
        {/* <div> */}
          <p></p>
          <p className='text-center text-5xl '>Welcome to Kevin&apos;s Draft Picker!</p>
          <p className = 'text-center'>
            This is my portfolio and personal website. <br/>
            I&apos;m a programmer, hobby sprinter, and pianist who also enjoys reading. <br/>
            Read my blog to follow my journey or learn about cool projects I&apos;ve made!
          </p>
          <div className='flex gap-3 my-2'>
            <FilledButton><a href='/blog'>Read my blog</a></FilledButton>
            <OutlinedButton><a href='/projects'>Check out my projects</a></OutlinedButton>
          </div>
          {/* <div className='flex gap-3'>
            <LinkButton src='' alt='' href=''/>
            <LinkButton src='' alt='' href=''/>
            <LinkButton src='' alt='' href=''/>
            <LinkButton src='' alt='' href=''/>
          </div> */}
        </div>
        {/* <div className='p-8'>
            <Image
            className='rounded-full'
            src='/headshot.png'
            width='300'
            height='300' alt={''}            />
        </div> */}
      </div>
      <div className='bg-primary-200'>
        <p className='text-3xl p-16 w-fill text-center'>Latest Blog Posts</p>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          </div>
        </Container>
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