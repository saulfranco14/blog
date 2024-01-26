import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/app/redux/actions/login";
import { useRouter } from "next/router";

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const logoutAndRedirect = async () => {
      try {
        await dispatch(logout());

        let seconds = 3;
        const intervalId = setInterval(() => {
          seconds--;
          setCountdown(seconds);
        }, 1000);

        setTimeout(() => {
          clearInterval(intervalId);
          router.push("/");
        }, 3000);
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

    logoutAndRedirect();
  }, [dispatch, router]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <p className="text-2xl mb-4">
          Cerrando sesión en {countdown} segundos...
        </p>
      </div>
    </div>
  );
};

export default Index;
