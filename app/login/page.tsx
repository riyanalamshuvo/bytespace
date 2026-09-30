import AuthShell from "@/components/AuthShell";
import AuthForm from "@/components/AuthForm";
export const metadata = { title: "Log in – ByteSpace" };
export default function LoginPage() {
  return (
    <AuthShell title="Sign in with ease" blurb="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.">
      <AuthForm mode="login" />
    </AuthShell>
  );
}
