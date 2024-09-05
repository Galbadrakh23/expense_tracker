import { PlusIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export const Header = ({ user, logOut }) => {
  return (
    <header className="flex items-center w-[1440px] justify-between py-4 bg-[#FFFFFF]">
      <div className="flex gap-6 items-center mx-[120px]">
        <Image src="/logo-2.svg" width={28} height={28} alt="logo" />
        <Link href="/dashboard">
          <p>
            <strong>Dashboard</strong>
          </p>
        </Link>
        <Link href="/records">
          <p>Records</p>
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <button className="btn bg-[#0166FF] text-white btn-sm">
          <PlusIcon />
          Records
        </button>
        <div className="avatar w-12 h-12">
          <div className="w-24 rounded-full">
            {/* <img src={user?.profile_img} /> */}
            <img src="https://randomuser.me/api/portraits/men/1.jpg" />
          </div>
        </div>
        <button className="btn btn-sm" onClick={logOut}>
          Log out
        </button>
      </div>
    </header>
  );
};
