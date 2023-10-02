import { Typography, Button } from "@material-tailwind/react";
import { useLocation } from 'react-router-dom';
import { programsData } from "@/data";
import { Footer } from "@/widgets/layout";
import { useEffect } from 'react';

function renderHTML(htmlString) {
  return <span dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

export function Detail() {
    const location = useLocation();
    const param = location.state;
    const data_detail = programsData.find(item => item.key === param);
    useEffect(() => {
      const tables = document.getElementsByTagName("table");

      if (tables.length > 0) {
        const tds = document.getElementsByTagName("td");
        const ths = document.getElementsByTagName("th");

        for (let i = 0; i < tds.length; i++) {
          tds[i].classList.add("border-solid", "border-2", "border-gray-300");
        }

        for (let i = 0; i < ths.length; i++) {
          ths[i].classList.add("border-solid", "border-2", "border-gray-300");
        }
      }
    }, [])
    
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="my-12">
                    {data_detail.title}
                </Typography>
               
                <Typography className="mb-2 flex items-center justify-center gap-2">
                  <img src={data_detail.img} />
                </Typography>
                <div className="mt-20 flex flex-wrap items-start">
                  <div className="mx-auto w-full p-5 md:w-5/12">                 
                    <Typography variant="h5" className="mb-3 font-bold" color="blue-gray">
                    {data_detail.details.desc.descTitle}
                    </Typography>
                    <Typography className="mb-8 font-normal text-left text-blue-gray-500">
                      {renderHTML(data_detail.details.desc.descContents)}
                    </Typography>
                  </div>
                  <div className="mx-auto w-full p-5 md:w-5/12">                  
                    <Typography variant="h5" className="mb-3 font-bold" color="blue-gray">
                    {data_detail.details.procedure.prcdTitle}
                    </Typography>
                    <Typography className="mb-8 font-normal text-left text-blue-gray-500">
                      {renderHTML(data_detail.details.procedure.prcdContents)}
                    </Typography>
                  </div>
                  <div className="mx-auto w-full p-5 md:w-5/12">                  
                    <Typography variant="h5" className="mb-3 font-bold" color="blue-gray">
                    {data_detail.details.prepare.prpTitle}
                    </Typography>
                    <Typography className="mb-8 font-normal text-left text-blue-gray-500">
                      {renderHTML(data_detail.details.prepare.prpContents)}
                    </Typography>
                  </div>
                  <div className="mx-auto w-full p-5 md:w-5/12">                  
                    <Typography variant="h5" className="mb-3 font-bold" color="blue-gray">
                    {data_detail.details.regulation.regTitle}
                    </Typography>
                    <Typography className="mb-8 font-normal text-left text-blue-gray-500">
                      {renderHTML(data_detail.details.regulation.regContents)}
                    </Typography>
                  </div>
                  <div className="mx-auto w-full p-5 md:w-9/12">
                    <Typography variant="h5" className="mb-3 font-bold" color="blue-gray">
                      {data_detail.details.price.priceTitle}
                    </Typography>
                    <Typography className="mb-8 font-normal text-left text-blue-gray-500">
                      {renderHTML(data_detail.details.price.priceContents)}
                    </Typography>    
                  </div>
                  <div className="mx-auto w-full p-5 md:w-9/12">
                    {data_detail.details.etc ? (
                      <>
                        <Typography variant="h5" className="mb-3 font-bold" color="blue-gray">
                          {data_detail.details.etc.etcTitle}
                        </Typography>
                        <Typography className="mb-8 font-normal text-left text-blue-gray-500">
                          {renderHTML(data_detail.details.etc.etcContents)}
                        </Typography>
                      </>
                    ) : (
                      <> {/* data_detail.details.etc가 없을 때 렌더링할 내용 */}
                        <p></p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Detail;