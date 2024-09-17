import { UserButton } from "@/features/auth/components/user-button";

export default function Home() {
  return (
    <div className="h-screen w-full text-7xl underline">
      <h1>Home Page</h1>
      <UserButton />
    </div>
  );
}
