import {
  AcademicCapIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React, { useState } from "react";

function Cards() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <>
      <div
        className={isOpen ? "w-[100%] h-screen fixed z-20 divCard" : "divCard"}
      >
        <motion.div
          transition={{ layout: { duration: 0.7, type: "spring" } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="card"
          style={{ borderRadius: "1rem" }}
        >
          <div className={!isOpen ? "flex justify-center flex-col items-center" : ""}>
            <div>
              <motion.h2 className={!isOpen ? "tracking-widest uppercase" : "hidden"}>Notas</motion.h2>
            </div>
            <motion.h2 layout="position">
              <AcademicCapIcon
                className={!isOpen ? "h-16 w-16" : "h-12 w-12"}
              />
            </motion.h2>
          </div>
          {isOpen && (
            <motion.div className="expand">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quos consequatur dolore optio consectetur id quasi autem soluta
                quae, nulla magnam, quam nesciunt. Repellat optio ducimus ipsa
                commodi ratione officia!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                iure!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                praesentium assumenda non accusantium. Est libero minus
                asperiores, reprehenderit rerum cum laudantium, tenetur iste
                deserunt veritatis, consequuntur expedita architecto dolorem
                nulla.
              </p>
            </motion.div>
          )}
          {!isOpen && (
            <motion.a
              animate={{ opacity: 1 }}
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.1 },
              }}
            >
              Clique para expandir!
            </motion.a>
          )}
        </motion.div>
      </div>

      <div
        className={isOpen2 ? "w-[100%] h-screen fixed z-20 divCard" : "divCard"}
      >
        <motion.div
          transition={{ layout: { duration: 0.7, type: "spring" } }}
          layout
          onClick={() => setIsOpen2(!isOpen2)}
          className="card"
          style={{ borderRadius: "1rem" }}
        >
          <div className={!isOpen2 ? "flex justify-center flex-col items-center" : ""}>
          <div>
              <motion.h2 className={!isOpen2 ? "tracking-widest uppercase" : "hidden"}>Avisos</motion.h2>
            </div>
            <motion.h2 layout="position">
              <ChatBubbleLeftIcon
                className={!isOpen2 ? "h-16 w-16" : "h-12 w-12"}
              />
            </motion.h2>
          </div>
          {isOpen2 && (
            <motion.div className="expand">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                iure!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                praesentium assumenda non accusantium. Est libero minus
                asperiores, reprehenderit rerum cum laudantium, tenetur iste
                deserunt veritatis, consequuntur expedita architecto dolorem
                nulla.
              </p>
            </motion.div>
          )}
          {!isOpen2 && (
            <motion.a
              animate={{ opacity: 1 }}
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.1 },
              }}
            >
              Clique para expandir!
            </motion.a>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default Cards;
