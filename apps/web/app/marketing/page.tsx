"use client";

// import { AlertCard } from "@/components/marketing/alert/card";
import { Hero } from "./marketing-components/hero";
import { BenefitsCard } from "./marketing-components/benefits";
// import { BottomCTA, MiddleCTA } from "@/components/marketing/in-between-cta";
// import { LatestChangelogs } from "@/components/marketing/lastest-changelogs";
// import { MonitoringCard } from "@/components/marketing/monitor/card";
// import { Partners } from "@/components/marketing/partners";
// import { Stats } from "@/components/marketing/stats";
// import { StatusPageCard } from "@/components/marketing/status-page/card";
import { MarketingLayout } from "./marketing-components/marketing-layout";

export default function Page() {
  return (
    <MarketingLayout>
      <div className="grid gap-8">
        <Hero />
        <BenefitsCard />
      </div>
    </MarketingLayout>
  );
}
