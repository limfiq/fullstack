// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Contact</h1>
//       <p>Ini adalah halaman Hubungi Kami.</p>
//     </div>
//   );
// }

// export default Contact;


import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim formulir ke backend atau lakukan tindakan lain sesuai kebutuhan
    console.log(formData);
    // Reset form setelah submit
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-100">
      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-lg mb-8">
            Silakan kirim pesan kepada kami melalui formulir di bawah ini.
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border rounded w-full py-2 px-3" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border rounded w-full py-2 px-3" required />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subjek</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="border rounded w-full py-2 px-3" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Pesan</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="border rounded w-full py-2 px-3" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">Kirim Pesan</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
