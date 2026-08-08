import { signInActionGoogle } from "@/app/actions/auth";

type PropType = {
  formClassName?: string;
  buttonClassName?: string;
  children: React.ReactNode;
};

export default function SignInGoogle({ formClassName, buttonClassName, children }: PropType) {
  return (
    <form
      className={formClassName}
      action={signInActionGoogle}
    >
      <button className={buttonClassName} type="submit">{children}</button>
    </form>
  )
}