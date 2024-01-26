import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function MobileMenu({ onClose }) {
  const router = useRouter();

  return (
    <div className="lg:hidden fixed inset-0 z-20 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="-m-1.5 p-1.5">
            <span className="sr-only">Blog Gruo Mas</span>
            {/* Reemplazar con tu componente de imagen */}
            <img
              className="w-8 h-8 mr-2"
              src="/images/icon.png"
              width={48}
              height={48}
              alt="icon"
            />
          </a>
        </Link>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
          onClick={onClose}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-6">
        {router.pathname !== "/login" && (
          <Link href="/login">
            <a
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              onClick={onClose}
            >
              Iniciar Sesión
            </a>
          </Link>
        )}
        {router.pathname !== "/registro" && (
          <Link href="/registro">
            <a
              className="mt-4 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              onClick={onClose}
            >
              Registrarme
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
