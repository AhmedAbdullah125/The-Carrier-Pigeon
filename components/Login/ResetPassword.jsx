"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import loginImage from "@/public/images/registeration/login.jpg"
import chwckwithshadow from "@/public/images/registeration/chwckwithshadow.svg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Zod validation schema
const loginSchema = z
    .object({
        password: z
            .string()
            .min(1, { message: "كلمة المرور مطلوبة" })
            .min(6, { message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل" }),

        repassword: z
            .string()
            .min(1, { message: "تأكيد كلمة المرور مطلوب" })
            .min(6, { message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل" }),
    })
    .refine((data) => data.password === data.repassword, {
        message: "كلمه المرور غير متطابقه",
        path: ["repassword"], // error will appear under repassword field
    })

export default function ResetPassword({ formData, setFormData, step, setStep, lang }) {
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            password: "",
            repassword: "",
        },
    })

    const onSubmit = (data) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setShowSuccessModal(true) // Show success modal

            // Redirect after 2 seconds
            setTimeout(() => {
                router.push("/")
            }, 2000)
        }, 2000)
        setFormData({ ...formData, ...data })
        console.log(formData);
    }
    return (
        <div className="login-container">
            {/* Success Modal */}
            {showSuccessModal && (
                <div className="modal-overlay">
                    <div className="success-modal">
                        <div className="success-icon">
                            <Image src={chwckwithshadow} alt="success" />
                        </div>
                        <h2 className="success-title">تهانينا</h2>
                        <p className="success-message">تم تغيير كلمة المرور بنجاح</p>
                    </div>
                </div>
            )}
            <div className="login-card">
                <div className="login-grid">
                    {/* Form Section */}
                    <div className="login-form-section">
                        <div className="login-header">
                            <h1 className="login-title">قم بتعيين كلمة مرور جديدة</h1>
                            <p className="login-subtitle">أدخل كلمة مرور قوية تحتوي علي حروف ارقام ورموز</p>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="login-form">


                                {/* Password Field */}
                                <FormField

                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="from-input-wrapper-password">
                                            <FormLabel className="password-label">
                                                كلمة المرور
                                            </FormLabel>
                                            <FormControl >
                                                <div className={`password-input-wrapper ${form.formState.errors.password ? 'error-password' : form.formState.isDirty && field.value ? 'success-password' : ''}`}>
                                                    <Input
                                                        {...field}
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="كلمة المرور"
                                                        className="password-input"
                                                        dir="rtl"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="field-icon"
                                                    >
                                                        {showPassword ? (
                                                            <EyeOff className="eye-icon" />
                                                        ) : (
                                                            <Eye className="eye-icon" />
                                                        )}
                                                    </button>
                                                </div>
                                            </FormControl>
                                            <FormMessage className="password-error" />
                                        </FormItem>
                                    )}
                                />
                                {/* RePassword Field */}
                                <FormField

                                    control={form.control}
                                    name="repassword"
                                    render={({ field }) => (
                                        <FormItem className="from-input-wrapper-password">
                                            <FormLabel className="password-label">
                                                تأكيد كلمة المرور
                                            </FormLabel>
                                            <FormControl >
                                                <div className={`password-input-wrapper ${form.formState.errors.password ? 'error-password' : form.formState.isDirty && field.value ? 'success-password' : ''}`}>
                                                    <Input
                                                        {...field}
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="كلمة المرور"
                                                        className="password-input"
                                                        dir="rtl"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="field-icon"
                                                    >
                                                        {showPassword ? (
                                                            <EyeOff className="eye-icon" />
                                                        ) : (
                                                            <Eye className="eye-icon" />
                                                        )}
                                                    </button>
                                                </div>
                                            </FormControl>
                                            <FormMessage className="password-error" />
                                        </FormItem>
                                    )}
                                />

                                {/* Forgot Password Link */}
                                <div className="forgot-password-wrapper">
                                    <Link
                                        href="/forget-password"
                                        type="button"
                                        className="forgot-password-btn"
                                    >
                                        نسيت كلمة المرور؟
                                    </Link>
                                </div>

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
                                            <span>تسجيل الدخول</span>
                                        )
                                    }
                                </Button>

                                {/* Sign Up Link */}
                                <div className="signup-wrapper">
                                    ليس لديك حساب؟{" "}
                                    <Link
                                        href="/register"
                                        type="button"
                                        className="signup-btn"
                                    >
                                        إنشاء حساب
                                    </Link>
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
                {/* Footer Text */}
                <Link href="/" className="login-footer">
                    <p className="guest-login-text">الدخول كزائر</p>
                </Link>
            </div>
        </div>
    )
}