"use client";
import { SessionProvider } from "next-auth/react";

const Session = ({ session, children }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Session;
