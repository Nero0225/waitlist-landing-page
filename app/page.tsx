"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ReadreadyLanding() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
      {/* Desktop Editor Preview - Only visible on larger screens */}
      <div className="hidden lg:block fixed left-0 top-0 w-1/3 h-screen">
        <div className="relative w-full h-full">
          <img
            src="/images/editor-preview.png"
            alt="Readready eBook editor interface"
            className="w-full h-full object-cover object-left"
          />
        </div>
      </div>

      {/* Mobile Editor Preview Image - Only visible on mobile/tablet */}
      <div className="lg:hidden w-full pb-4">
        <div className="w-full h-64">
          <img
            src="/images/mobile-logo.png"
            alt="Readready eBook editor interface"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-[33%] lg:min-h-screen flex items-center justify-center p-6 pt-4 lg:pt-6">
        <div className="max-w-4xl w-full space-y-8">
          {/* Logo */}
          <div className="lg:text-left">
            <div className="flex lg:justify-start gap-2 mb-8">
              <div className="w-8 h-6 bg-yellow-400 rounded"></div>
              <span className="text-2xl font-bold text-gray-900">readready</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Bring your ideas to life and <span className="text-purple-500">create eBooks with ease</span>
            </h1>

            <p className="text-base text-gray-600 leading-relaxed">
              Readready offers many features that make it easy to create professional eBooks. You can start with a blank
              template or choose from a variety of pre-made templates. Then you can add your own text and images. Use
              the help of our AI assistant. If you are satisfied with your eBook, you can download it as a PDF or
              publish it online.
            </p>
          </div>

          {/* Signup Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center lg:text-left">Join the waitlist now</h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 rounded-xl border-gray-200 focus:border-purple-400 focus:ring-purple-400"
              />
              <Button
                className="h-10 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-xl lg:h-12 w-3/5 mx-auto sm:w-auto sm:mx-0"
                type="submit"
              >
                Notify me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
