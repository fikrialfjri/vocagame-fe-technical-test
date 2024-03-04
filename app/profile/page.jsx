"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { FaUserCog } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";

import { useAppSelector } from "@/redux/store";
import { signOut } from "@/redux/features/auth-slice";
import { getSessionFromCookie, saveSessionToCookie } from "@/utils/cookies";

import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ThemeMode from "@/components/ThemeMode";

const Profile = () => {
  const { refresh } = useRouter();
  const currentUser = getSessionFromCookie();
  const userData = useAppSelector((state) => state.authReducer.value);
  const dispatch = useDispatch();

  return (
    <main className="w-full">
      <header className="h-16 bg-primary-400 border-b border-b-neutral-300 dark:border-b-gray-700">
        <div className="max-w-7xl h-full flex items-center justify-between mx-auto px-6 py-3">
          <Image
            src="/images/brand-logo-light.webp"
            alt="Brand Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-fit h-full m-0"
          />
          <div className="flex items-center gap-4">
            <ThemeMode fixed={false} />
            <Avatar name={userData?.name} />
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto py-10 px-6">
        <div>
          <Image
            src="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"
            alt="Profile Background"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full m-0 h-32 md:h-44 lg:h-52 text-center rounded-2xl object-cover dark:shadow-[0_20px_80px_rgb(22,200,41,0.2)]"
          />
          <div className="!-mt-14 px-2 sm:px-6 flex items-center justify-between">
            <Avatar
              width={0}
              height={0}
              avatarClasses="w-24 h-24 sm:h-32 sm:w-32"
              description="Normal Member"
              name={userData?.name}
            >
              {userData?.name}
            </Avatar>
            <div className="hidden mt-6 sm:block">
              <Button>Edit Profile</Button>
            </div>
          </div>
        </div>
        <div className="w-full lg:grid lg:grid-cols-12 lg:gap-x-5 lg:px-8 lg:py-4">
          <aside className="border-r px-2 py-6 sm:px-6 lg:col-span-3 lg:p-0 dark:border-r-gray-700">
            <nav className="hidden px-2 h-full content-start lg:grid lg:content-between">
              <ul className="space-y-4 m-0 p-0">
                <li className="list-none inline-flex items-center gap-2 rounded-md hover:bg-neutral-200 duration-150 w-full px-3 py-1 cursor-pointer dark:hover:bg-gray-900/70">
                  <FaUserCog /> Profile
                </li>
              </ul>
              <div className="mt-4 cursor-pointer content-end border-t lg:mt-0 dark:border-t-gray-700">
                <ul className="space-y-4 m-0 p-0">
                  <li
                    onClick={async () => {
                      await dispatch(signOut());
                      await saveSessionToCookie({
                        ...currentUser,
                        isAuth: false,
                      });
                      refresh();
                    }}
                    className="list-none inline-flex items-center gap-2 rounded-md hover:bg-red-50 duration-150 w-full px-3 py-1 cursor-pointer text-red-800 dark:text-red-500 dark:hover:bg-gray-900/70 dark:hover:text-red-400"
                  >
                    <FiLogOut /> Logout
                  </li>
                </ul>
              </div>
            </nav>
          </aside>
          <div className="space-y-6 px-4 lg:col-span-9 lg:pl-10 lg:pr-0">
            <div className="rounded-xl bg-white border border-neutral-200 shadow-[0_8px_30px_rgb(22,200,41,0.1)] px-8 py-10 space-y-4 dark:bg-gray-800 dark:border-gray-700 dark:shadow-[0_0_40px_rgb(22,200,41,0.08)]">
              <h1 className="inline-flex m-0 gap-3 text-2xl font-extrabold items-center pb-4 border-b border-neutral-300 w-full dark:border-gray-700">
                <CiEdit /> Edit Profile
              </h1>
              <Input label="Nama" placeholder="Ketik nama anda" />
              <Input
                label="No. Handphone"
                placeholder="Ketik no. handphone anda"
              />
              <Input
                label="Old Password"
                placeholder="Ketik old password anda"
              />
              <Input
                label="New Password"
                placeholder="Ketik new password anda"
              />
              <footer className="!mt-10">
                <Button block>Edit Profile</Button>
              </footer>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary-400 border-t border-t-neutral-300 px-6 py-8 dark:border-t-gray-700">
        <div className="mx-auto max-w-7xl">
          <Image
            src="/images/brand-logo-light.webp"
            alt="Brand Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-fit h-16 sm:h-20 md:h-24 lg:h-28 m-0"
          />
          <div className="mt-16 pt-8 border-t border-t-300 text-white text-center">
            <p>© 2023 PT BERMAIN BERSAMA INDONESIA</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Profile;
