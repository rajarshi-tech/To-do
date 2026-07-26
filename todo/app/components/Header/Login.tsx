import SignIn from "../sign-in";

export default function Login() {
  return (
    <SignIn
      formClassName="mr-3"
      buttonClassName="py-3 px-4 border-0 text-text-primary bg-secondary-1/30 rounded-2xl transition-all duration-200
      hover:bg-secondary-1/50 hover:text-text-muted hover:-translate-y-0.5 
      focus:ring
      active:bg-primary-1/80 active:text-text-secondary active:translate-y-0"
    >
      Login
    </SignIn>
  );
}
