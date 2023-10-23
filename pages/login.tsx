import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleOutlined, MailOutlined } from '@ant-design/icons';
import { emailLogin, googleLogin } from '@/utils/auth';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // 1. Add error message state
  const router = useRouter(); // For redirection

  const handleGoogleLogin = async () => {
    const { success, error } = await googleLogin(); // Using the function from auth.ts
    if (success) {
      router.push("/"); // 2. Redirect to '/'
    } else {
      setErrorMessage(error || 'An unknown error occurred.'); // 3. Set error message
    }
  };

  const handleEmailLogin = async () => {
    const { success, error } = await emailLogin(email, password); // Using the function from auth.ts
    if (success) {
      router.push("/"); // 2. Redirect to '/'
    } else {
      setErrorMessage(error || 'An unknown error occurred.'); // 3. Set error message
    }
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-1/3">
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="/Intro.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to App
              </h2>
            </div>
            <div className="mt-8">
              <form action="#" method="POST" className="space-y-6">
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center w-full rounded-md px-4 py-2 border border-gray-300 text-black text-sm font-semibold leading-6 shadow-sm hover:bg-gray-100 focus:outline-none"
                >
                  <GoogleOutlined color="inherit" style={{ marginRight: '8px' }} />
                  Sign in with Google
                </button>

                <div className="relative text-center">
                  <span className="relative z-10 px-4 bg-white text-sm text-gray-500">or sign in with email</span>
                  <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-300"></div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm leading-6">
                    <a href="#" className="font-semibold text-black hover:underline">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={handleEmailLogin}
                    className="flex w-full justify-center rounded-lg bg-black px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    Sign in
                  </button>
                </div>

                
                <p className="mt-2 text-sm leading-6 text-gray-500 text-center">
                    Don&apos;t have an account?{' '}
                     <Link href="/signup">
                     <a className="font-semibold text-black underline">
                        Sign up
                    </a>
                  </Link>
                </p>
                {errorMessage && <p className="mt-2 text-sm leading-6 text-red-500 text-center">{errorMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
