import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import AuthContext, { AuthProvider } from '../contexts/authContext';
import Login from './Login';
import Register from './Register';
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";

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
  }
];

function Sidebar() {
  const { user, logout } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState<any>(null);

  return (
    <div className="p-2 flex flex-col h-screen w-[20%] overflow-hidden">
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="bg-[#323232] flex p-3 mx-auto mt-8 mb-2 pr-[10rem] pl-12 items-center rounded-lg"
      >
        <p>{user ? `Aluno: ${user.email}` : 'Nenhum Login'}</p>
      </motion.div>
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ delay: .2 }}
        className="flex-1 mt-4 bg-[#383838] p-3 rounded-lg"
      >
        <div>
          <Login onSuccess={(user) => setCurrentUser(user)} />
          <Register onSuccess={(user) => setCurrentUser(user)} />
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 1500 }}
        animate={{ y: 0 }}
        transition={{ delay: .7 }}
        className="flex justify-center mt-4 bg-[#3d3d3d] p-3 rounded-lg"
      >
        <button onClick={logout} className="text-white">
          <img
            src="https://media.discordapp.net/attachments/896428201126035506/1089628903317966938/Brain_icom.png?width=30&height=30"
            alt=""
            className="pr-2"
          />
          <p className="mt-1">Sair</p>
        </button>
      </motion.div>
    </div>
  );
}

export default Sidebar;
