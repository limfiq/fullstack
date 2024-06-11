// import React from 'react';

// const Profile = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Profile</h1>
//       <p>Ini adalah halaman Profil.</p>
//     </div>
//   );
// }

// export default Profile;

import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-100">
      {/* Company Overview Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Tentang Limfiq.inc</h1>
          <p className="text-lg mb-8">
            Limfiq.inc adalah perusahaan layanan internet yang berdedikasi untuk menyediakan koneksi internet cepat dan stabil bagi pelanggan di seluruh wilayah. Kami percaya bahwa internet adalah kebutuhan dasar di era digital ini dan kami berkomitmen untuk memberikan layanan terbaik.
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Visi dan Misi Kami</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white rounded shadow p-6">
                <h3 className="text-xl font-bold mb-4">Visi</h3>
                <p>Menjadi penyedia layanan internet terkemuka yang menghubungkan masyarakat dengan dunia digital melalui koneksi yang cepat, stabil, dan terjangkau.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white rounded shadow p-6">
                <h3 className="text-xl font-bold mb-4">Misi</h3>
                <p>Menyediakan layanan internet berkualitas tinggi dengan harga kompetitif, mengutamakan kepuasan pelanggan, dan terus berinovasi untuk memenuhi kebutuhan digital masyarakat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Tim Kami</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <img src="https://via.placeholder.com/150" alt="CEO" className="mx-auto mb-4 rounded-full" />
                <h3 className="text-xl font-bold mb-2">Budi Santoso</h3>
                <p className="text-gray-700">CEO</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <img src="https://via.placeholder.com/150" alt="CTO" className="mx-auto mb-4 rounded-full" />
                <h3 className="text-xl font-bold mb-2">Siti Rahmawati</h3>
                <p className="text-gray-700">CTO</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <img src="https://via.placeholder.com/150" alt="COO" className="mx-auto mb-4 rounded-full" />
                <h3 className="text-xl font-bold mb-2">Ahmad Fauzan</h3>
                <p className="text-gray-700">COO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Nilai-Nilai Kami</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <h3 className="text-xl font-bold mb-4">Integritas</h3>
                <p>Kami selalu berusaha untuk melakukan yang benar dalam setiap tindakan kami.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <h3 className="text-xl font-bold mb-4">Inovasi</h3>
                <p>Kami terus berinovasi untuk memberikan layanan terbaik kepada pelanggan.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow p-6">
                <h3 className="text-xl font-bold mb-4">Keunggulan</h3>
                <p>Kami berkomitmen untuk mencapai keunggulan dalam setiap aspek bisnis kami.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
