"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from 'react';
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import Image from "next/image";

const Navbar = () => {


    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);


    return (
        <div className="relative w-full h-full">
            <div className="z-[99] fixed pointer-events-none inset-x-0 h-[88px]"></div>

            <header
                className={cn(
                    "fixed top-4 inset-x-0 mx-auto max-w-6xl px-2 md:px-12 z-[100] transform th",
                    isOpen ? "h-[calc(100%-24px)]" : "h-12"
                )}
            >
                <Wrapper className="backdrop-blur-lg rounded-xl lg:rounded-2xl border border-[rgba(124,124,124,0.2)] px- md:px-2 flex items-center justify-start">
                    <div className="flex items-center justify-between w-full sticky mt-[7px] lg:mt-auto mb-auto inset-x-0">
                        <div className="flex items-center flex-1 lg:flex-none pl-1">
                            <Link href="/" className="flex items-center text-lg font-semibold text-foreground">
                                <Image src="/Beach_Ball_PNG_Clip_Art_Image-2055932628.png" alt="vibeb2b" width={20} height={100} />
                                <span className="ml-2">vibesB2B</span>
                            </Link>

                        </div>
                        <div className="flex items-center gap-3">
                                <Button size="sm" asChild className="hidden sm:flex bg-[#e0f2fe] hover:bg-[#bae6fd] text-[#0369a1]">
                                    <Link href="https://deepwiki.com/atoniolo76/vibeb2b/1-overview" target="_blank" className="flex items-center">
                                        <Image src="/devin.png" alt="DeepWiki" width={16} height={16} />
                                        <span className="">deepwiki</span>
                                    </Link>
                                </Button>
                                <>
                                    <Button size="sm" asChild className="hidden sm:flex bg-[#0ea5e9] hover:bg-[#0284c7]">
                                        <Link href="/VibeB2B-1.0.0-arm64.dmg" download>
                                            Download Now
                                            <ArrowRightIcon className="w-4 h-4 ml-2 hidden lg:block" />
                                        </Link>
                                    </Button>
                                </>
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="lg:hidden p-2 w-8 h-8"
                            >
                                {isOpen ? <XIcon className="w-4 h-4 duration-300" /> : <Icons.menu className="w-3.5 h-3.5 duration-300" />}
                            </Button>
                        </div>
                    </div>
                    <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
                </Wrapper>
            </header>

        </div>
    )
};

export default Navbar
