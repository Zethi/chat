import { Button } from "../../ui/Button";

export function Credentials(): any {
  return (
    <div className="mt-12 flex w-full justify-center md:mt-16">
      <div className="w-full md:flex md:w-96 md:flex-col md:items-center md:border md:p-6">
        <div className="flex w-full flex-col gap-12">
          <div className="w-full">
            <p className="text-turquese">Introduce a password</p>
            <input
              type="password"
              name="password"
              className="focus:border-turquese w-full border-b-[1px] focus:outline-none"
            />
          </div>
          <div className="w-full">
            <p className="text-turquese">Repeat the password</p>
            <input
              type="password"
              name="password"
              className="focus:border-turquese w-full border-b-[1px] focus:outline-none"
            />
          </div>
        </div>
        <Button color="turquese" size="full" borderRadiusSize="md" styleClassNames="font-bold md:w-56 mt-28 md:mt-12">
          Register
        </Button>
      </div>
    </div>
  );
}
