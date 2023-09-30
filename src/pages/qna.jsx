import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { qnaTableData, projectsTableData } from "@/data";
import { Link } from "react-router-dom";

export function QnA() {
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
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            자주하는 질문
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["번호", "제목", "날짜",""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {qnaTableData.map(
                ({ key, name, route, date, viewNum, contents }, seq) => {
                  const className = `py-3 px-5 ${
                    key === qnaTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={seq}>
                      
                        <td className={className}>                       
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {key}
                          </Typography>
                        </td>
                        <td className={className}>                       
                          <div className="flex items-center gap-4">
                            {/* <Avatar src={img} alt={name} size="sm" /> */}
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                 <Link to={route} state={key} >
                                  {name}
                                </Link>
                              </Typography>                            
                            </div>
                          </div>
                        </td>   
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {date}
                          </Typography>
                        </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      </div>
    </div>
    </section>
    </>
  );
}

export default QnA;
