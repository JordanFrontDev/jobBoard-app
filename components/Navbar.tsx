import Link from "next/link";

function Navbar() {
  return (
    <header>
      <div className="container flex justify-between items-center mx-auto my-4">
        <Link href={"/"} className="font-bold text-xl">
          Job Board
        </Link>
        <nav className="flex gap-2  *:rounded *:py-2 *:px-4 ">
          <Link href={"/login"} className="bg-gray-200">
            Login
          </Link>
          <Link href={"/new-listing"} className="bg-blue-600 text-white">
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
