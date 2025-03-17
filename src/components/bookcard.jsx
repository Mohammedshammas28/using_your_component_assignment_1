// write the book component code here
import React from "react";

const Bookcard = (book ) => {
  
  return (
    <div className="bookcard">
      <img src={book.image} />
      <h3>{book.name}</h3>
      <p><strong>genre:</strong> {book.genre}</p>
      <p><strong>author:</strong> {book.author}</p>
    </div>
  );
};

export default Bookcard;
