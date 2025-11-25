'use client';

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Globalize } from "./Globalize";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import Particles from "./Particles";
import PageTransition from "./PageTransition";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  
    const currentPage = usePathname();
    const [color, setColor] = useState("rgba(162, 136, 52, 0.5)");
    const [colour, setColour] = useState("rgba(162, 136, 52, 0.5)");
    
    useEffect(() => { 
        if (currentPage === "/projects") {
            setColor("#614051");
            setColour("rgba(91, 60, 76, 0.7)");
        } else if (currentPage === "/about") {
            setColour("rgba(55, 65, 81, 0.4)");
        } else if (currentPage === "/contact") {
            setColor("rgba(55, 65, 81, 1.5)");
            setColour("rgba(55, 65, 81, 1)");
        } else {
            setColor("rgba(162, 136, 52, 0.8)");
            setColour("rgba(162, 136, 52, 0.5)");
        }
    }, [currentPage]);
    
    return (
        <Globalize.Provider value={{ color, setColor, colour, setColour }}>
            <Particles />
            <div className="min-h-screen flex justify-center">
                <div className="flex w-full max-w-4xl">
                    <div className="hidden md:block w-48">
                        <Sidebar />
                    </div>
                    <div className="flex-1 md:pl-10 h-screen">
                        <PageTransition>{children}</PageTransition>
                    </div>
                </div>
                <MobileNav />
            </div>
        </Globalize.Provider>
    );
}
