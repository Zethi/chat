import Link from "next/link";
import { Button } from "../components/ui/Button";

export default function Home(): any {
  return (
    <main className="bg-[url('/assets/backgrounds/main-page.jpg')] bg-cover bg-left px-10 md:flex md:min-h-screen md:flex-col md:items-center md:justify-center md:bg-no-repeat">
      <h2 className="pt-16 text-7xl md:text-8xl">
        Connect friends <b>easily & quickly</b>
      </h2>
      <p className="mt-10 text-sm font-light text-gray-400 md:text-lg">
        Our chat app is the perfect way to stay connected with friends and family.
      </p>

      <div className="mt-6 flex md:gap-6">
        <Button color="white" size="full" borderRadiusSize="md" styleClassNames="font-bold hidden md:w-56 md:block">
          Log in
        </Button>
        <Button color="white" size="full" borderRadiusSize="md" styleClassNames="font-bold md:w-56">
          Sign up with mail
        </Button>
      </div>
      <div className="mt-10 flex justify-center gap-1 font-light md:hidden">
        Existing account?{" "}
        <Link href="" className="font-bold">
          Log in
        </Link>
      </div>
    </main>
  );
}
