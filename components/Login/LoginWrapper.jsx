'use client'
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Verify from "./Verify";
export default function LoginWrapper() {
    const [step, setStep] = useState("login");
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
        <div className="login-wrapper">
            <div className="container">
                {
                    step === "login" ? <Login formData={fromData} setFormData={setFormData} step={step} setStep={setStep} lang={lang} /> :
                        <Verify formData={fromData} setFormData={setFormData} step={step} setStep={setStep} lang={lang} />
                }
            </div>
        </div>
    )
}