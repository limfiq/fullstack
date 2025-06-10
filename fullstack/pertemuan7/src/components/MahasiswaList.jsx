import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MahasiswaList = () => {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/mahasiswa') // sesuaikan port backend
      .then((response) => {
        setMahasiswa(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Gagal mengambil data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Memuat data...</p>;

  return (
    <div>
      <h1>Daftar Mahasiswa</h1>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>id</th>
            <th>NIM</th>
            <th>Nama</th>
            <th>Jurusan</th>
            <th>Angkatan</th>
            <th>Email</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((mhs) => (
            <tr key={mhs._id}>
              <td>{mhs._id}</td>
                <td>{mhs.nim}</td>
              <td>{mhs.nama}</td>
              <td>{mhs.jurusan}</td>
              <td>{mhs.angkatan}</td>
              <td>{mhs.email}</td>
              <td>
                <button onClick={() => handleEdit(mhs._id)}>Edit</button>
                <button onClick={() => handleDelete(mhs._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MahasiswaList;
