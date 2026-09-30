import AuthShell from "@/components/AuthShell";
import AuthForm from "@/components/AuthForm";
export const metadata = { title: "Sign up – ByteSpace" };
export default function SignupPage() {
  return (
    <AuthShell title="Sign up and come in" blurb="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost">
      <AuthForm mode="signup" />
    </AuthShell>
  );
}
