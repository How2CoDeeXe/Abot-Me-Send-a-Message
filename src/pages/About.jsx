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
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function About() {
  const skills = [
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
    { name: 'Bootstrap 5', icon: <SiBootstrap className="text-purple-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'PHP', icon: <SiPhp className="text-indigo-400" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
    { name: 'React.js', icon: <SiReact className="text-cyan-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-300" /> },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto space-y-8 mt-15">
        {/* หัวข้อหลัก */}
        <motion.h1
          className="text-4xl font-bold text-indigo-400"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          เกี่ยวกับฉัน
        </motion.h1>

        {/* แนะนำตัว */}
        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          สวัสดีครับ ผมชื่อ <span className="text-white font-semibold">ธนวัฒน์ แซ่ลิ้ม</span><br />
          จบจากมหาวิทยาลัยราชภัฏเชียงใหม่ สาขาวิทยาการคอมพิวเตอร์<br />
          มีความสนใจในการพัฒนาเว็บไซต์ทั้ง Front-End และ Back-End
        </motion.p>

        {/* ประสบการณ์ฝึกงาน */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">ประสบการณ์ฝึกงาน</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Front-End Developer</strong> บริษัท GOD Setting (2024)<br />
              พัฒนาและปรับปรุง UI ที่ใช้งานง่ายและสวยงาม
            </li>
            <li>
              <strong>Back-End Developer</strong> บริษัท GOD Setting (2024)<br />
              พัฒนาระบบฐานข้อมูลให้ปลอดภัยและมีเสถียรภาพมากขึ้น
            </li>
          </ul>
        </div>

        {/* ทักษะ */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">ทักษะ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex items-center space-x-3 bg-gray-800 p-3 rounded-md shadow hover:bg-gray-700 transition"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl">{skill.icon}</div>
                <span className="text-gray-200 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ข้อมูลติดต่อ */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">ข้อมูลติดต่อ</h2>
          <div className="space-y-2 text-gray-300">
            <p className="flex items-center gap-2">
              <FaPhone /> 093-274-6631
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> tanawat220344@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> 2/3 ต.เจริญเมือง อ.เมือง จ.เชียงใหม่
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
