import Hero from "@/components/Hero";
import TierList from "@/components/TierList";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import CtaFooter from "@/components/CtaFooter";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <TierList />
      <HowItWorks />
      <SocialProof />
      <CtaFooter />
    </main>
  );
}
