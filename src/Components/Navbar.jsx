import { motion } from "framer-motion";
import React from "react";
import logo from "./Images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <motion.div className="flex-1 ml-3">
        <NavLink to={'/'}>
        
          <motion.button
            whileTap={{ scale: 2.8 }}
            className="btn btn-ghost normal-case text-xl"
          >
            <img src={logo} alt="..." style={{ width: 50, height: 50 }} />
            ToDo
          </motion.button>
        </NavLink>
      </motion.div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li className="mr-3">
           <NavLink to={'/'}> <motion.button  animate={{ rotate: [0,10,-30,0] }}  whileHover={{ scale: 1.1 }}>HOME</motion.button> </NavLink>
          </li>

          <li className="mr-3">
          <NavLink to={'/About'}> <motion.button  animate={{ rotate: [0,10,-30,0] }}  whileHover={{ scale: 1.1 }}>ABOUT</motion.button> </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
