import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <main className={`${inter.className}`}>
      <span>hello world</span>
    </main>
  );
};

export default Home;
