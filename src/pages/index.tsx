import type { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import Image from 'next/image';

import Button from '@/components/common-ui/button';
import LandingAnimation from '@/components/common-ui/lading-animation';
import { getModePagePath } from '@/lib/utils/paths';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="flex justify-center">
        <Image
          src={'/images/logo.svg'}
          alt="onol logo"
          width={44}
          height={40}
          className="mb-20"
          priority
        />
      </h1>

      <div className="flex flex-col gap-12 w-full">
        <section>
          <h2 className="flex flex-col gap-5 text-center text-h1">
            <span className="opacity-0 animate-[fade-in_1s_ease-out_forwards_1s] whitespace-nowrap">
              오늘 뭐하고 놀지 고민되나요?
            </span>
            <span className="opacity-0 animate-[fade-in_1s_ease-out_forwards_2s] whitespace-nowrap">
              오놀이 랜덤으로 추천해줄게요 :)
            </span>
          </h2>
        </section>

        <nav className="flex justify-center">
          <Button
            href={getModePagePath()}
            size="M"
            variant="contained"
            className="opacity-0 animate-[fade-in_1s_ease-out_forwards_3s]"
          >
            네 좋아요!
          </Button>
        </nav>
      </div>

      <LandingAnimation />
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <div className="px-8 py-14">{page}</div>;
};

export default Home;
