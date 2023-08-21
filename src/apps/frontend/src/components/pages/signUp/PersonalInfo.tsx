import { Button } from "../../ui/Button";

interface Props {
  setPersonalInfoCompleted: (status: boolean) => void;
}

export function PersonalInfo({ setPersonalInfoCompleted }: Props): any {
  function handleClick(): void {
    continueToCredentialsRequest();
  }

  function continueToCredentialsRequest(): void {
    setPersonalInfoCompleted(true);
  }

  return (
    <div className="mt-8 flex w-full justify-center md:mt-12">
      <div className="w-full md:flex md:w-96 md:flex-col md:items-center md:border md:p-6">
        <p className="mb-8 text-center text-lg font-semibold">Introduce your personal Info</p>
        <div className="flex w-full flex-col gap-12">
          <div className="w-full">
            <p className="text-turquese">First name</p>
            <input
              type="email"
              name="email"
              className="focus:border-turquese w-full border-b-[1px] focus:outline-none"
            />
          </div>
          <div className="w-full">
            <p className="text-turquese">Last name</p>
            <input
              type="email"
              name="email"
              className="focus:border-turquese w-full border-b-[1px] focus:outline-none"
            />
          </div>
          <div className="w-full">
            <p className="text-turquese">Your email</p>
            <input
              type="email"
              name="email"
              className="focus:border-turquese w-full border-b-[1px] focus:outline-none"
            />
          </div>
        </div>
        <Button
          color="turquese"
          size="full"
          borderRadiusSize="md"
          styleClassNames="font-bold md:w-56 mt-12 md:mt-12"
          onClick={handleClick}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
