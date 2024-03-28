

import Link from 'next/link';
import { ModeToggle } from './mode-toggle';





const Navbar = () => {
  return (
    <div className="bg-yellow-400  text-black p-4 fixed top-0 w-full z-10 dark:bg-white ">
         <div className="p-2 px-2 font-serif font-bold ">
        
      <div className="container mx-auto flex justify-between  items-center gap-4 ">
      <Link href="/">
            <h1 className=" font-sann  font-bold">Navbar</h1>
          </Link>
          <p className="mr-auto"></p>
          <Link href="/FetchData/Album/">
            <h1 className="text-white dark:text-black">Albums</h1>
          </Link>
          <Link href="/FetchData/Users">
            <h1 className="text-white dark:text-black">Users</h1>
          </Link>
          <ModeToggle />
        </div>
   
        
      </div>
      
    </div>

  );
};

export default Navbar;
