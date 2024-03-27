import Link from "next/link";

const Links = () => {
  return (
    <div>
      
      <Link
        href="/FetchData/Album"
        className="  bg-blue-500 dark:bg-white dark:text-black rounded-lg h-16 col-span-12  md:col-span-12 lg:col-span-6 flex items-center justify-center italic underline"
      >
        Fetch Album
      </Link>
      <Link
        href="/FetchData/Users"
        className="  bg-blue-500 dark:bg-white dark:text-black rounded-lg h-16 col-span-12  md:col-span-12 lg:col-span-6 flex items-center justify-center italic underline"
      >
        Fetch Users
      </Link>
    </div>
  );
};

export default Links;
