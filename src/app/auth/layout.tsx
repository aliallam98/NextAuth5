const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-sky-500 to-purple-500">
      {children}
    </main>
  );
};

export default AuthLayout;
