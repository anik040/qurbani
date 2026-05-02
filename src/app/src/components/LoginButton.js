"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p>Welcome, {session.user.name}</p>
        <img src={session.user.image} alt="Profile" width="40" className="rounded-full" />
        <button onClick={() => signOut()} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">Sign out</button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn("google")} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
      Sign in with Google
    </button>
  );
}
