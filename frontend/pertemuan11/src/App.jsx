import React, { useEffect, useState } from 'react';

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/menu')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Tambahkan log ini untuk melihat data yang diterima
        setMenu(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menu.length > 0 ? (
          menu.map(item => (
            <li key={item.id}>
              {item.nama_menu} - Rp {item.harga}
            </li>
          ))
        ) : (
          <li>Memuat data...</li>
        )}
      </ul>
    </div>
  );
}

export default App;
