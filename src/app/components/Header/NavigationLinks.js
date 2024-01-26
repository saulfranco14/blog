import React from "react";
import Link from "next/link";

export default function NavigationLinks({ router }) {
  return (
    <div className="flex flex-1 items-center justify-end gap-x-6">
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
    </div>
  );
}
