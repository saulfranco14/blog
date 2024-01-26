import React, { useEffect } from "react";
import Link from "next/link";

export default function NavigationLinks({ router, profile }) {
  return (
    <div className="flex flex-1 items-center justify-end gap-x-6">
      {profile && Object.keys(profile).length > 0 ? (
        <>
          <Link
            href="/blog/create"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-lg font-semibold text-white"
          >
            {profile.data.user_login.charAt(0).toUpperCase()}
          </Link>
          <Link
            href="/logout"
            className="rounded-md bg-indigo-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
          >
            Cerrar Sesión
          </Link>
        </>
      ) : (
        <>
          {router.pathname !== "/login" && (
            <Link
              href="/login"
              className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
            >
              Iniciar sesión
            </Link>
          )}
          {router.pathname !== "/registro" && (
            <Link
              href="/registro"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
            >
              Registrarme
            </Link>
          )}
        </>
      )}
    </div>
  );
}
