// app/page.tsx
import { signIn } from "@/auth";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/home");
  }

  const SignIn = async () => {
    "use server";
    await signIn("github", { redirectTo: "/home" });
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md">
        <h1 className="text-3xl font-bold mb-6">Welcome</h1>
        <form
          action={SignIn}
        >
          <button type="submit">Sign in</button>
        </form>
      </div>
    </main>
  );
}
