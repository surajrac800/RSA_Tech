import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AttributionCapture } from "@/components/AttributionCapture";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <AttributionCapture />
      </Suspense>
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
