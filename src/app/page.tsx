"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import UserButton from "./features/auth/components/user-button";
export default function Home() {
  
  return (
    <div className="">
      <h2>Logged in </h2>
      <UserButton />
    </div>
  );
}
