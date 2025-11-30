"use client"
import React, { useEffect, useState } from "react";
import LicenseHero from "./LicenseHero";
import LicenseSteps from "./LicenseSteps";

export default function IssuingLicenseWrapper() {
  const [lang, setLang] = useState('ar');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLang(localStorage.getItem('lang'));
    }
  }, []);
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(1);
  const [maxProgress, setMaxProgress] = useState(6);
  return (
    <div className="license-content" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
      <LicenseHero lang={lang} />
      <LicenseSteps lang={lang} step={step} progress={progress} maxProgress={maxProgress} />



      <div className="flex items-center gap-2">
        <button onClick={() => { setStep(step + 1), setProgress(0) }}>next</button>
        <button onClick={() => { setStep(step - 1), setProgress(0) }}>back</button>

        <button onClick={() => { setProgress(progress + 1) }}>add</button>
        <button onClick={() => { setProgress(progress - 1) }}>remove</button>
      </div>
    </div>
  )
}
