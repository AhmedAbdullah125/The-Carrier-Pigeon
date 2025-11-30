"use client"
import React, { useMemo, useState } from "react"
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
import { t } from "@/lib/i18n"

// Zod validation schema with translations
const makeLoginSchema = (lang) =>
    z.object({
            password: z
                .string()
                .min(1, { message: t(lang, "password_required") })
                .min(6, { message: t(lang, "password_min_length") }),

            repassword: z
                .string()
                .min(1, { message: t(lang, "repassword_required") })
                .min(6, { message: t(lang, "password_min_length") }),
        })
        .refine((data) => data.password === data.repassword, {
            message: t(lang, "password_mismatch"),
            path: ["repassword"],
        });

export default function ResetPassword({ formData, setFormData, step, setStep, lang }) {
    const loginSchema = useMemo(() => makeLoginSchema(lang), [lang]);
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
                        <h2 className="success-title">{t(lang, "congratulations")}</h2>
                        <p className="success-message">{t(lang, "password_changed_successfully")}</p>
                    </div>
                </div>
            )}
            <div className="login-card">
                <div className="login-grid">
                    {/* Form Section */}
                    <div className="login-form-section">
                        <div className="login-header">
                            <h1 className="login-title">{t(lang, "reset_password_title")}</h1>
                            <p className="login-subtitle">{t(lang, "reset_password_subtitle")}</p>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="login-form">


                                {/* Password Field */}
                                <FormField

                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="from-input-wrapper-password">
                                            <FormLabel className="password-label">{t(lang, "Password")} </FormLabel>
                                            <FormControl >
                                                <div className={`password-input-wrapper ${form.formState.errors.password ? 'error-password' : form.formState.isDirty && field.value ? 'success-password' : ''}`}>
                                                    <Input
                                                        {...field}
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder={t(lang, "password")}
                                                        className="password-input"
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
                                                {t(lang, "confirm_password")}
                                            </FormLabel>
                                            <FormControl >
                                                <div className={`password-input-wrapper ${form.formState.errors.password ? 'error-password' : form.formState.isDirty && field.value ? 'success-password' : ''}`}>
                                                    <Input
                                                        {...field}
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder={t(lang, "confirm_password")}
                                                        className="password-input"
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
                                        {t(lang, "forgot_password")}
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
                                            <span>{t(lang, "reset_password")}</span>
                                        )
                                    }
                                </Button>

                                {/* Sign Up Link */}
                                <div className="signup-wrapper">
                                    {t(lang, "No_Account")}{" "}
                                    <Link
                                        href="/register"
                                        type="button"
                                        className="signup-btn"
                                    >
                                        {t(lang, "create_account")}
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
            </div>
        </div>
    )
}