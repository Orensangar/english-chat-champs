import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Belajar Bahasa Inggris Percakapan Jadi Mudah
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Tingkatkan kemampuan bahasa Inggris Anda dari Junior sampai Expert, 
                tanpa perlu login dan 100% gratis!
              </p>
              <Link to="/level-selection">
                <Button size="lg" className="bg-brand-yellow hover:bg-yellow-500 text-black text-lg px-8 py-6">
                  Mulai Belajar Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Kenapa Belajar di English Chat Champs?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="bg-brand-blue rounded-full w-12 h-12 flex items-center justify-center text-white text-xl mb-4 mx-auto">1</div>
                <h3 className="text-xl font-semibold text-center mb-2">3 Level Pembelajaran</h3>
                <p className="text-gray-600 text-center">
                  Dari Junior, Intermediate, hingga Expert. Pilih sesuai kemampuan Anda.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="bg-brand-blue rounded-full w-12 h-12 flex items-center justify-center text-white text-xl mb-4 mx-auto">2</div>
                <h3 className="text-xl font-semibold text-center mb-2">Variasi Soal Lengkap</h3>
                <p className="text-gray-600 text-center">
                  Pilihan ganda, essay singkat, dan listening untuk melatih semua aspek bahasa.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="bg-brand-blue rounded-full w-12 h-12 flex items-center justify-center text-white text-xl mb-4 mx-auto">3</div>
                <h3 className="text-xl font-semibold text-center mb-2">Hasil dan Pembahasan</h3>
                <p className="text-gray-600 text-center">
                  Dapatkan nilai, lihat jawaban Anda yang benar/salah, dan pelajari contoh jawaban.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Level Preview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Pilih Level Anda</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="bg-blue-100 p-6 text-center">
                  <h3 className="text-2xl font-bold text-brand-blue">Junior</h3>
                  <p className="text-gray-600 mt-2">Untuk pemula yang baru belajar percakapan bahasa Inggris</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Kosakata dasar sehari-hari
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Tata bahasa sederhana
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Listening dengan kecepatan lambat
                    </li>
                  </ul>
                  <Link to="/quiz/junior" className="mt-4 block">
                    <Button className="w-full">Mulai Level Junior</Button>
                  </Link>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-brand-blue border-2">
                <div className="bg-blue-200 p-6 text-center">
                  <h3 className="text-2xl font-bold text-brand-blue">Intermediate</h3>
                  <p className="text-gray-600 mt-2">Untuk yang sudah memiliki dasar percakapan bahasa Inggris</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Kosakata yang lebih variatif
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Tata bahasa tingkat menengah
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Listening dengan kecepatan normal
                    </li>
                  </ul>
                  <Link to="/quiz/intermediate" className="mt-4 block">
                    <Button className="w-full bg-brand-blue hover:bg-blue-700">Mulai Level Intermediate</Button>
                  </Link>
                </div>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="bg-blue-100 p-6 text-center">
                  <h3 className="text-2xl font-bold text-brand-blue">Expert</h3>
                  <p className="text-gray-600 mt-2">Untuk yang ingin menguasai percakapan bahasa Inggris tingkat tinggi</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Kosakata kompleks dan idiom
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Tata bahasa tingkat lanjut
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Listening dengan kecepatan cepat
                    </li>
                  </ul>
                  <Link to="/quiz/expert" className="mt-4 block">
                    <Button className="w-full">Mulai Level Expert</Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
