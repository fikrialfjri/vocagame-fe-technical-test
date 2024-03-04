"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import useForm from "@/hooks/use-form";
import { signUp } from "@/redux/features/auth-slice";
import { checkEmptyData } from "@/utils/common";
import { saveSessionToCookie } from "@/utils/cookies";

import Button from "@/components/Button";
import Input from "@/components/Input";
import TextLink from "@/components/TextButton";
import ThemeMode from "@/components/ThemeMode";

const Signup = () => {
  const dispatch = useDispatch();
  const { replace } = useRouter();
  const { state, handleFormChange, resetForm } = useForm({
    name: "",
    username: "",
    phone_number: "",
    password: "",
    password_confir: "",
  });

  return (
    <main className="min-h-screen mx-auto flex flex-col items-center justify-center py-10 px-6">
      <ThemeMode />
      <div className="w-full sm:w-[488px] space-y-7">
        <div className="lg:fixed lg:top-7 lg:left-7">
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
            Daftarkan Akun
          </h1>
          <p className="text-base md:text-lg">
            Daftar akun anda dengan mengisi form dibawah
          </p>
        </header>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            if (state["password"] !== state["password_confir"]) {
              alert("Password dan Konfirmasi Password tidak sesuai");
              return;
            }

            delete state["password_confir"];

            await dispatch(signUp(state));
            await saveSessionToCookie(state);
            replace("/auth/signin");
            resetForm();
          }}
          className="space-y-5"
        >
          <Input
            id="name"
            name="name"
            label="Nama Anda"
            placeholder="Ketik nama anda"
            onChange={handleFormChange}
          />
          <Input
            id="username"
            name="username"
            label="Username"
            placeholder="Ketik username anda"
            onChange={handleFormChange}
          />
          <Input
            id="phone_number"
            name="phone_number"
            label="Nomor Handphone"
            placeholder="Ketik nomor handphone anda"
            onChange={handleFormChange}
          />
          <Input
            id="password"
            name="password"
            label="Password"
            placeholder="Masukkan password anda"
            onChange={handleFormChange}
          />
          <Input
            id="password_confir"
            name="password_confir"
            label="Konfirmasi Password"
            placeholder="Masukkan kembali password anda"
            onChange={handleFormChange}
            error={{
              status: state.password !== state.password_confir,
              message: "Password dan Konfirmasi Password tidak sesuai",
            }}
          />
          <footer className="mt-10 flex flex-col items-center">
            <Button type="submit" block disabled={checkEmptyData(state)}>
              Daftar Sekarang
            </Button>
            <div className="flex items-center gap-2">
              <p>Sudah punya akun?</p>
              <TextLink href="/auth/signin">Masuk Sekarang</TextLink>
            </div>
          </footer>
        </form>
      </div>
    </main>
  );
};

export default Signup;
