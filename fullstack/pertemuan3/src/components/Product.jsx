// import React from 'react';

// const Products = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Products</h1>
//       <p>Ini adalah halaman Produk.</p>
//     </div>
//   );
// }

// export default Products;

import React from 'react';

const Products = () => {
  const productList = [
    {
      name: "Paket Basic",
      description: "Internet kecepatan hingga 10 Mbps, ideal untuk browsing dan media sosial.",
      price: "Rp 150.000 / bulan",
    },
    {
      name: "Paket Standard",
      description: "Internet kecepatan hingga 50 Mbps, ideal untuk streaming HD dan gaming ringan.",
      price: "Rp 300.000 / bulan",
    },
    {
      name: "Paket Premium",
      description: "Internet kecepatan hingga 100 Mbps, ideal untuk streaming 4K dan gaming online.",
      price: "Rp 500.000 / bulan",
    },
    {
      name: "Paket Business",
      description: "Internet kecepatan hingga 200 Mbps, ideal untuk kebutuhan bisnis dan kantor.",
      price: "Rp 1.000.000 / bulan",
    }
  ];

  return (
    <div className="bg-gray-100">
      {/* Product List Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Produk Kami</h1>
          <p className="text-lg mb-8">
            Limfiq.inc menawarkan berbagai paket layanan internet yang dapat disesuaikan dengan kebutuhan Anda.
          </p>
          <div className="flex flex-wrap justify-center">
            {productList.map((product, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded shadow p-6">
                  <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                  <p className="mb-4">{product.description}</p>
                  <p className="text-xl font-semibold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
