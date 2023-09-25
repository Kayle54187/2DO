import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


const NavBar = () => {

    return ( 
        <header className='pt-10 grid grid-cols-2'>
            <h1 className='text-white font-bold text-xl'>2DO</h1>
            <nav className="flex items-center justify-between space-x-10">
                <ul className='text-zinc-50 flex-1 flex items-center justify-between'>
                    <li>
                        <Link href={'/'}>Dashboard</Link>
                    </li>
                    <li>
                        <Link href={'/daily'}>Daily Schedule</Link>
                    </li>
                    <li>
                        <Link href={'/work'}>Work</Link>
                    </li>
                    <li>
                        <Link href={'/projects'}>Projects</Link>
                    </li>
                    <li>
                        <Link href={'/ideas'}>Ideas</Link>
                    </li>
                </ul>
                <div>
                    <UserButton/>
                </div>
            </nav>
        </header>
    );
}
 
export default NavBar;