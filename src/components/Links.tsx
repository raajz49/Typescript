import Link from "next/link";

const Links = () => {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-12 gap-4 mt-20"  >
     
    <Link href="/FetchData/Album" className="  bg-blue-500 dark:bg-white dark:text-black rounded-lg h-16 col-span-12  md:col-span-12 lg:col-span-6 flex items-center justify-center italic underline">Fetch Album</Link>
    <Link href="/FetchData/Users" className="bg-blue-500  dark:bg-white dark:text-black rounded-lg h-16 col-span-12  md:col-span-12 lg:col-span-6 italic flex items-center justify-center underline">Fetch Users</Link>
  </div>
  );
};

export default Links;
