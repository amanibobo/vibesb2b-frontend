"use client";

import { Button } from "@/components/ui/button";
import { useScroll } from "./ui/scroll-context";
import Banner from "./Banner";
import Link from "next/link";
import VideoPlayer from "./ui/video-player";

export default function Header() {
  const { scrollToDemo } = useScroll();

  return (
        <div className="relative h-full w-full bg-[#FAFAFA] flex min-h-screen flex-col pt-14 md:pt-24">
        <div className=" h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <main className="flex-1 px-4 sm:px-6 lg:px-[125px]">
            <section className="w-full py-16 md:py-16 lg:py-24">
              <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-8 text-center">
                  <div className="space-y-8">
                  <Banner />
                    <h1
                    style={{ fontFamily: "var(--font-pp-editorial-new)" }}
                    className="text-3xl font-ultralight sm:text-4xl md:text-5xl lg:text-6xl">
                   Vibe check the Zoom - 10x revenue

                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    CV-powered detection of audience reaction to give insightful speaker feedback, increasing the productivity of sales pitches, interviews, meetings, & more.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 min-[400px]:flex-row mt-8">
                    <Link href="/Tonibot.dmg" download>
                    <Button className="h-10 gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] rounded-3xl">
                      Download Now
                    </Button>
                    </Link>
                    <Link href="https://devpost.com/software/vibesb2b" target="_blank">
                    <Button
                      onClick={scrollToDemo}
                      className="rounded-3xl h-10"
                      variant="outline"
                    >
                      Devpost - HackGT 12
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <div className="flex justify-center px-4 sm:px-6 lg:px-[125px] pb-12">
            <div className="w-full max-w-4xl">
              <VideoPlayer src="/vuber.mp4" />
            </div>
          </div>
        </div>
      </div>
  );
}
