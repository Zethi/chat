import Link from "next/link";
import { Button } from "../components/ui/Button";

export default function Home(): any {
  return (
    <main className="min-h-screen bg-[url('/assets/backgrounds/main-page.jpg')] bg-cover bg-left px-10 md:flex md:flex-col md:items-center md:justify-center md:bg-no-repeat">
      <h2 className="pt-16 text-7xl text-white md:text-8xl">
        Connect friends <b>easily & quickly</b>
      </h2>
      <p className="mt-10 text-sm font-light text-gray-400 text-white md:text-lg">
        Our chat app is the perfect way to stay connected with friends and family.
      </p>

      <div className="mt-6 flex md:gap-6">
        <Button
          href="/login"
          color="white"
          size="full"
          borderRadiusSize="md"
          styleClassNames="font-bold hidden md:w-56 md:block"
        >
          Log in
        </Button>
        <Button color="white" size="full" borderRadiusSize="md" styleClassNames="font-bold md:w-56">
          Sign up with mail
        </Button>
      </div>
      <div className="mt-10 flex w-full justify-center gap-1 font-light text-white md:hidden">
        Existing account?{" "}
        <Link href="/login" className="font-bold ">
          Log in
        </Link>
      </div>
    </main>
  );
}
