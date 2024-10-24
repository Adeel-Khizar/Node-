import { MoreCaseStudies } from "@/components/work/MoreCaseStudies";
import { Rancher, SedaN } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div className="mt-[100px] py-[50px] bg-[#FCF6F2]">
            <div>
                <div className="h-[65vh] md:h-[70vh] md:flex-row flex-col flex items-center justify-center">
                    <div className="w-full flex  md:items-end justify-start p-[5vw] h-full md:w-[65%]">
                        <h1 className={`text-6xl md:text-[6vw]  ${Rancher}`}>Netceed</h1>
                    </div>
                    <div
                        style={{
                            backgroundImage: "url('/s3.jpg')",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                        className="md:w-[35%] flex items-center justify-center h-full workClipPath m-auto w-[80%] relative"
                    >
                    </div>
                </div>
                <div className="flex px-[5vw] py-12 gap-8 flex-col">
                    <div className="md:flex flex-col  md:flex-row">
                        <div className="md:w-[40%] md:mb-0 my-8 w-full">
                            <h3 className={`text-3xl max-w-[300px] ${SedaN}`}>BigCommerce</h3>
                        </div>
                        <div className="md:w-[60%] w-full">
                            <h2 className={` ${Rancher} text-5xl pb-6   `}>Project Brief</h2>
                            <p className={`text-lg ${SedaN}`}>
                                Netceed, a leading telecom and broadband provider in Edison, NJ, serves both B2B and B2C markets. Following their acquisition of Comstart, Netceed enlisted Trellis to address the critical task of completely phasing out Comstart’s branding and rapidly integrating Netceed’s brand identity across all digital platforms.
                            </p>
                        </div>
                    </div>
                    <div className="md:flex flex-col  md:flex-row">
                        <div className="md:w-[40%] w-full">
                            <h3 className={`text-3xl max-w-[300px] ${SedaN}`}>
                                Design
                                Development
                                Integrations
                                Marketing
                                </h3>
                        </div>

                        <div className="md:w-[60%] mb:mt-0 mt-8 w-full ">
                            <p className={`text-lg ${SedaN}`}>
                                Netceed, a leading telecom and broadband provider in Edison, NJ, serves both B2B and B2C markets. Following their acquisition of Comstart, Netceed enlisted Trellis to address the critical task of completely phasing out Comstart’s branding and rapidly integrating Netceed’s brand identity across all digital platforms.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                <div className=" w-full gap-x-4  sm:gap-x-8 lg:gap-x-12 gap-y-12  sm:gap-y-16 lg:gap-y-40 sm:h-[120] h-auto sm:grid-cols-2   workcaseGrid  px-[8vw] py-[40px] sm:py-[60px] bg-black">
                     <div className="" >
                        <Image className="h-full w-full" src='/s3.jpg' height={1000} width={1000} alt="image"  />
                     </div>
                     <div>
                        <Image className="h-full w-full" src='/s3.jpg' height={1000} width={1000} alt="image"  />
                     </div>
                     <div>
                        <Image className="h-full w-full" src='/s3.jpg' height={1000} width={1000} alt="image"  />
                     </div>
                     <div>
                        <Image className="h-full w-full" src='/s3.jpg' height={1000} width={1000} alt="image"  />
                     </div>
                </div>
                </div>
                <div className=" bg-transparent h-auto  flex md:flex-row flex-col px-4 py-16  sm:p-[6vw]">
                   <div className="h-full flex items-start md:mb-0 mb-10 justify-start md:w-[50%] w-full">
                    <h1 className={` ${Rancher} text-5xl md:text-[5vw]`}>Results</h1>
                   </div>
                   <div className="md:w-[50%] w-full  h-full flex gap-8 md:gap-20 flex-col">
                       <p className={`${SedaN} w-full text-md md:text-2xl `}>

                       hen Netceed faced the challenge of transforming the Comstart brand into their own, they turned to Trellis for a solution. Trellis took charge, crafting a vibrant and cohesive digital experience that perfectly captured Netceed’s innovative spirit. They introduced a fresh design palette of dark navy, varied gray tones, and bold neon green accents, breathing new life into Netceed’s online presence and significantly boosting user experience.


                        Meeting the project’s tight timeline, Trellis delivered on all counts, surpassing both Netceed’s and their own strategic goals, much to the client’s delight. Thrilled with the success and seamless execution, Netceed opted to not only celebrate the win but also to deepen their partnership with Trellis. Together, they now look forward to further refining the website’s features to enhance user engagement and elevate business performance even more.
                       </p>
                       <Link href="/" className={`px-12 py-2 border-2 border-gray-900 rounded-full max-w-fit ${Rancher} `}  >View Project </Link>
                   </div>
                </div>
                <div className="w-full" >
                    <div className="px-[7vw] py-[10vw]">
                        <Image className="h-auto w-full" src="/s3.jpg" alt="image" height={1500} width={2500} />
                    </div>
                    <div>
                    <Image className="h-auto w-full" src="/s3.jpg" alt="image" height={1500} width={2500} />

                    </div>
                </div>  
            <div className="w-full ">
                <MoreCaseStudies/>
            </div>
            </div>
            
        </div>
    );
}
