import { motion } from "framer-motion";
import { useContext, useState } from "react";
import AuthContext, { AuthProvider } from "../contexts/authContext";
import Login from "./Login";
import Register from "./Register";
import {
  ArrowLeftOnRectangleIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

const menuItens = [
  {
    name: "Chat",
    href: "/chat",
    icon: ChatBubbleLeftEllipsisIcon,
    var: 1,
  },
  {
    name: "Sair",
    href: "/",
    icon: ChatBubbleLeftEllipsisIcon,
    var: 2,
  },
];

function Sidebar() {
  const { user, logout } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState<any>(null);

  return (
    <div className="p-2 xl:flex hidden flex-col h-screen overflow-hidden">
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="glass flex p-3 mx-auto mt-8 mb-2 pr-[10rem] pl-12 items-center rounded-lg"
      >
        <Image
          src={"https://github.com/FrancisWorld.png"}
          width={60}
          height={60}
          alt="perfil"
          className="rounded-full mx-5"
        />
        <p>{user ? `Aluno: ${user.email}` : "Nenhum Login"}</p>
      </motion.div>
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 mt-4 glass p-3 rounded-lg"
      ></motion.div>
      <motion.div
        initial={{ y: 1500 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex justify-center mt-4 glass p-3 rounded-lg"
      >
        <div
          onClick={logout}
          className="flex w-[100%] justify-start mx-auto cursor-pointer"
        >
          <ArrowLeftOnRectangleIcon className="h-8 w-8 mx-3 mb-0" />
          <button className="text-white">
            <p className="text-xl">Sair</p>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Sidebar;
