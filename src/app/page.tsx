import LoginForm from "@/components/auth/login-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-sky-500 to-purple-500">
      <h1 className="text-3xl font-semibold text-white">Auth System</h1>
      <LoginForm />
    </main>
  );
}
