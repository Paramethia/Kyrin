'use client';

//import { usePathname } from "next/navigation";
import { useState } from "react";
import { Globalize } from "./Globalize";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import Particles from "./Particles";
// import Canvas from "./components/Canvas";
import PageTransition from "./PageTransition";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  
    //let currentPage = usePathname();
    const [color, setColor] = useState("rgba(162, 136, 52, 0.5)");
    const [colour, setColour] = useState("rgba(162, 136, 52, 0.5)");
    /*
    if (currentPage === "/projects") {
        setColor("#614051");
        setColour("rgba(49, 20, 50, 1.8)");
    }
    */
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
