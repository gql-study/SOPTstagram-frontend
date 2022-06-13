import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SOPTstagram</title>
        <meta name="description" content="SOPTstagram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styled.Main>
        <h1>메인페이지입니다</h1>
      </Styled.Main>
    </div>
  );
};

export default Home;

const Styled = {
  Main: styled.main`
    display: flex;
    position: absolute;
    color: ${({ theme }) => theme.colors.mainColor};
  `,
};
