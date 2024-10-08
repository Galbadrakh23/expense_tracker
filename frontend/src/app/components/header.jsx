import { PlusIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import RecordsModal from "./records-modal";
import { UserContext } from "../context/user-context";
import { useRouter } from "next/navigation";

export const Header = () => {
  const { user, fetchUserData } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <header className="flex items-center max-w-full justify-between py-4 px-[120px] bg-[#FFFFFF]">
      <div className="flex gap-6 items-center">
        <Image src="/logo-2.svg" width={28} height={28} alt="logo" />
        <Link href="/dashboard">
          <p className="hover:text-sky-500">
            <strong>Dashboard</strong>
          </p>
        </Link>
        <Link href="/records">
          <p className="hover:text-sky-500">Records</p>
        </Link>
        <p>
          User: <strong>{user?.name}</strong>
        </p>
      </div>
      <div className="flex gap-6 items-center">
        <Link href="/records">
          <button
            onClick={handleOpen}
            className="btn bg-[#0166FF] text-white btn-sm"
          >
            <PlusIcon />
            Records
          </button>
          <RecordsModal isOpen={open} onClose={handleClose} />
        </Link>
        <div className="avatar w-12 h-12">
          <div className="w-24 rounded-full">
            <img src={user?.profile_img} />
          </div>
        </div>
        <button className="btn btn-sm" onClick={logOut}>
          Log out
        </button>
      </div>
    </header>
  );
};
