import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./page.client";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <PageClient />
    </Suspense>
  );
}
