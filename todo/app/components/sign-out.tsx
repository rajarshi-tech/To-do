import { signOutAction } from "@/app/actions/auth";

type PropType = {
  formClassName: string;
  buttonClassName: string;
  children: React.ReactNode;
};

export default function SignOut({ formClassName, buttonClassName, children }: PropType) {
  return (
    <form action={signOutAction} className={formClassName}>
      <button type="submit" className={buttonClassName}>
        {children}
      </button>
    </form>
  );
}