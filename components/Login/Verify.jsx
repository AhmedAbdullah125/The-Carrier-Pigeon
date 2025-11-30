"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Image from "next/image"
import loginImage from "@/public/images/registeration/otpUser.jpg"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { InputOTP, InputOTPGroup, InputOTPSlot, } from "@/components/ui/input-otp"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
// Zod validation schema
const loginSchema = z.object({
    code: z
        .string()
        .length(4, { message: "رمز التحقق يجب أن يكون 4 أرقام" })
        .regex(/^[0-9]+$/, { message: "يجب أن يحتوي رمز التحقق على أرقام فقط" })
})


export default function Verify({ formData, setFormData, step, setStep, lang, link }) {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleResendOTP = () => {
        //loading for 2 seconds
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        console.log("Resend OTP");
    }
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            code: "",
        },
    })
    const onSubmit = (data) => {
        //loading for 2 seconds
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        setFormData({ ...formData, ...data })
        console.log(formData);
        if (link === "/reset-password") {
            setStep("reset-password")
        }
        else {
            router.push(link)
        }
    }
    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-grid">
                    {/* Form Section */}
                    <div className="login-form-section">
                        <div className="login-header">
                            <h1 className="login-title"> ادخل رمز التحقيق المرسل </h1>
                            <p className="login-subtitle">تم إرسال رمز مكوّن من 4 أرقام إلى رقم جوالك: {formData?.country + formData?.phone} أدخل الرمز لإكمال التحقق.</p>
                        </div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                {/* otp Number Field */}
                                <FormField
                                    control={form.control}
                                    name="code"
                                    render={({ field }) => (
                                        <FormItem className="from-input-wrapper-mobile">
                                            <FormLabel className="password-label">
                                                ادخل رمز التحقق
                                            </FormLabel>
                                            <FormControl>
                                                <InputOTP
                                                    maxLength={4}
                                                    {...field}
                                                    className="input-of-otp"
                                                >
                                                    <InputOTPGroup className="gap-4 w-full justify-between" style={{ direction: "ltr", }}>
                                                        {[0, 1, 2, 3].map((index) => (
                                                            <InputOTPSlot
                                                                key={index}
                                                                index={index}
                                                                className={cn(
                                                                    "h-[70px] w-full  text-2xl rounded-lg border-2",
                                                                    form.formState.errors.code ? 'error-mob-input' : field.value?.[index] ? 'success-mob-input' : ''
                                                                )}
                                                            />
                                                        ))}
                                                    </InputOTPGroup>
                                                </InputOTP>
                                            </FormControl>
                                            <div className="flex items-center justify-between">
                                                <FormMessage id="phone-error" />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={form.formState.errors.phone || form.formState.errors.password || form.formState.errors.country || !form.formState.isDirty}
                                >
                                    {
                                        loading ? (
                                            <span className="loader-btn"></span>
                                        ) : (
                                            <span>تاكيد الرمز</span>
                                        )
                                    }
                                </Button>
                                <div className="signup-wrapper">
                                    لم تستلم رمز التحقق؟{" "}
                                    <button onClick={handleResendOTP} type="button" className="signup-btn"> اعاده ارسال رمز التحقق</button>
                                </div>
                            </form>
                        </Form>
                    </div>
                    {/* Image Section */}
                    <div className="login-image-section">
                        <Image
                            src={loginImage}
                            alt="login"
                            fill
                            className="login-image"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}