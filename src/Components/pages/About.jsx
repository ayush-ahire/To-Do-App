import React from "react";
import ayush from "../Images/ayush.jpg";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";



function About() {
  return (
    <div className=" flex justify-center  grid-cols-1  m-10">
      <div className="card card-compact w-96  bg-base-100 shadow-xl">
        <figure>
          <img src={ayush} style={{ height: "350px" }} alt="..." />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Ayush Ahire</h2>
          <p>
            Hi There! My name is Ayush. Have coded this To-Do website using
            React Js and Daisy Ui. To get into more of my projects click on the github icon below. Or if you want to give me a feedback visit my Instagram Profile.
            And also checkout my Youtube channel.
          </p>

          <div className="card-actions justify-center">
            <motion.button  animate={{ rotate: [0,10,-50,0] }} className="btn btn-primary "><a href='https://github.com/ayush-ahire' rel="noreferrer" target='_blank'><FaGithub size={30} /></a></motion.button>
            <motion.button  animate={{ rotate: [0,10,-50,0] }} className="btn btn-primary "><a href='https://www.youtube.com/channel/UCcwCwE3QQfUjtKINRV6t2pw?sub_confirmation=1' rel="noreferrer" target='_blank'><FaYoutube size={30} /></a></motion.button>
            <motion.button  animate={{ rotate: [0,10,-50,0] }} className="btn btn-primary "><a href='https://www.instagram.com/iamayush.ahire/' rel="noreferrer" target='_blank'><FaInstagram size={30} /></a></motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
