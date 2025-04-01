
export const BlogSkeleton = () => {
    return <div role="status" className=" animate-pulse ">
            <div className="flex justify-center cursor-pointer">
                    <div className="">
                        <div className="flex pt-4 justify-center">
                            <div className="h-2.5 bg-gray-200 rounded-full w-87 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            
                        </div>
                        <div className="font-bold pt-3">
                        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                        </div>
                        <div className="font-extralight  pt-1"> 
                            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                        </div>
                        <div className="pt-5 font-thin">
                        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                        </div>
                        <div className="border border-gray-200">
                        </div>
                    </div>
                    
                </div>
    </div>
    
}