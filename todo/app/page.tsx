// app/page.tsx

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignIn from "./components/sign-in";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/home");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full p-10 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl text-center">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-emerald-400">
          Todo
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Stay organized. Manage your daily tasks, track progress, and achieve your goals with ease.
        </p>
        
        <div className="space-y-4">
          <SignIn 
            buttonClassName="w-full cursor-pointer p-4 bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl font-semibold text-white"
          >
            Sign in with GitHub
          </SignIn>
          
          <div className="flex items-center my-2">
            <hr className="flex-1 border-white/10" />
            <span className="px-3 text-sm text-gray-500">or</span>
            <hr className="flex-1 border-white/10" />
          </div>

          <SignIn 
            buttonClassName="w-full cursor-pointer p-4 bg-white/10 hover:bg-white/20 transition-colors rounded-xl font-semibold text-white border border-white/10"
          >
            Sign in with Google
          </SignIn>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          By signing in, you agree to our <a href="#" className="underline cursor-pointer">Terms of Service</a>.
        </p>
      </div>
    </main>
  );
}

