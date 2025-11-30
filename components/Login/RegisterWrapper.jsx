'use client'
import React, { useEffect, useState } from "react";
import Verify from "./Verify";
import Register from "./Register";
export default function RegisterWrapper() {
    const [step, setStep] = useState("register");
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
                    step === "register" ? <Register formData={fromData} setFormData={setFormData} step={step} setStep={setStep} lang={lang} /> :
                        <Verify formData={fromData} setFormData={setFormData} step={step} setStep={setStep} lang={lang} link="/" />
                }
            </div>
        </div>
    )
}