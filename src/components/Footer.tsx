
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} English Chat Champs. Semua materi pembelajaran tersedia gratis.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Dibuat untuk membantu anak muda Indonesia belajar Bahasa Inggris percakapan dengan mudah dan menyenangkan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
