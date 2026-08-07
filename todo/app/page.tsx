import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignIn from "./components/sign-in";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/home");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-border-default bg-background-elevated/80 p-8 shadow-xl backdrop-blur-md">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-2">
            Todo
          </h1>

          <p className="mt-3 leading-relaxed text-text-secondary">
            Stay organized. Manage your daily tasks, track progress, and
            achieve your goals with ease.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <SignIn
            buttonClassName="
              w-full cursor-pointer rounded-2xl
              border border-border-default
              bg-secondary-2/40
              p-4
              font-semibold text-text-primary
              transition-all duration-200
              hover:-translate-y-0.5
              hover:border-primary-2
              hover:bg-secondary-2/70
              active:translate-y-0
            "
          >
            <span className="flex items-center justify-center gap-3">
              <FaGithub className="h-5 w-5" />
              <span>Sign in with GitHub</span>
            </span>
          </SignIn>

          <div className="flex items-center gap-3">
            <hr className="flex-1 border-border-default" />
            <span className="text-sm text-text-muted">or</span>
            <hr className="flex-1 border-border-default" />
          </div>

          <SignIn
            buttonClassName="
              w-full cursor-pointer rounded-2xl
              border border-border-default
              bg-secondary-1/40
              p-4
              font-semibold text-text-primary
              transition-all duration-200
              hover:-translate-y-0.5
              hover:border-primary-1
              hover:bg-secondary-1/70
              active:translate-y-0
            "
          >
            <span className="flex items-center justify-center gap-3">
              <FaGoogle className="h-5 w-5" />
              <span>Sign in with Google</span>
            </span>
          </SignIn>
        </div>

        <p className="mt-8 text-center text-sm text-text-muted">
          By signing in, you agree to our{" "}
          <a
            href="/tos"
            className="text-primary-2 underline underline-offset-2 transition-colors hover:text-primary-1"
          >
            Terms of Service
          </a>
          .
        </p>
      </div>
    </div>
  );
}