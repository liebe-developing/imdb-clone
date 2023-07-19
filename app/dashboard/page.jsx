"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/signin");
  }

  if (status === "authenticated") {
    return (
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-36 gap-20 flex flex-col sm:flex sm:flex-row">
        <div>
          <div className="flexCenter gap-3">
            <Image
              src={session?.user?.image}
              width={100}
              height={100}
              alt={session?.user?.name}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <p className="text-sm pb-2">Signed in as:</p>
              <p className="text-lg font-semibold">{session?.user?.name}</p>
              <p className="text-sm text-gray-500">{session?.user?.email}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-700">
            Dashboard is a protected route and you can visit the page if only
            you have signed in to your account!
          </h1>
        </div>
      </div>
    );
  }
};

export default Dashboard;
