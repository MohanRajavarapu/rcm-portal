"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl">Something broke on this page.</h1>
      <p className="mt-3 text-muted-foreground">Try again, or go back to the home cycle map.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Button onClick={reset} className="h-10 px-4">
          Retry
        </Button>
        <Link href="/" className="inline-flex h-10 items-center text-sm text-primary underline-offset-4 hover:underline">
          Home
        </Link>
      </div>
    </div>
  );
}
