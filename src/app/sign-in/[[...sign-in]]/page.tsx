'use client'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Icons } from '~/components/ui/icons'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function SignInPage() {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8 ">
      <SignIn.Root>
        <Clerk.Loading>
          {isGlobalLoading => (
            <>
              <SignIn.Step name='start'>
                <Card className='w-full sm:w-96 shadow-lg'>
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Sign in to NetWeave</CardTitle>
                    <CardDescription className="text-center text-sm text-gray-600">
                      Welcome back! Please sign in to continue
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='grid gap-y-4'>
                    <Clerk.Connection name='google' asChild>
                      <Button
                        className='w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
                        variant='outline'
                        type='button'
                        disabled={isGlobalLoading}
                      >
                        <Clerk.Loading scope='provider:google'>
                          {isLoading =>
                            isLoading ? (
                              <Icons.spinner className='size-4 animate-spin' />
                            ) : (
                              <>
                                <Icons.google className='mr-2 size-4' />
                                Google
                              </>
                            )
                          }
                        </Clerk.Loading>
                      </Button>
                    </Clerk.Connection>
                    <p className='flex items-center gap-x-3 text-xs text-gray-500 before:h-px before:flex-1 before:bg-gray-200 after:h-px after:flex-1 after:bg-gray-200'>
                      or
                    </p>
                    <Clerk.Field name='identifier' className='space-y-2'>
                      <Clerk.Label asChild>
                        <Label>Email address</Label>
                      </Clerk.Label>
                      <Clerk.Input type='email' required asChild>
                        <Input />
                      </Clerk.Input>
                      <Clerk.FieldError className='block text-sm text-destructive' />
                    </Clerk.Field>
                  </CardContent>
                  <CardFooter>
                    <div className='grid w-full gap-y-4'>
                      <SignIn.Action submit asChild>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {isLoading => {
                              return isLoading ? (
                                <Icons.spinner className='size-4 animate-spin' />
                              ) : (
                                'Continue'
                              )
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignIn.Action>
                      <Button variant='link' size='sm' asChild className="text-sm text-gray-600 hover:text-gray-800">
                        <Link href='/sign-up'>
                          Don&apos;t have an account? Sign up
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </SignIn.Step>

              <SignIn.Step name='choose-strategy'>
                <Card className='w-full sm:w-96 '>
                  <CardHeader>
                    <CardTitle>Use another method</CardTitle>
                    <CardDescription>
                      Facing issues? You can use any of these methods to sign
                      in.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='grid gap-y-4'>
                    <SignIn.SupportedStrategy name='email_code' asChild>
                      <Button
                        type='button'
                        variant='link'
                        disabled={isGlobalLoading}
                      >
                        Email code
                      </Button>
                    </SignIn.SupportedStrategy>
                    <SignIn.SupportedStrategy name='password' asChild>
                      <Button
                        type='button'
                        variant='link'
                        disabled={isGlobalLoading}
                      >
                        Password
                      </Button>
                    </SignIn.SupportedStrategy>
                  </CardContent>
                  <CardFooter>
                    <div className='grid w-full gap-y-4'>
                      <SignIn.Action navigate='previous' asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {isLoading => {
                              return isLoading ? (
                                <Icons.spinner className='size-4 animate-spin' />
                              ) : (
                                'Go back'
                              )
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignIn.Action>
                    </div>
                  </CardFooter>
                </Card>
              </SignIn.Step>

              <SignIn.Step name='verifications'>
                <SignIn.Strategy name='password'>
                  <Card className='w-full sm:w-96 shadow-lg'>
                    <CardHeader className="space-y-1">
                      <CardTitle className="text-2xl font-bold text-center">Enter your password</CardTitle>
                      <p className='text-sm text-center text-gray-600'>
                        Welcome back <SignIn.SafeIdentifier />
                      </p>
                    </CardHeader>
                    <CardContent className='grid gap-y-4'>
                      <Clerk.Field name='password' className='space-y-2'>
                        <Clerk.Label asChild>
                          <Label>Password</Label>
                        </Clerk.Label>
                        <div className="relative">
                          <Clerk.Input type={showPassword ? 'text' : 'password'} required asChild>
                            <Input className="pr-10" />
                          </Clerk.Input>
                          <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                        <Clerk.FieldError className='block text-sm text-destructive' />
                      </Clerk.Field>
                    </CardContent>
                    <CardFooter>
                      <div className='grid w-full gap-y-4'>
                        <SignIn.Action submit asChild>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isGlobalLoading}>
                            <Clerk.Loading>
                              {isLoading => {
                                return isLoading ? (
                                  <Icons.spinner className='size-4 animate-spin' />
                                ) : (
                                  'Continue'
                                )
                              }}
                            </Clerk.Loading>
                          </Button>
                        </SignIn.Action>
                        <SignIn.Action navigate='choose-strategy' asChild>
                          <Button type='button' size='sm' variant='link' className="text-sm text-gray-600 hover:text-gray-800">
                            Use another method
                          </Button>
                        </SignIn.Action>
                      </div>
                    </CardFooter>
                  </Card>
                </SignIn.Strategy>

                <SignIn.Strategy name='email_code'>
                  <Card className='w-full sm:w-96'>
                    <CardHeader>
                      <CardTitle>Check your email</CardTitle>
                      <CardDescription>
                        Enter the verification code sent to your email
                      </CardDescription>
                      <p className='text-sm text-muted-foreground'>
                        Welcome back <SignIn.SafeIdentifier />
                      </p>
                    </CardHeader>
                    <CardContent className='grid gap-y-4'>
                      <Clerk.Field name='code'>
                        <Clerk.Label className='sr-only'>
                          Email verification code
                        </Clerk.Label>
                        <div className='grid items-center justify-center gap-y-2'>
                          <div className='flex justify-center text-center'>
                            <Clerk.Input
                              type='otp'
                              autoSubmit
                              className='flex justify-center has-[:disabled]:opacity-50'
                              render={({ value, status }) => {
                                return (
                                  <div
                                    data-status={status}
                                    className='relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=cursor]:ring-1 data-[status=selected]:ring-1 data-[status=cursor]:ring-ring data-[status=selected]:ring-ring'
                                  >
                                    {value}
                                  </div>
                                )
                              }}
                            />
                          </div>
                          <Clerk.FieldError className='block text-center text-sm text-destructive' />
                          <SignIn.Action
                            asChild
                            resend
                            className='text-muted-foreground'
                            fallback={({ resendableAfter }) => (
                              <Button variant='link' size='sm' disabled>
                                Didn&apos;t recieve a code? Resend (
                                <span className='tabular-nums'>
                                  {resendableAfter}
                                </span>
                                )
                              </Button>
                            )}
                          >
                            <Button variant='link' size='sm'>
                              Didn&apos;t recieve a code? Resend
                            </Button>
                          </SignIn.Action>
                        </div>
                      </Clerk.Field>
                    </CardContent>
                    <CardFooter>
                      <div className='grid w-full gap-y-4'>
                        <SignIn.Action submit asChild>
                          <Button disabled={isGlobalLoading}>
                            <Clerk.Loading>
                              {isLoading => {
                                return isLoading ? (
                                  <Icons.spinner className='size-4 animate-spin' />
                                ) : (
                                  'Continue'
                                )
                              }}
                            </Clerk.Loading>
                          </Button>
                        </SignIn.Action>
                        <SignIn.Action navigate='choose-strategy' asChild>
                          <Button size='sm' variant='link'>
                            Use another method
                          </Button>
                        </SignIn.Action>
                      </div>
                    </CardFooter>
                  </Card>
                </SignIn.Strategy>
              </SignIn.Step>
            </>
          )}
        
        </Clerk.Loading>
      </SignIn.Root>
    
  </div>
  )
}