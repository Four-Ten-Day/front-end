import type { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Lottie = dynamic(
  () => import('react-lottie-player').then((mod) => mod.default),
  {
    ssr: false,
  }
);

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Lottie
        className="fixed bottom-0 left-1/2 -translate-x-1/2 -z-10 overflow-hidden "
        path={'/landing-lottie.json'}
        play={true}
        loop={false}
        aria-hidden={true}
      />

      <header className="flex justify-center">
        <Image
          src={'/logo.svg'}
          alt="onol logo"
          width={44}
          height={40}
          className="mb-20"
          priority
        />
      </header>

      <main className="flex flex-col gap-12 w-full">
        <section>
          <h1 className="flex flex-col gap-5 text-center text-h1">
            <p>오늘 뭐하고 놀지 고민되나요?</p>
            <p> 오놀이 추천해줄게요 :)</p>
          </h1>
        </section>

        <nav className="text-center">
          <Link href={'/'}>네 좋아요!</Link>
        </nav>
      </main>
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <div className="flex flex-col items-center px-8 py-28">{page}</div>;
};

export default Home;
