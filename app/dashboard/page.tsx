import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
  const cookieStore = await cookies();
  const username = cookieStore.get('username')?.value;
  if (!username) {
    redirect('/log-in');
  }
  return (
    <>
      <h1 className="leading-40">Hello, {username}</h1>

        
    </>
  );
}
