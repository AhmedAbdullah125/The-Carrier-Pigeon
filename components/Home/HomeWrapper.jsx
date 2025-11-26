import React from "react";
import Hero from "./Hero";
import NewsSection from "./NewsSection";
import HomeReposts from "./HomeReposts";
import Directors from "./Directors";
import RacingSchedule from "./RacingSchedule";
export default function HomeWrapper() {
  return (
    <div className="home-page-content">
      <Hero />
      <NewsSection />
      <HomeReposts />
      <Directors />
      <RacingSchedule />
    </div>
  )
}
