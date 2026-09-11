import LoginForm from "@/components/LoginForm";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5">
      <LoginForm hasError={params.error === "1"} />
    </main>
  );
}
