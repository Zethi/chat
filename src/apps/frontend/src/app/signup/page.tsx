"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PersonalInfo } from "../../components/pages/signUp/PersonalInfo";
import { Credentials } from "../../components/pages/signUp/Credentials";

export default function SignUp(): any {
  const [status, setStatus] = useState<boolean>(false);

  function handleClickOnBackButton(): void {
    if (status) {
      returnToPersonalInfo();
    }
  }

  function returnToPersonalInfo(): void {
    setStatus(false);
  }

  return (
    <main className="px-4 md:px-0">
      <div className="my-4 w-full duration-300 ease-in-out hover:animate-[back_1s_ease-in-out_infinite] md:pl-6">
        {status ? (
          <div onClick={handleClickOnBackButton}>
            <Image src="/assets/icons/Back.svg" width={46} height={46}></Image>
          </div>
        ) : (
          <Link href="/">
            <Image src="/assets/icons/Back.svg" width={46} height={46}></Image>
          </Link>
        )}
      </div>

      <div className="flex w-full flex-col items-center">
        <h1 className="text-3xl font-bold lg:text-6xl">Register your account</h1>
        <p className="mt-4 lg:text-lg">Please complete the fields to register a new account</p>
      </div>

      {status ? <Credentials /> : <PersonalInfo setPersonalInfoCompleted={setStatus} />}
    </main>
  );
}
