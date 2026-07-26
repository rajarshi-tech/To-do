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
    <main className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md">
        <h1 className="text-3xl font-bold mb-6">Welcome</h1>
        <SignIn buttonClassName="cursor-pointer p-4 bg-primary-1 rounded-2xl">Sign in with GitHub</SignIn>
      </div>
    </main>
  );
}
