import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import api from "../api/client";

export const EmailCollect: React.FC = () => {
  const [email, setEmail] = useState("");

  const submit = async () => {
    await api.emails.$post({
      json: {
        email,
      },
    });

    window.location.reload();
  };
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gray-100 dark:bg-gray-900" />
      <div className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center space-y-8">
          <div className="grid gap-6 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              <span className="block">The future of fitness is here</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Get early access to our app and start your fitness journey today.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-4">
            <div className="flex rounded-lg shadow-sm">
              <Input
                className="min-w-0 flex-1 rounded-lg"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button className="ml-2" type="button" onClick={() => submit()}>
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              THIS IS A VERY BASIC EXAMPLE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
