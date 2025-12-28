"use client";

import { useCallback } from "react";
import Link from "next/link";
import { AnimatedRoadmap } from "@/components/ui/hero-section-5";
import { Button } from "@/components/ui/button";

const milestonesData = [
  {
    id: 1,
    name: "Enquiry",
    status: "complete" as const,
    position: { top: "70%", left: "5%" },
  },
  {
    id: 2,
    name: "Itinerary",
    status: "complete" as const,
    position: { top: "15%", left: "20%" },
  },
  {
    id: 3,
    name: "Booking",
    status: "in-progress" as const,
    position: { top: "45%", left: "55%" },
  },
  {
    id: 4,
    name: "Travel",
    status: "pending" as const,
    position: { top: "10%", right: "10%" },
  },
];

export default function HomeRoadmapSection() {
  const openEnquiry = useCallback(() => {
    window.dispatchEvent(
      new CustomEvent("open-enquiry", {
        detail: {
          source: "roadmap",
        },
      }),
    );
  }, []);

  return (
    <section className="w-full bg-background text-foreground">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-24">
        <h2 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Plan your next <span className="rounded-md bg-primary/20 p-2">happy</span> journey
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          From enquiry to itinerary to travel—our team handles the details so you can enjoy the experience.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" onClick={openEnquiry}>
            Enquire Now
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/packages">Explore Packages</Link>
          </Button>
        </div>
      </div>

      <AnimatedRoadmap
        milestones={milestonesData}
        mapImageSrc="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-SsfjxCJh43Hr1dqzkbFWUGH3ICZQbH.png&w=320&q=75"
        aria-label="An animated roadmap showing project milestones from kick-off to launch."
      />
    </section>
  );
}
