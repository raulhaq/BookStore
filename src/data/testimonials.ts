export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sari Wijaya",
    role: "Guru Bahasa Indonesia",
    content: "Koleksi buku di Sastra Book Store sangat lengkap, terutama untuk buku-buku sastra Indonesia. Pelayanannya juga ramah dan pengiriman selalu tepat waktu.",
    avatarUrl: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Mahasiswa",
    content: "Harga buku di sini sangat terjangkau dan sering ada diskon menarik. Sebagai mahasiswa dengan budget terbatas, saya sangat terbantu.",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4
  },
  {
    id: 3,
    name: "Diana Putri",
    role: "Penulis",
    content: "Sebagai penulis, saya sangat mengapresiasi dukungan Sastra Book Store terhadap penulis lokal. Mereka memberikan wadah yang baik untuk karya-karya Indonesia.",
    avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    id: 4,
    name: "Rendi Wibowo",
    role: "Karyawan Swasta",
    content: "Website-nya user-friendly dan proses pembelian sangat mudah. Buku selalu dalam kondisi baik saat sampai. Rekomendasi untuk para pecinta buku!",
    avatarUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  }
];

export default testimonials;