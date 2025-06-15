export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  coverUrl: string;
  description: string;
  category: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    price: 95000,
    coverUrl: "https://images.pexels.com/photos/1809340/pexels-photo-1809340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Novel sejarah yang menceritakan kehidupan seorang pribumi terpelajar pada masa kolonial Belanda.",
    category: "Novel Sejarah"
  },
  {
    id: 2,
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    price: 85000,
    coverUrl: "https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Buku yang mengajarkan filosofi Stoa untuk menjalani kehidupan modern yang penuh tekanan.",
    category: "Filsafat"
  },
  {
    id: 3,
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    price: 105000,
    coverUrl: "https://images.pexels.com/photos/4865619/pexels-photo-4865619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Novel yang mengisahkan tentang perjuangan dan harapan di tengah hiruk pikuk kehidupan politik Indonesia.",
    category: "Novel"
  },
  {
    id: 4,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 125000,
    coverUrl: "https://images.pexels.com/photos/5834332/pexels-photo-5834332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sejarah singkat umat manusia dari perspektif evolusi biologis dan budaya.",
    category: "Sejarah"
  },
  {
    id: 5,
    title: "Kitab Kawin",
    author: "Laksmi Pamuntjak",
    price: 90000,
    coverUrl: "https://images.pexels.com/photos/12226044/pexels-photo-12226044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Novel yang membahas pernikahan dan hubungan dari perspektif wanita Indonesia modern.",
    category: "Novel"
  },
  {
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    price: 110000,
    coverUrl: "https://images.pexels.com/photos/4865619/pexels-photo-4865619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Panduan praktis untuk membangun kebiasaan baik dan menghilangkan kebiasaan buruk.",
    category: "Pengembangan Diri"
  },
  {
    id: 7,
    title: "Hujan Bulan Juni",
    author: "Sapardi Djoko Damono",
    price: 75000,
    coverUrl: "https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Kumpulan puisi yang mengangkat tema-tema keseharian dengan bahasa yang indah dan mendalam.",
    category: "Puisi"
  },
  {
    id: 8,
    title: "Pulang",
    author: "Tere Liye",
    price: 89000,
    coverUrl: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Novel yang mengisahkan tentang perjalanan hidup seorang anak muda yang berusaha menemukan jati dirinya.",
    category: "Novel"
  },
];

export default books;