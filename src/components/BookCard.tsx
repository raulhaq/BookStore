import React from 'react';
import { Book } from '../data/books';
import { ShoppingCart } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="h-56 overflow-hidden">
        <img
          src={book.coverUrl}
          alt={`Cover of ${book.title}`}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
            {book.category}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-1">{book.author}</p>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{book.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">
            {formatPrice(book.price)}
          </span>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-1 transition-colors duration-300">
            <ShoppingCart className="h-4 w-4" />
            <span>Beli</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;