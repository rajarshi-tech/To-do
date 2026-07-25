import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github", { redirectTo: "/home" })
      }}
    >
      <button type="submit">Sign in</button>
    </form>
  )
}