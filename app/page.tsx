import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className='leading-40'>Seating Plan Generator</h1>
      <h2 className='w-7xl flex justify-self-center'>Ever had to spend copious amounts of hours creating seating plans? Well now you don't! Made by a student who is best friends with a teacher, this program is definentely one you can trust! Including relationship lists, a strict and nice mode, and a desk mapper, it's the easiest way to make a seating plan these days.</h2>

      <p className='leading-50'><br/></p>
      <div className='grid grid-cols-2 gap-90 flex justify-self-center'>
        <Link href='sign-up' className='rounded-full border-6 border-[#ffffff] leading-20 w-md'><h2>Sign Up</h2></Link>
        <Link href='log-in' className='rounded-full border-6 border-[#ffffff] leading-20 w-md'><h2>Log In</h2></Link>
      </div>
      
    </>
  );
}
