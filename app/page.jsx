"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      replace("/auth/signup");
    }
  }, [pathname]);

  return <main className="flex">For Home Page</main>;
};

export default Home;
