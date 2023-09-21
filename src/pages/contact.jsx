import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";

export function Contact() {
  return (
    <>
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <div className="mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
          <Card className="absolute top-2/4 left-2/4 mx-2 w-full max-w-[50rem] min-w-[20rem] -translate-y-2/4 -translate-x-2/4"> 
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Contact
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input variant="standard" type="name" label="Name" size="lg" />
              <Input variant="standard" type="email" label="Email" size="lg" />
              <Input variant="standard" type="phone number" label="phone" size="lg"/>
              <Input variant="standard" type="program" label="program" size="lg"/>

              {/* <div className="-ml-2.5">
                <Checkbox label="I agree the Terms and Conditions" />
              </div> */}
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth>
                Sign Up
              </Button>
              {/* <Typography variant="small" className="mt-6 flex justify-center">
                Already have an account?
                <Link to="/sign-in">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Sign in
                  </Typography>
                </Link>
              </Typography> */}
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default Contact;
