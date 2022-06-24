import styled from '@emotion/styled';
import PostList from '@src/components/feed/PostList';
import type { NextPage } from 'next';
import Head from 'next/head';

const Feed: NextPage = () => {
  return (
    <Styled.Page>
      <Head>
        <title>SOPTstagram</title>
        <meta name="description" content="SOPTstagram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Styled.Header>
        <div>카메라</div>
        <div>로고</div>
        <div>디엠</div>
      </Styled.Header>
      <Styled.Main>
        <div>스토리</div>
        <PostList />
      </Styled.Main>
      <Styled.Footer>
        <div>홈</div>
        <div>검색</div>
        <div>추가</div>
        <div>하트</div>
        <div>마이</div>
      </Styled.Footer>
    </Styled.Page>
  );
};

export default Feed;

const Styled = {
  Page: styled.div`
    width: 100vw;
    & > * {
      width: 100%;
    }
  `,
  Main: styled.main``,
  Header: styled.header`
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-between;
  `,
  Footer: styled.footer`
    display: flex;
    position: sticky;
    bottom: 0;
    justify-content: space-between;
  `,
};
