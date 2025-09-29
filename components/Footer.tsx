import { socialMediaLinks } from "@/utils/constants";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
    return (
        <>
        <div className="flex flex-col pb-3 text-muted-foreground">
            <div>
                {/*logo */}
                {/*email */}
            </div>

        <div className="flex flex-col items-center justify-between gap-2.5 border-t py-3.5 text-neutral-500 dark:text-neutral-400 sm:flex-row-reverse">
        {/* Social media links */}
        <div className="-mr-2 flex items-center gap-1">
        <Link href="https://deepwiki.com/atoniolo76/vibeb2b/1-overview" target="_blank" className="flex items-center text-sm text-foreground mr-2">
          <img src="/devin.png" alt="DeepWiki" width={16} height={16} />
          <span className="ml-1 underline">deepwiki</span>
        </Link>
          {socialMediaLinks.map(({ icon: Icon, link }) => (
            <Button
              key={link}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
        <span className="text-sm">
          &copy; {new Date().getFullYear()} vibesB2B.
        </span>
      </div>
        </div>
        </>
    )
}