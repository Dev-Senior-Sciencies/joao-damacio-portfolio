import dynamic from 'next/dynamic';
import Link from "next/link";

const Footer = dynamic(() => import('./components/Footer'), {
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <header className="text-center">
        <img
          src="/joao.jpg"
          alt="João Pedro Damacio"
          className="w-40 h-40 rounded-full border-4 border-blue-600 mb-4"
        />
        <h1 className="text-4xl font-bold text-blue-600">
          Olá, eu sou João Pedro Damacio!
        </h1>
        <p className="mt-4 text-lg">
          Desenvolvedor Full Stack/Mobile apaixonado por tecnologia.
        </p>
      </header>

      <nav className="mt-8 space-x-4">
        <Link href="/skills" className="text-blue-500 hover:underline">
          Habilidades
        </Link>
        <Link href="/projects" className="text-blue-500 hover:underline">
          Projetos
        </Link>
        <Link href="/contact" className="text-blue-500 hover:underline">
          Contato
        </Link>
      </nav>

      <Footer />
    </div>
  );
};

export default Home;
