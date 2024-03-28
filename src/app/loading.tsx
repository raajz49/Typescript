import { Skeleton } from "@/components/ui/skeleton"

const  SkeletonCard = () =>{
  return (
    <div className="flex flex-col  w-full bg-black dark:bg-white h-screen">
      <Skeleton className="h-[125px] w-[250px] rounded-xl bg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export default SkeletonCard