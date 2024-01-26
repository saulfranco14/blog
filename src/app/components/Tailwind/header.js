import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-white border-b border-gray-200  mb-10">
      <nav
        className="mx-auto flex items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Blog group mas</span>
            <Image
              className="w-8 h-8 mr-2"
              src="/images/icon.png"
              width={48}
              height={48}
              alt="icon"
            />
          </Link>
        </div>

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
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white opacity-90 z-10"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Blog Gruo Mas</span>
              <Image
                className="w-8 h-8 mr-2"
                src="/images/icon.png"
                width={48}
                height={48}
                alt="icon"
              />
            </Link>
            <Link
              href="/login"
              className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
            >
              Iniciar Sesión
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <Link
                  href="/login"
                  className="mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Registrarme
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
