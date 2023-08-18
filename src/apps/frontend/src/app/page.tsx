import Link from "next/link";
import { Button } from "../components/ui/Button";

export default function Home(): any {
  return (
    <main className="px-10 md:flex md:items-center md:flex-col md:min-h-screen md:justify-center bg-[url('/assets/backgrounds/main-page.jpg')] bg-cover md:bg-no-repeat bg-left">
      <h2 className="text-7xl md:text-8xl pt-16">
        Connect friends <b>easily & quickly</b>
      </h2>
      <p className="text-gray-400 text-sm mt-10 font-light md:text-lg">
        Our chat app is the perfect way to stay connected with friends and family.
      </p>

      <div className="flex md:gap-6 mt-6">
        <Button color="white" size="full" borderRadiusSize="md" styleClassNames="font-bold hidden md:w-56 md:block">
          Log in
        </Button>
        <Button color="white" size="full" borderRadiusSize="md" styleClassNames="font-bold md:w-56">
          Sign up with mail
        </Button>
      </div>
      <div className="font-light flex justify-center mt-10 gap-1 md:hidden">
        Existing account?{" "}
        <Link href="" className="font-bold">
          Log in
        </Link>
      </div>
    </main>
  );
}
