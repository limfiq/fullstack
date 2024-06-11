// import React from 'react';

// const Home = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Home</h1>
//       <p>Selamat datang di halaman Home.</p>
//     </div>
//   );
// }

// export default Home;

import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Internet Cepat dan Terpercaya</h1>
          <p className="text-xl mb-8">Nikmati koneksi internet super cepat dan stabil dengan layanan terbaik kami.</p>
          <a href="#contact" className="bg-white text-blue-600 font-semibold py-2 px-4 rounded">Hubungi Kami</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Fitur Unggulan Kami</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <h3 className="text-xl font-bold mb-4">Kecepatan Tinggi</h3>
                <p>Menawarkan kecepatan internet yang tinggi untuk semua kebutuhan Anda.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <h3 className="text-xl font-bold mb-4">Koneksi Stabil</h3>
                <p>Koneksi yang stabil tanpa putus-putus, ideal untuk streaming dan gaming.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <h3 className="text-xl font-bold mb-4">Harga Terjangkau</h3>
                <p>Paket harga yang kompetitif sesuai dengan kebutuhan Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Apa Kata Pelanggan Kami</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <p className="italic">"Layanan internet terbaik yang pernah saya gunakan! Sangat cepat dan stabil."</p>
                <p className="mt-4 font-semibold">- Budi</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <p className="italic">"Harga yang sangat terjangkau untuk kecepatan internet yang luar biasa."</p>
                <p className="mt-4 font-semibold">- Siti</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <p className="italic">"Koneksi internet yang sangat stabil, tidak pernah putus saat saya streaming."</p>
                <p className="mt-4 font-semibold">- Ahmad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Siap untuk Berlangganan?</h2>
          <p className="text-xl mb-8">Hubungi kami sekarang juga untuk mendapatkan penawaran terbaik.</p>
          <a href="#contact" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded">Hubungi Kami</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
