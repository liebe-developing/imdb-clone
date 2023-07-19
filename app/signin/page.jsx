"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import SocialButtons from "@/components/SocialButtons";

const Signin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status == "authenticated") {
    router.push("/");
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex flex-col gap-3 justify-center items-center mx-2 sm:mx-auto px-4 py-28 max-w-md">
        <SocialButtons
          classes="bg-[#222] text-white social_buttons hover:bg-black dark:hover:bg-gray-800"
          singinUrl="github"
          title="Continue with Github"
          Icon={FaGithub}
        />
        <SocialButtons
          classes="border social_buttons"
          singinUrl="google"
          title="Sign in with Google"
          Icon={FcGoogle}
        />
      </div>
    );
  }
};

export default Signin;
