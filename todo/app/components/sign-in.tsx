import { signInAction } from "@/app/actions/auth";

type PropType = {
  formClassName?: string;
  buttonClassName?: string;
  children: React.ReactNode;
};

export default function SignIn({ formClassName, buttonClassName, children }: PropType) {
  return (
    <form
      className={formClassName}
      action={signInAction}
    >
      <button className={buttonClassName} type="submit">{children}</button>
    </form>
  )
}