import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { Link } from "react-router-dom";
import { projectsData } from "@/data";

export function Programs() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">          
          <div className="px-6">
            <Card className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
              <CardBody className="p-4">      
                <div className="px-4 pb-4">
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Projects
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal text-blue-gray-500"
                  >
                    Architects design houses
                  </Typography>
                  <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
                    {projectsData.map(
                      ({ img, title, description, tag, route, members }) => (
                        <Card key={title} color="transparent" shadow={false}>
                          <CardHeader
                            floated={false}
                            color="gray"
                            className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                          >
                            <img
                              src={img}
                              alt={title}
                              className="h-full w-full object-cover"
                            />
                          </CardHeader>
                          <CardBody className="py-0 px-1">
                            <Typography
                              variant="small"
                              className="font-normal text-blue-gray-500"
                            >
                              {tag}
                            </Typography>
                            <Typography
                              variant="h5"
                              color="blue-gray"
                              className="mt-1 mb-2"
                            >
                              {title}
                            </Typography>
                            <Typography
                              variant="small"
                              className="font-normal text-blue-gray-500"
                            >
                              {description}
                            </Typography>
                          </CardBody>
                          <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                            <Link to={route}>
                              <Button variant="outlined" size="sm">
                                view project
                              </Button>
                            </Link>
                            <div>
                              {members.map(({ img, name }, key) => (
                                <Tooltip key={name} content={name}>
                                  <Avatar
                                    src={img}
                                    alt={name}
                                    size="xs"
                                    variant="circular"
                                    className={`cursor-pointer border-2 border-white ${
                                      key === 0 ? "" : "-ml-2.5"
                                    }`}
                                  />
                                </Tooltip>
                              ))}
                            </div>
                          </CardFooter>
                        </Card>
                      )
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Programs;
