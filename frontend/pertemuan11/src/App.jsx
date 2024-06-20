// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get('https://localhost:3000/books');
//         setBooks(response.data);
//       } catch (error) {
//         console.error('There was an error fetching the books!', error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Daftar Buku</h1>
//         <div>
//           {books.length > 0 ? (
//             books.map(book => (
//               <div key={book._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
//                 <h2>{book.title}</h2>
//                 <p><strong>Author:</strong> {book.author}</p>
//                 {book.year && <p><strong>Year:</strong> {book.year}</p>}
//                 {book.reviews && book.reviews.length > 0 ? (
//                   <div>
//                     <h3>Reviews:</h3>
//                     <ul>
//                       {book.reviews.map((review, index) => (
//                         review.user && review.rating && review.comment ? (
//                           <li key={index}>
//                             <p><strong>{review.user}</strong> rated it {review.rating}/5</p>
//                             <p>{review.comment}</p>
//                           </li>
//                         ) : null
//                       ))}
//                     </ul>
//                   </div>
//                 ) : (
//                   <p>No reviews available</p>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p>No books available</p>
//           )}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get('/api/books');
//         setBooks(response.data);
//       } catch (error) {
//         console.error('There was an error fetching the books!', error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Daftar Buku</h1>
//         <div>
//           {books.length > 0 ? (
//             books.map(book => (
//               <div key={book._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
//                 <h2>{book.title}</h2>
//                 <p><strong>Author:</strong> {book.author}</p>
//                 {book.year && <p><strong>Year:</strong> {book.year}</p>}
//                 {book.reviews && book.reviews.length > 0 ? (
//                   <div>
//                     <h3>Reviews:</h3>
//                     <ul>
//                       {book.reviews.map((review, index) => (
//                         review.user && review.rating && review.comment ? (
//                           <li key={index}>
//                             <p><strong>{review.user}</strong> rated it {review.rating}/5</p>
//                             <p>{review.comment}</p>
//                           </li>
//                         ) : null
//                       ))}
//                     </ul>
//                   </div>
//                 ) : (
//                   <p>No reviews available</p>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p>No books available</p>
//           )}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('There was an error fetching the books!', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="relative">
      <header className="App-header">
        <h1 className="text-2xl font-bold mb-4">Daftar Buku</h1>
        {books.length > 0 ? (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-2 border-b">Title</th>
                <th className="px-4 py-2 border-b">Author</th>
                <th className="px-4 py-2 border-b">Year</th>
                <th className="px-4 py-2 border-b">Reviews</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr key={book._id}>
                  <td className="px-4 py-2 border-b">{book.title}</td>
                  <td className="px-4 py-2 border-b">{book.author}</td>
                  <td className="px-4 py-2 border-b">{book.year || 'N/A'}</td>
                  <td className="px-4 py-2 border-b">
                    {book.reviews && book.reviews.length > 0 ? (
                      <ul className="list-disc list-inside">
                        {book.reviews.map((review, index) => (
                          review.user && review.rating && review.comment ? (
                            <li key={index}>
                              <strong>{review.user}</strong> rated it {review.rating}/5: {review.comment}
                            </li>
                          ) : null
                        ))}
                      </ul>
                    ) : (
                      'No reviews available'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No books available</p>
        )}
      </header>
    </div>
  );
}

export default App;
