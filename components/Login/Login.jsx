"use client"

import React, { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Eye, EyeOff } from "lucide-react"
import { Select, SelectGroup, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import loginImage from "@/public/images/registeration/login.jpg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import flag from "@/public/images/flag.svg"
import Link from "next/link"
import { t } from "@/lib/i18n"

const makeLoginSchema = (lang) =>
    z.object({
        phone: z
            .string()
            .min(1, { message: t(lang, "phone_required") })
            .regex(/^[0-9]+$/, { message: t(lang, "phone_numbers_only") })
            .min(9, { message: t(lang, "phone_min_length") }),
        password: z
            .string()
            .min(1, { message: t(lang, "password_required") })
            .min(6, { message: t(lang, "password_min_length") }),
        country: z
            .string().min(1, { message: t(lang, "country_required") }),
    });

export default function Login({ formData, setFormData, step, setStep, lang }) {
    const [showPassword, setShowPassword] = useState(false)
    const [country, setCountry] = useState("")
    const [loading, setLoading] = useState(false)
    const loginSchema = useMemo(() => makeLoginSchema(lang), [lang]);
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            phone: formData?.phone || "",
            password: "",
            country: "",
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

        setStep("verify")
    }

    const countries = [
        {
            "id": 1,
            "name": "السعودية",
            "key": "+966",
            "flag": flag
        },
        {
            "id": 2,
            "name": "مصر",
            "key": "+20",
            "flag": flag
        },
    ]

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-grid">
                    {/* Form Section */}
                    <div className="login-form-section">
                        <div className="login-header">
                            <h1 className="login-title">
                                {t(lang, "welcome")}
                            </h1>
                            <p className="login-subtitle">{t(lang, "welcome_desc")}</p>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="login-form">
                                {/* Phone Number Field */}
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem className="from-input-wrapper-mobile">
                                            <FormLabel className="password-label">
                                                {t(lang, "Phone_Number")}
                                            </FormLabel>
                                            <FormControl>
                                                <div className={`input-of-mobile-num ${form.formState.errors.phone || form.formState.errors.country
                                                    ? 'error-mob-input'
                                                    : form.formState.isDirty && (field.value && country && !form.formState.errors.phone && !form.formState.errors.country)
                                                        ? 'success-mob-input'
                                                        : ''
                                                    }`}>
                                                    <div className="country-select">
                                                        <FormField
                                                            control={form.control}
                                                            name="country"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormControl>
                                                                        <Select
                                                                            value={field.value}
                                                                            onValueChange={(value) => {
                                                                                setCountry(value);
                                                                                field.onChange(value);
                                                                            }}
                                                                        >
                                                                            <SelectTrigger className="country-select-trigger">
                                                                                <SelectValue placeholder={t(lang, "Country")} />
                                                                            </SelectTrigger>
                                                                            <SelectContent>
                                                                                <SelectGroup>
                                                                                    {countries?.map((item, index) => (
                                                                                        <SelectItem value={item.key} key={index}>
                                                                                            <div className="code-country-slug-cont">
                                                                                                <div className="select-country-item-cont">
                                                                                                    <Image
                                                                                                        src={item.flag}
                                                                                                        alt={item.name}
                                                                                                        width={20}
                                                                                                        height={20}
                                                                                                        className="country-flag"
                                                                                                    />
                                                                                                </div>
                                                                                                <p>({item.key})</p>
                                                                                            </div>
                                                                                        </SelectItem>
                                                                                    ))}
                                                                                </SelectGroup>
                                                                            </SelectContent>
                                                                        </Select>
                                                                    </FormControl>
                                                                    <FormMessage className="hidden" id="country-error" />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                    <Input
                                                        type="tel"
                                                        className="phone-input"
                                                        style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
                                                        placeholder={t(lang, "Phone_Number")}
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            <div className="flex items-center justify-between">
                                                <FormMessage id="phone-error" />
                                                {
                                                    form.formState.errors.country && (
                                                        <p className="country-error">{form.formState.errors.country?.message}</p>
                                                    )
                                                }
                                            </div>
                                        </FormItem>
                                    )}
                                />

                                {/* Password Field */}
                                <FormField

                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="from-input-wrapper-password">
                                            <FormLabel className="password-label">
                                                {t(lang, "Password")}
                                            </FormLabel>
                                            <FormControl >
                                                <div className={`password-input-wrapper ${form.formState.errors.password ? 'error-password' : form.formState.isDirty && field.value ? 'success-password' : ''}`}>
                                                    <Input
                                                        {...field}
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder={t(lang, "Password")}
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
                                        {t(lang, "Forgot_Password")}
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
                                            <span>{t(lang, "Login")}</span>
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
                                        {t(lang, "Create_Account")}
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
                            <p className="guest-login-text">{t(lang, "guest_login_text")}</p>
                        </Link>
            </div>
        </div>
    )
}