import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiPython
} from 'react-icons/si';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function SkillRating() {
  const skills = [
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500 text-4xl" />, rating: 5 },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-500 text-4xl" />, rating: 4 },
    { name: 'Bootstrap 5', icon: <SiBootstrap className="text-purple-500 text-4xl" />, rating: 4 },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-4xl" />, rating: 3 },
    { name: 'PHP', icon: <SiPhp className="text-indigo-400 text-4xl " />, rating: 3 },
    { name: 'MySQL', icon: <SiMysql className="text-blue-300 text-4xl" />, rating: 3 },
    { name: 'React.js', icon: <SiReact className="text-cyan-400 text-4xl" />, rating: 1 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-4xl" />, rating: 1 },
    { name: 'Python', icon: <SiPython className="text-yellow-300 text-4xl" />, rating: 2 },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <AiFillStar key={i} className="text-yellow-400" />
      ) : (
        <AiOutlineStar key={i} className="text-gray-500" />
      )
    );
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-8 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-indigo-400 mb-6 mt-20">ทักษะของฉัน</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-4 shadow hover:bg-gray-700 transition flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1}}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
          >
            <div>{skill.icon}</div>
            <p className="mt-2 font-semibold text-lg">{skill.name}</p>
            <div className="flex mt-1">{renderStars(skill.rating)}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
