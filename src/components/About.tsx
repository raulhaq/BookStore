import React, { useEffect, useRef } from 'react';
import { BookOpen, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const stats = [
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      value: '1000+',
      label: 'Judul Buku',
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      value: '20+',
      label: 'Tahun Pengalaman',
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      value: '10000+',
      label: 'Pelanggan Puas',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6 opacity-0 transition-opacity duration-1000">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/5532807/pexels-photo-5532807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Bookstore interior"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Tentang Sastra Book Store
              </h2>
              <p className="text-gray-600">
                Sastra Book Store didirikan pada tahun 2002 dengan semangat untuk menyebarkan ilmu pengetahuan dan kecintaan terhadap literasi di Indonesia. Kami telah berkembang menjadi salah satu toko buku terpercaya dengan koleksi lengkap dari berbagai genre.
              </p>
              <p className="text-gray-600">
                Misi kami adalah menyediakan akses yang mudah dan terjangkau terhadap buku-buku berkualitas untuk semua kalangan. Kami percaya bahwa buku adalah jendela dunia yang membuka wawasan dan mengubah hidup.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="mx-auto">{stat.icon}</div>
                    <div className="mt-2 text-2xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;