import React, { useState } from 'react';
import Link from 'next/link';
import { GoogleOutlined, LeftOutlined } from '@ant-design/icons';
import { emailSignup, googleLogin } from '@/utils/auth';
import { useRouter } from 'next/router';


export default function Signup() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);


  const handleEmailContinue = () => {
    setShowEmailForm(true);
  };

  const handleGoBack = () => {
    setShowEmailForm(false);
  };

  const handleGoogleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default form submission
    const { success, error } = await googleLogin(); // Using the function from auth.ts
    if (success) {
      // Redirect to the desired page
      router.push("/");
    } else {
      setErrorMessage(error || 'An unknown error occurred.');
    }
  };
  
  
  

    const handleEmailSignup = async () => {
      if (!isChecked) {
        setErrorMessage('You must agree to the Terms of Service, Privacy Policy, and Notification Settings to continue.');
        return;
      }
      const { success, error } = await emailSignup(email, password);
      if (success) {
        // Redirect to the desired page
        router.push("/");
      } else {
        setErrorMessage(error || 'An unknown error occurred.');
      }
    };
  
  return (
    <>
      <div className="flex min-h-screen relative">
        {showEmailForm && (
          <div className="absolute top-0 left-0 m-4">
            <button onClick={handleGoBack} className="border p-2 border-gray-300 rounded-full">
              <LeftOutlined style={{ fontSize: '24px' }} />
            </button>
          </div>
        )}
      
        <div className="w-1/3">
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="/Out.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign up to App
              </h2>
            </div>

            <div className="mt-8">
              <form action="#" method="POST" className="space-y-6">
                <button
                  onClick={(e) => handleGoogleSignup(e)}
                  className="flex items-center justify-center w-full rounded-md px-4 py-2 border border-gray-300 text-black text-sm font-semibold leading-6 shadow-sm hover:bg-gray-100 focus:outline-none"
                >
                  <GoogleOutlined color="inherit" style={{ marginRight: '8px' }} />
                  Sign up with Google
                </button>

                <div className="relative text-center">
                  <span className="relative z-10 px-4 bg-white text-sm text-gray-500"> or </span>
                  <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-300"></div>
                </div>

                {showEmailForm ? (
                  <>
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
                          onChange={(e) => setIsChecked(e.target.checked)} // Update checkbox state
                        />
                        <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
                        I agree with Apps;s{' '}
                        <Link href="/terms-of-service">
                          <a className="underline">Terms of Service</a>
                        </Link>{' '}
                        ,{' '}
                        <Link href="/privacy-policy">
                          <a className="underline">Privacy Policy</a>
                        </Link>{' '}
                        , and default{' '}
                        <Link href="/notification-settings">
                          <a className="underline">Notification Settings</a>
                        </Link>
                      </label>

                      </div>
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={handleEmailSignup}
                        className="flex w-full justify-center rounded-lg bg-black px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        disabled={!isChecked} // Disable button if checkbox is not checked
                      >
                        Create Account
                      </button>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-gray-500 text-center">
                      Already have an account?{' '}
                      <Link href="/login">
                     <a className="underline">Log in</a>
                    </Link>
                    </p>
                    {errorMessage && <p className="mt-2 text-sm leading-6 text-red-500 text-center">{errorMessage}</p>}

                  </>
                ) : (
                  <>
                    <div>
                      <button
                        type="button"
                        onClick={handleEmailContinue}
                        className="flex w-full justify-center rounded-lg bg-black px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                      >
                        Continue with Email
                      </button>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-gray-500 text-center">
                      By signing up, you agree to App&apos;s{' '}
                      <Link href="/terms-of-service">
                        <a className="underline">Terms of Service</a>
                      </Link>
                      ,{' '}
                      <Link href="/privacy-policy">
                        <a className="underline">Privacy Policy</a>
                      </Link>
                      , and default{' '}
                      <Link href="/notification-settings">
                        <a className="underline">Notification Settings</a>
                      </Link>
                    </p>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
