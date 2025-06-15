import React, { useEffect, useRef, useState } from 'react';
import books, { Book } from '../data/books';
import BookCard from './BookCard';

const BookGallery: React.FC = () => {
  const [category, setCategory] = useState<string>('all');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Filter books based on category
    if (category === 'all') {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter(book => book.category === category));
    }
  }, [category]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Get unique categories
  const categories = ['all', ...new Set(books.map(book => book.category))];

  return (
    <section 
      id="books" 
      className="py-20 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6 opacity-0 transition-opacity duration-1000">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Koleksi Buku Pilihan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan buku-buku berkualitas dari berbagai genre. Dari sastra klasik hingga pengetahuan modern.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat === 'all' ? 'Semua' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Tidak ada buku dalam kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookGallery;