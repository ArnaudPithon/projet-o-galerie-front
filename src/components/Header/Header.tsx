"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Menu from '../Menu/Menu';
import logo from '@/src/assets/images/logobig.png';

export default function Header() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <header className="flex justify-evenly md:justify-between md:gap-28 items-center md:items-stretch w-screen h-[15vh] md:h-[25vh]">
      <div className="self-auto md:p-4 w-7/12 container ml-14 md:w-2/5 md:mr-14 md:ml-16 md:m-5">
        <Link href="/"><Image object-fit="fill" alt="logo" src={logo} /></Link>
      </div>
      <Menu />
    </header>
    )
  } else {
    return (
      <header className="flex justify-evenly md:justify-between md:gap-28 items-center md:items-stretch w-screen h-[15vh] md:h-[15vh]">
      <div className="self-auto md:p-4 w-7/12 container ml-14 md:w-2/5 md:mr-14 md:ml-16 md:m-5">
      <Link href="/"><Image height={130} width={260} alt="logo" src={logo} /></Link>
      </div>
      <Menu />
    </header>
    )
  }
}
