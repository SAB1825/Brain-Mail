"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Icons } from "~/components/ui/icons";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <SignUp.Root>
        <Clerk.Loading>
          {(isLoading) => (
            <SignUp.Step name="start">
              <Card className="w-full sm:w-96 shadow-lg">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
                  <CardDescription className="text-center text-sm text-gray-600">Start your journey with us</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-y-4">
                  {/* Google Sign Up Button */}
                  <Clerk.Connection name="google" asChild>
                    <Button size="sm" variant="outline" type="button" className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300">
                      <Clerk.Loading scope="provider:google">
                        {(isLoading) => isLoading ? (
                          <Icons.spinner className="size-4 animate-spin" />
                        ) : (
                          <>
                            <Icons.google className="mr-2 size-4" />
                            Google
                          </>
                        )}
                      </Clerk.Loading>
                    </Button>
                  </Clerk.Connection>

                  <p className="flex items-center gap-x-3 text-xs text-gray-500 before:h-px before:flex-1 before:bg-gray-200 after:h-px after:flex-1 after:bg-gray-200">
                    or
                  </p>

                  {/* Email Field */}
                  <Clerk.Field name="emailAddress" className="space-y-2">
                    <Clerk.Label asChild><Label>Email address</Label></Clerk.Label>
                    <Clerk.Input type="email" required asChild><Input /></Clerk.Input>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  {/* First Name Field */}
                  <Clerk.Field name="firstName" className="space-y-2">
                    <Clerk.Label asChild><Label>First Name</Label></Clerk.Label>
                    <Clerk.Input type="text" required asChild><Input /></Clerk.Input>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  {/* Last Name Field */}
                  <Clerk.Field name="lastName" className="space-y-2">
                    <Clerk.Label asChild><Label>Last Name</Label></Clerk.Label>
                    <Clerk.Input type="text" required asChild><Input /></Clerk.Input>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  {/* Password Field */}
                  <Clerk.Field name="password" className="space-y-2">
                    <Clerk.Label asChild><Label>Password</Label></Clerk.Label>
                    <div className="relative">
                      <Clerk.Input
                        type={showPassword ? "text" : "password"}
                        required
                        asChild
                      >
                        <Input className="pr-10" />
                      </Clerk.Input>
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>
                </CardContent>
                <CardFooter>
                  <div className="grid w-full gap-y-4">
                    <SignUp.Action submit asChild>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Clerk.Loading>
                          {(isLoading) => isLoading ? (
                            <Icons.spinner className="size-4 animate-spin" />
                          ) : (
                            "Sign up"
                          )}
                        </Clerk.Loading>
                      </Button>
                    </SignUp.Action>
                    <Button variant="link" size="sm" asChild className="text-sm text-gray-600 hover:text-gray-800">
                      <Link href="/sign-in">Already have an account? Sign in</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </SignUp.Step>
          )}
        </Clerk.Loading>
      </SignUp.Root>
    </div>
  );
}