import Image from 'next/image'
import Link from 'next/link';
//import ConnectWallet from './ConnectWallet';

export default function Navbar() {
    return (
        <header className="relative bg-[#1012124D] navbar">
            <nav className=" text-white text-[20px] container flex items-center justify-between mx-auto p-8">
                <div className="flex items-center gap-4">
                    <Link href="/markets" className="flex items-center gap-4">
                        <img src="/images/Logo.png" alt="Logo" className='h-[60px]' />

                    </Link>
                </div>

                <div className='flex space-x-4 text-xl ml-auto'>

                    <ul className="flex space-x-4 text-xl">

                        <li>
                            <Link href="/login">
                                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg ">
                                    LogIn
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/signup" className='mr-2'>
                                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg ">
                                    Sign Up
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Hamburger menu for mobile */}
                {/* Add a responsive menu toggle button here */}
            </nav>
        </header>
    )
}