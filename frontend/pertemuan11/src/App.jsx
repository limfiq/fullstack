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

import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div className="App">
      <header className="App-header">
        <h1>Daftar Buku</h1>
        <div>
          {books.length > 0 ? (
            books.map(book => (
              <div key={book._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                <h2>{book.title}</h2>
                <p><strong>Author:</strong> {book.author}</p>
                {book.year && <p><strong>Year:</strong> {book.year}</p>}
                {book.reviews && book.reviews.length > 0 ? (
                  <div>
                    <h3>Reviews:</h3>
                    <ul>
                      {book.reviews.map((review, index) => (
                        review.user && review.rating && review.comment ? (
                          <li key={index}>
                            <p><strong>{review.user}</strong> rated it {review.rating}/5</p>
                            <p>{review.comment}</p>
                          </li>
                        ) : null
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p>No reviews available</p>
                )}
              </div>
            ))
          ) : (
            <p>No books available</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
