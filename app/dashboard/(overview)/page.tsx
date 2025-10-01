import React, { Suspense } from "react";
import { fetchCardData } from "../../lib/data";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import CardWrapper, { Card } from "../../ui/dashboard/cards";
import { lusitana } from "../../ui/fonts";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "@/app/ui/skeletons";

async function Page() {
  return (
    <main>
      <h1>Dashboard</h1>
      <div
        className={`${lusitana.className} mb-4 text-xl md:text-2xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}
      >
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}

export default Page;
