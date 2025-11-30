'use client'
import React, { useEffect, useState } from "react";
import Verify from "./Verify";
import ForgetPassword from "./ForgetPassword";
import ResetPassword from "./ResetPassword";
export default function ForgetPasswordWrapper() {
    const [step, setStep] = useState("forget-password");
    const [fromData, setFormData] = useState({
        phone: "",
        code: "",
    })
    const [lang, setLang] = useState('ar');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLang(localStorage.getItem('lang'));
        }
    }, []);
    return (
        <div className="login-wrapper" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
            <div className="container">
                {
                    step === "forget-password" ? <ForgetPassword formData={fromData} setFormData={setFormData} step={step} setStep={setStep} lang={lang} /> :
                        step === "verify" ? <Verify formData={fromData} setFormData={setFormData} step={step} setStep={setStep} lang={lang} link="/reset-password" /> :
                            <ResetPassword formData={fromData} setFormData={setFormData} step={step} setStep={setStep} lang={lang} />
                }
            </div>
        </div>
    )
}