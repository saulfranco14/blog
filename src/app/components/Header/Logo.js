import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Blog Grupo Promass</span>
        <Image
          className="w-8 h-8 mr-2"
          src="/images/icon.png"
          width={48}
          height={48}
          alt="icon"
        />
      </Link>
    </div>
  );
}
