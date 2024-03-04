"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { signIn } from "@/redux/features/auth-slice";
import useForm from "@/hooks/use-form";
import { getSessionFromCookie, saveSessionToCookie } from "@/utils/cookies";
import { checkEmptyData } from "@/utils/common";

import Button from "@/components/Button";
import Input from "@/components/Input";
import TextLink from "@/components/TextButton";
import ThemeMode from "@/components/ThemeMode";

const Signin = () => {
  const { replace } = useRouter();

  const userRegistered = getSessionFromCookie();
  const dispatch = useDispatch();

  const { state, handleFormChange, resetForm } = useForm({
    username: "",
    password: "",
  });

  return (
    <main className="flex min-h-screen lg:max-h-screen">
      <div className="relative hidden w-0 flex-1 bg-primary-400 lg:block">
        {/* <Image
          src="/images/banner-appvoca.webp"
          alt="Banner App Voca"
          width={400}
          height={400}
          // className="m-0"
        /> */}
      </div>
      <div className="flex flex-col justify-center w-full bg-white space-y-7 px-4 pt-20 pb-12 overflow-hidden lg:overflow-auto sm:px-6 lg:px-12 lg:w-[550px] dark:bg-gray-800">
        <ThemeMode />
        <div>
          <Image
            src="/images/brand-logo-primary.webp"
            alt="Brand Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-36 m-0"
          />
        </div>
        <header className="space-y-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Silahkan Login
          </h1>
          <p className="text-base md:text-lg">
            Masukkan username dan password anda untuk masuk
          </p>
        </header>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            if (
              state["username"] !== userRegistered?.["username"] ||
              state["password"] !== userRegistered?.["password"]
            ) {
              alert("Username atau password salah!");
              return;
            }

            await dispatch(signIn(state));
            await saveSessionToCookie(
              { ...userRegistered, isAuth: true },
              true
            );
            replace("/profile");
            resetForm();
          }}
          className="space-y-5"
        >
          <Input
            id="username"
            name="username"
            label="Username"
            placeholder="Ketik username anda"
            onChange={handleFormChange}
          />
          <Input
            id="password"
            name="password"
            label="Password"
            placeholder="Ketik password anda"
            onChange={handleFormChange}
          />
          <footer className="mt-10 flex flex-col items-center">
            <Button type="submit" block disabled={checkEmptyData(state)}>
              Masuk Sekarang
            </Button>
            <div className="flex items-center gap-2">
              <p>Belum punya akun?</p>
              <TextLink href="/auth/signup">Daftar Sekarang</TextLink>
            </div>
          </footer>
        </form>
      </div>
    </main>
  );
};

export default Signin;
