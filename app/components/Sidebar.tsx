"use client"
import { usePathname } from "next/navigation";
import { useContext } from 'react';
import { Globalize } from "./Globalize";
import Link from "next/link";

export default function Sidebar() {
    const pathName = usePathname();
    const pages = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];
    const activePage = pages.find(page => page.path === pathName);

    const {setColor, setColour} = useContext(Globalize);

    return (
        <div className="w-48 h-full flex items-center">
            <div className="relative h-[400px] flex items-center">
                <div className="absolute right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-700/20 to-transparent" />
                <ul className="space-y-2 w-full px-4">
                    {pages.map((page) => (
                        <li key={page.path}>
                            <Link id={page.name} href={page.path} 
                                className={`block px-4 py-2 rounded text-end hover:text-gray-600 active:text-gray-600 ${activePage?.path === page.path ? 'text-gray-700' : 'text-gray-400'} cursor-none`}
                                onClick={() => {
                                    switch(page.path) {
                                        case "/":
                                            setColor("rgba(162, 136, 52, 0.8)");
                                            setColour("rgba(162, 136, 52, 0.5)");
                                        break;
                                        case "/projects":
                                            setColor("#614051");
                                            setColour("rgba(91, 60, 76, 0.7)"); //"rgba(49, 20, 50, 1.2)"
                                        break;
                                        case "/about":
                                            //setColor("rgba(55, 65, 81, 0.4)");
                                            setColour("rgba(55, 65, 81, 0.4)");
                                        break;
                                        case "/contact":
                                            setColor("rgba(55, 65, 81, 1.5)");
                                            setColour("rgba(55, 65, 81, 1)");
                                        break;
                                    }
                                }}
                            >
                                {page.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
  


