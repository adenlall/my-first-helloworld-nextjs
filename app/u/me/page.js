import '@styles/me.css';
import Link from 'next/link';


export default function Page() {
  return(
     <>
          <h1 className="text-2xl font-extrabold text-blue-800">Wlcome to your profile manager</h1>
          <ul>
               <li><Link href="/dashboard">Dashboard</Link></li>
               <li><Link href="/profile">Profile</Link></li>
               <li><Link href="/skins">Skins</Link></li>
               <li><Link href="/advanced">Advanced</Link></li>
          </ul>
     </>
  );
}
