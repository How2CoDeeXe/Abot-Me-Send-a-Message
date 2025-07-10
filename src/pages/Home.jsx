import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start max-w-6xl mx-auto mt-25">
        {/* รูปโปรไฟล์ */}
        <motion.img
          src="https://i.pravatar.cc/200"
          alt="profile"
          className="w-60 h-60 object-cover rounded-full shadow-lg ring-4 ring-indigo-500 mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, duration: 0.8 }}
        />

        {/* ข้อมูลส่วนตัว */}
        <motion.div
          className="md:col-span-2 space-y-6 ms-15"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-indigo-400">
            สวัสดีครับ ผมชื่อ เติ้ล 👋
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            กำลังฝึกฝนด้าน Frontend ด้วย React + Tailwind CSS<br />
            สนใจเรียนรู้เพิ่มเติมทุกวัน และหาประสบการณ์ฝึกงาน
          </p>

          <p className="text-gray-300 leading-relaxed text-[16px]">
            กำลังพัฒนาทักษะด้านการพัฒนาเว็บไซต์ โดยเฉพาะในด้าน Frontend ด้วย React.js และ Tailwind CSS
            ด้วยความตั้งใจอยากเข้าสู่สายงานนักพัฒนาเว็บ<br /><br />

            แม้จะยังอยู่ในช่วงเริ่มต้น ผมมีความตั้งใจจริง ฝึกฝนด้วยการสร้างโปรเจกต์จริง เช่น การทำ Navbar แบบ Responsive,
            Layout แบบ Grid, รวมถึงการใช้ React Router สำหรับจัดการหลายหน้าในแอปพลิเคชัน<br /><br />

            สิ่งที่ผมกำลังพัฒนาทุกวัน ได้แก่:<br />
            - การจัดโครงสร้างหน้าเว็บด้วย React (Component-based)<br />
            - การออกแบบ UI ที่ตอบสนองทุกอุปกรณ์ด้วย Tailwind CSS<br />
            - การใช้ React Router เพื่อสร้างเว็บแบบ SPA (Single Page Application)<br />
            - การอ่านเอกสารและ Debug ด้วยตัวเอง<br /><br />

            ผมกำลังมองหาโอกาสฝึกงานหรือโปรเจกต์ร่วมทีม เพื่อเรียนรู้จากประสบการณ์จริง และพร้อมเปิดรับคำแนะนำ
            เพื่อพัฒนาทักษะให้เติบโตไปเป็นนักพัฒนา Frontend ที่มีคุณภาพในอนาคต<br /><br />

            ขอบคุณที่ให้โอกาสพิจารณาครับ
          </p>

          {/* ข้อมูลติดต่อ */}

          <a href="https://github.com/How2CoDeeXe" target="_blank" rel="noopener noreferrer">
  <button className="mt-4 px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl shadow">
    ดูโปรเจกต์ของฉัน
  </button>
</a>

        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
