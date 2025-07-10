import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();
  setError('');
  setSuccess(false);

  // ดึงค่า email เพื่อตรวจความถูกต้อง
  const emailValue = form.current.user_email.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    setError('กรุณากรอกอีเมลให้ถูกต้อง');
    return;
  }

  setLoading(true);

  emailjs
    .sendForm(
      'service_c7c2et8',
      'template_a8fk7an',
      form.current,
      'e2l9P5fxFf2_l4Rtf'
    )
    .then(() => {
      setSuccess(true);
      setLoading(false);
      form.current.reset();
    })
    .catch((err) => {
      console.error("❌ EmailJS error:", err); // เพิ่ม error log ด้วย
      setError('ส่งไม่สำเร็จ โปรดลองใหม่');
      setLoading(false);
    });
};


  
  
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg mt-25"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-indigo-400 mb-6 text-center">
          📬 ติดต่อฉัน
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block mb-1">ชื่อ</label>
            <input
              type="text"
              name="user_name" // ✅ ตรงกับ {{user_name}}
              className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 ring-indigo-400"
              required
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block mb-1">อีเมล</label>
            <input
              type="email"
              name="user_email" // ✅ ตรงกับ {{user_email}}
              className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 ring-indigo-400"
              required
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block mb-1">ข้อความ</label>
            <textarea
              name="message" // ✅ ตรงกับ {{message}}
              rows="4"
              className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 ring-indigo-400"
              required
            />
          </motion.div>

          {error && <p className="text-red-400">{error}</p>}
          {success && <p className="text-green-400">✅ ส่งข้อความเรียบร้อยแล้ว!</p>}

          <motion.button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold shadow-md transition duration-300"
            disabled={loading}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
          >
            {loading ? '📨 กำลังส่ง...' : 'ส่งข้อความ'}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
