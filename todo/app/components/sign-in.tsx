import { signInAction } from "@/app/actions/auth";

type PropType = {
  className: string;
  children: React.ReactNode;
};

export default function SignIn({ className, children }: PropType) {
  return (
    <form
      className="inline p-0 m-0"
      action={signInAction}
    >
      <button className={className} type="submit">{children}</button>
    </form>
  )
}