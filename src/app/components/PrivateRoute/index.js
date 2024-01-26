import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fnVerifyLogin } from "@/app/redux/actions/login";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.login);
  const [hasVerified, setHasVerified] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("login");
    if (Object.keys(profile).length > 0 && token) {
      dispatch(fnVerifyLogin(token));
      setHasVerified(true);
    }

    if (Object.keys(profile).length === 0) {
      router.push("/");
    }
  }, []);

  return profile && hasVerified ? <>{children}</> : null;
};

export default PrivateRoute;
