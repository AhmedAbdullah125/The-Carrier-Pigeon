"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Select, SelectGroup, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import loginImage from "@/public/images/registeration/forgetuser.jpg"
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
    country: z
        .string().min(1, { message: "البلد مطلوب" }),
})

export default function ForgetPassword({ formData, setFormData, step, setStep, lang }) {
    const [showPassword, setShowPassword] = useState(false)
    const [country, setCountry] = useState("")
    const [loading, setLoading] = useState(false)
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            phone: formData?.phone || "",
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
                                نسيت كلمه المرور ؟
                            </h1>
                            <p className="login-subtitle">لا مشكله  , أدخل رقم جوالك المرتبط بالحساب وسنرسل لك كود تأكيد لإعادة تعيين كلمة المرور</p>
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
                                                رقم الجوال
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
                                            <span>ارسال رمز التحقق</span>
                                        )
                                    }
                                </Button>

                                {/* Sign Up Link */}
                                
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