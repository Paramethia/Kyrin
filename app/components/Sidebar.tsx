"use client"
import { usePathname } from "next/navigation";
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

    return (
        <div className="w-48 h-full flex items-center">
            <div className="relative h-[400px] flex items-center">
                <div className="absolute right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-700/20 to-transparent" />
                <ul className="space-y-2 w-full px-4">
                    {pages.map((page) => (
                        <li key={page.path}>
                            <Link id={page.name} href={page.path} className={`block px-4 py-2 rounded text-end hover:text-gray-600 active:text-gray-600 ${activePage?.path === page.path ? 'text-gray-700' : 'text-gray-400'} cursor-none`}>
                                {page.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
  


