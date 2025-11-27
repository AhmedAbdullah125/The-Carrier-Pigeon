"use client"

import React from "react"
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

// Zod validation schema
const loginSchema = z.object({
    phone: z
        .string()
        .min(1, { message: "رقم الجوال مطلوب" })
        .regex(/^[0-9]+$/, { message: "يجب أن يحتوي رقم الجوال على أرقام فقط" })
        .min(9, { message: "رقم الجوال يجب أن يكون 9 أرقام على الأقل" }),
    password: z
        .string()
        .min(1, { message: "كلمة المرور مطلوبة" })
        .min(6, { message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل" }),
    country: z
        .string().min(1, { message: "البلد مطلوب" }),
})

export default function Login({ formData, setFormData, step, setStep, lang }) {
    const [showPassword, setShowPassword] = React.useState(false)
    const [country, setCountry] = React.useState("")

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            phone: formData?.phone || "",
            password: "",
            country: "",
        },
    })

    const onSubmit = (data) => {
        console.log(data);

        setFormData({ ...formData, ...data })
        console.log(formData);

        // setStep("verify")
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
                                مرحب بعودتك
                            </h1>
                            <p className="login-subtitle">مرحبًا بك في النظام الإلكتروني لاداره سباقات الزاجل.</p>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="login-form">
                                {/* Phone Number Field */}
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="password-label">
                                                رقم الجوال
                                            </FormLabel>
                                            <FormControl>
                                                <div className={`input-of-mobile-num ${ form.formState.errors.phone || form.formState.errors.country
                                                    ? 'error'
                                                    : form.formState.isDirty  || (field.value && country && !form.formState.errors.phone && !form.formState.errors.country)
                                                        ? 'success'
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
                                                                                <SelectValue placeholder={lang === 'ar' ? 'البلد' : 'Country'} />
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
                                                        placeholder={lang === 'ar' ? 'أدخل رقم هاتفك' : 'Enter Your Phone'}
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
                                        <FormItem>
                                            <FormLabel className="password-label">
                                                كلمة المرور
                                            </FormLabel>
                                            <FormControl>
                                                <div className="password-input-wrapper">
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
                                                        className="password-toggle-btn"
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
                                    <button
                                        type="button"
                                        className="forgot-password-btn"
                                    >
                                        نسيت كلمة المرور؟
                                    </button>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={form.formState.errors.phone || form.formState.errors.password || form.formState.errors.country}
                                >
                                    تسجيل الدخول
                                </Button>

                                {/* Sign Up Link */}
                                <div className="signup-wrapper">
                                    ليس لديك حساب؟{" "}
                                    <button
                                        type="button"
                                        className="signup-btn"
                                    >
                                        إنشاء حساب
                                    </button>
                                </div>
                            </form>
                        </Form>

                        {/* Footer Text */}
                        <div className="login-footer">
                            <p className="guest-login-text">الدخول كزائر</p>
                        </div>
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