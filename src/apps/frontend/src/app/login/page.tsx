import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/Button";

export default function Login(): any {
  return (
    <main className="px-4 md:px-0">
      <div className="my-4 w-full pl-6 duration-300 ease-in-out hover:animate-[back_1s_ease-in-out_infinite] ">
        <Link href="/">
          <Image src="/assets/icons/Back.svg" width={46} height={46}></Image>
        </Link>
      </div>

      <div className="flex w-full flex-col items-center">
        <h1 className="text-3xl font-bold lg:text-6xl">Log in to Chat</h1>
        <p className="mt-4 lg:text-lg">Welcome back! Sign in using your email to continue us</p>
      </div>

      <div className="mt-16 flex w-full justify-center">
        <div className="w-full md:flex md:h-96 md:w-96 md:flex-col md:items-center md:border md:p-6">
          <div className="flex w-full flex-col">
            <p className="text-turquese">Your email</p>
            <input type="email" name="email" className="focus:border-turquese border-b-[1px] focus:outline-none" />
            <p className="text-turquese mt-16 md:mt-16">Password</p>
            <input
              type="password"
              name="password"
              className="focus:border-turquese border-b-[1px] focus:outline-none"
            />
          </div>
          <Button color="turquese" size="full" borderRadiusSize="md" styleClassNames="font-bold md:w-56 mt-28 md:mt-16">
            Log in
          </Button>

          <div className="mt-6 w-full text-center text-sm">
            <Link href="/forgotpassword" className="text-turquese">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
