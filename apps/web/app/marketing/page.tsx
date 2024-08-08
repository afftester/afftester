import { FAQ } from "./marketing-components/FAQ";
import { BenefitsCard } from "./marketing-components/benefits";
import { Hero } from "./marketing-components/hero";
import { MarketingLayout } from "./marketing-components/marketing-layout";
import { AffiliateNetworksCard } from "./marketing-components/networks/card";

export default function Page() {
  return (
    <MarketingLayout>
      <div className="mx-auto flex flex-col items-center">
        <div className="grid w-full gap-8">
          <Hero />
          <div>
            <BenefitsCard />
          </div>
          <AffiliateNetworksCard />
        </div>
        <div className="w-full max-w-4xl">
          <FAQ />
        </div>
      </div>
    </MarketingLayout>
  );
}
