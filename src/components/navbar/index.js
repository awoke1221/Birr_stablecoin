
import Link from 'next/link';
//import ConnectWallet from './ConnectWallet';

export default function Navbar() {
    return (
        <header className="relative bg-[#1012124D] navbar">
            <nav className=" text-white text-[20px] container flex items-center justify-between mx-auto p-8">
                <div className="flex items-center gap-4">
                    <Link href="/markets" className="flex items-center gap-4">
                        <h1 className='font-bold text-3xl'>birr</h1>
                    </Link>
                </div>

                <div className='flex space-x-4 text-xl ml-auto'>
                    <ul className="flex space-x-4 text-xl">
                        <li>
                            <Link href="/price">
                                Price
                            </Link>
                        </li>
                        <li>
                            <Link href="/buy">
                                Buy
                            </Link>
                        </li>
                        <li>
                            <Link href="/sell">
                                Sell
                            </Link>
                        </li>
                        <li>
                            <Link href="/account" className='mr-2'>
                                Account
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