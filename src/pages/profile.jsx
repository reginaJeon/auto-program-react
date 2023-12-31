import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { Link } from "react-router-dom";

export function Profile() {
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
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="/img/icon_profile.png"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>                    
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                <Link to='/contact'><Button className="bg-blue-400">Contact</Button></Link>                  
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        4
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        경력
                      </Typography>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        8
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        프로그램
                      </Typography>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        크몽
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"                        
                      ><a href="https://kmong.com/@%EC%BD%94%EB%94%A9%EC%A0%84%EB%AC%B8%EA%B0%80%EB%B6%84%EC%84%9D%EC%A0%84%EB%AC%B8%EA%B0%80#">링크</a>
                        
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">                  
                  코딩전문가분석전문가
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeoAAAHeCAYAAABUhkiBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAPbjSURBVHhe7J0HmGxHcf2dyEnxvaecJYLJQYDSU45PAYRNMtgk4xyw/ziDEzZgk3MQygkFlCWEkABFJCQklAARhEgGlBPJvv861XV6qvv2nZ3dnae3q1f1fefrO3dmZ3fvzs5vTlV19690EREREREREQs2AtQRERERERELOALUERERERERCzgC1BEREREREQs4AtQRERERERELOALUERERERERCzgC1BEREREREQs4AtQRERERERELOALUERERERERCzgC1BEREREREQs4AtQRERERERELOALUERERERERCzgC1BERERERc4r//d//7X7xi1/YrVUbP/vZz7rvfe97qh/96Ed29sERAeqIiIiIiFnFTTfd1P3Wb/1W94hHPEK1bNmy7p3vfGd399132yMe+Dj//PO7X/3VX1U94xnPsLMPjghQR0RERERMHP/1X/+lcP6VX/mVnh796Ed3//iP/2iPfGDjs5/9bP45nv70p9vZB0cEqCMiIiIiJo611lpLYfgbv/Eb3a677todeOCB3WMe85gMyf/4j/+wRz6w8ZOf/KQ799xzVZdeeqmdfXBEgDoiIiIiYqI4++yzM5D/5E/+xM6m+OhHP9oddNBB3X333WdnUnz/+9/v/vVf/7XbY489uh122KF75Stf2Z122mla32Ycdthh3ate9aruta99bXfPPfd0hx9+eLf33nt3b3zjG/U8dPTRR9ujU3zjG9/I9731rW/V2jRv//d//7c9KsVXv/rV7u///u+7vfbaq3v+85/fvfjFL+6OOOIIrWsz/u///q8744wzupe//OXdLrvs0u2zzz7dv/zLv3R33XWXPWLVRYA6IiIiImKiOOmkkzKo999//+6OO+6we9pxww03dGussUb+Gq93vOMd3S9/+Ut9HOCKc3DpgPZDHvIQvY00Oh//yEc+smhcQwqe933mM5/prr322nx73333tUd13TnnnKNfy/u8dt99d4U1fg5AGfXt+jGPfexj9UPAqowAdURERETERIFmMUIUetjDHta96EUv6s4888zuxz/+ceGS77///vxYPA4u9i//8i+7ddZZJ389AIsg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"/>
                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Seoul, Korea
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Solution Manager - Creative Tim Officer
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    University of Computer Science
                  </Typography>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </Typography>
                    <Button variant="text">Show more</Button>
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

export default Profile;
