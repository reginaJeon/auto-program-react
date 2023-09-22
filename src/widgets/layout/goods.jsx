import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
  import { programsData } from "@/data";
  
  export function Goods(param) {
    console.log("Goods pg::::: bgcolor::"+param.bgclass)
    const classGrp = `relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl shadow-xl shadow-gray-500/5 ${param.bgclass}`;
    return (
      <>  
        <Card className={classGrp}>
        <CardBody className="p-4">      
            <div className="px-4 pb-4">
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
                {programsData.map(
                ({ key, img, title, description, tag, route }) => (
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
                        <Link to={route} state={key} >
                        <Button variant="outlined" size="sm">
                            view project
                        </Button>
                        </Link>                            
                    </CardFooter>
                    </Card>
                )
                )}
            </div>
            </div>
        </CardBody>
        </Card>
      </>
    );
  }
  
  export default Goods;
  