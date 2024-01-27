"use client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">App Name</h1>
        <div className="rounded-md bg-white p-8 shadow-md">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Welcome</h2>
            <p className="text-sm text-gray-600">Enter your details to login</p>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <Input id="email" placeholder="example@email.com" type="email" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <Input id="password" placeholder="example" type="password" />
              </div>
            </div>
            <Button className="w-full bg-blue-600 text-white">Login</Button>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?
          <Link className="font-medium text-blue-600 hover:text-blue-500" href="#">
            Sign up.
          </Link>
        </p>
      </div>
    </div>
  )
}
