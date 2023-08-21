import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/Button";

export default function ForgotPassword(): any {
  return (
    <main className="px-4 md:px-0">
      <div className="my-4 w-full duration-300 ease-in-out hover:animate-[back_1s_ease-in-out_infinite] md:pl-6">
        <Link href="/login">
          <Image src="/assets/icons/Back.svg" width={46} height={46}></Image>
        </Link>
      </div>

      <div className="flex w-full flex-col items-center">
        <h1 className="text-3xl font-bold lg:text-6xl">Password recovery</h1>
        <p className="mt-4 lg:text-lg ">
          Here you can recover your password, plese complete the fields to recover your account access.
        </p>
      </div>

      <div className="mt-16 flex w-full justify-center md:mt-12">
        <div className="w-full md:flex md:w-96 md:flex-col md:items-center md:border md:p-8">
          <div className="flex w-full flex-col">
            <p className="text-turquese">Your account email</p>
            <input type="email" name="email" className="focus:border-turquese border-b-[1px] focus:outline-none" />
          </div>
          <Button color="turquese" size="full" borderRadiusSize="md" styleClassNames="font-bold md:w-56 mt-28 md:mt-10">
            Recover
          </Button>
        </div>
      </div>
    </main>
  );
}
