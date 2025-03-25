/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useRouter } from "next/router";

const withAuth = (Component: React.ComponentType<any>, role?: string) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter();

    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login");
      return null;
    }

    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    if (role && decodedToken.role !== role) {
      router.push("/user");
      return null;
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
