import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/marketing/navbar";
import { ScrollProvider } from "@/components/ui/scroll-context";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollProvider>
        <Header />
        <MaxWidthWrapper>
        <Features />
        </MaxWidthWrapper>
      </ScrollProvider>

      <MaxWidthWrapper className="">
        <Footer />
      </MaxWidthWrapper>
    </>
  );
}


