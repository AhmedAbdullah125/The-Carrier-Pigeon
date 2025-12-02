"use client"
import React, { useEffect, useState } from "react";
import AuctionsHero from "./AuctionsHero";
import AuctionsGrid from "./AuctionsGrid";

export default function AuctionsWrapper() {
  const [lang, setLang] = useState('ar');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLang(localStorage.getItem('lang'));
    }
  }, []);
  return (
    <div className="home-page-content" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
      <AuctionsHero lang={lang} />
      <AuctionsGrid lang={lang} />
     
    </div>
  )
}
