import styled from '@emotion/styled';

export default function FeedSection() {
  return (
    <StFeedsWrapper>
      <StOneLineFeeds>
        <StFeed></StFeed>
        <StFeed></StFeed>
        <StFeed></StFeed>
      </StOneLineFeeds>
      <StOneLineFeeds>
        <StFeed></StFeed>
        <StFeed></StFeed>
        <StFeed></StFeed>
      </StOneLineFeeds>
      <StOneLineFeeds>
        <StFeed></StFeed>
        <StFeed></StFeed>
        <StEmptyFeed></StEmptyFeed>
      </StOneLineFeeds>
    </StFeedsWrapper>
  );
}

const StFeedsWrapper = styled.section``;

const StOneLineFeeds = styled.div`
  display: flex;
  gap: 3px;

  margin-bottom: 3px;
`;

const StFeed = styled.div`
  flex: 1;

  aspect-ratio: 1 / 1;

  background-color: green;
`;

const StEmptyFeed = styled(StFeed)`
  background-color: transparent;
`;
