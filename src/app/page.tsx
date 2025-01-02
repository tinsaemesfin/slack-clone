"use client";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
export default function Home() {
  const { signOut } = useAuthActions();
  return (
    <div className="">
      <h2>Logged in </h2>
      <Button variant="destructive" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}
