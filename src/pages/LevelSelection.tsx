
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LevelSelection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Pilih Level Belajar Anda</h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Setiap level memiliki 50 soal dengan tingkat kesulitan yang berbeda
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="overflow-hidden">
                <div className="bg-blue-100 p-6 text-center">
                  <h3 className="text-3xl font-bold text-brand-blue">Junior</h3>
                  <p className="text-gray-600 mt-2">Untuk pemula</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Percakapan sehari-hari sederhana
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Kosakata dasar
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Grammar sederhana
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> 50 soal (pilihan ganda, essay, listening)
                    </li>
                  </ul>
                  <Link to="/quiz/junior" className="block">
                    <Button className="w-full text-lg py-6">Mulai Level Junior</Button>
                  </Link>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-brand-blue border-2 shadow-lg transform md:scale-105">
                <div className="bg-brand-blue text-white p-6 text-center">
                  <h3 className="text-3xl font-bold">Intermediate</h3>
                  <p className="text-blue-100 mt-2">Untuk tingkat menengah</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Percakapan dalam berbagai konteks
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Kosakata lebih luas
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Grammar menengah (tenses, conditionals)
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> 50 soal (pilihan ganda, essay, listening)
                    </li>
                  </ul>
                  <Link to="/quiz/intermediate" className="block">
                    <Button className="w-full bg-brand-blue hover:bg-blue-700 text-lg py-6">Mulai Level Intermediate</Button>
                  </Link>
                </div>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="bg-blue-100 p-6 text-center">
                  <h3 className="text-3xl font-bold text-brand-blue">Expert</h3>
                  <p className="text-gray-600 mt-2">Untuk tingkat mahir</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Percakapan kompleks dan professional
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Kosakata lanjut dan idiom
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Grammar lanjut
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> 50 soal (pilihan ganda, essay, listening)
                    </li>
                  </ul>
                  <Link to="/quiz/expert" className="block">
                    <Button className="w-full text-lg py-6">Mulai Level Expert</Button>
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

export default LevelSelection;
