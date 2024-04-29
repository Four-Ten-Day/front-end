import type { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import Image from 'next/image';

import Button from '@/components/button';
import LandingAnimation from '@/components/lading-animation';

const Home: NextPageWithLayout = () => {
  return (
    <>
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
            <span className="opacity-0 animate-[fade-in_1s_ease-out_forwards_1s] whitespace-nowrap">
              오늘 뭐하고 놀지 고민되나요?
            </span>
            <span className="opacity-0 animate-[fade-in_1s_ease-out_forwards_2s] whitespace-nowrap">
              오놀이 랜덤으로 추천해줄게요 :)
            </span>
          </h1>
        </section>

        <nav className="flex justify-center">
          <Button
            href={'/'}
            size="M"
            variant="contained"
            className="opacity-0 animate-[fade-in_1s_ease-out_forwards_3s]"
          >
            네 좋아요!
          </Button>
        </nav>
      </main>

      <LandingAnimation />
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <div className="flex flex-col items-center px-8 py-28">{page}</div>;
};

export default Home;
