
import React, { useState } from "react";

const hitung = () => {
  const [count, setCount] = useState(0);
  return (
    <div >
    <p>
      Hitung : {count};
      <button onClick={setCount(count+1)}>Tambah</button>
    </p>
    </div >
  );
};
