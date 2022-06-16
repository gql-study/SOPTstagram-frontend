import styled from '@emotion/styled';

interface UserInfoList {
  title: string;
  count: number;
}

export default function InfoSection() {
  const tempUserInfoList: UserInfoList[] = [
    { title: '게시물', count: 10 },
    { title: '팔로워', count: 601 },
    { title: '팔로우', count: 554 },
  ];

  return (
    <StUserInfoListWrapper>
      {tempUserInfoList.map((userInfo, idx) => {
        return (
          <StUserInfoList key={`${userInfo.title}-${idx}`}>
            <StTextWrapper>
              {userInfo.title}
              <StUserInfoCount>{userInfo.count}</StUserInfoCount>
            </StTextWrapper>
          </StUserInfoList>
        );
      })}
    </StUserInfoListWrapper>
  );
}

const StUserInfoListWrapper = styled.ul`
  display: flex;

  border-top: 1px solid rgb(219, 219, 219);
  border-bottom: 1px solid rgb(219, 219, 219);
  padding: 12px 0;
`;

const StUserInfoList = styled.li`
  display: flex;

  flex: 1;
  align-items: center;
  justify-content: center;

  height: 36px;
  list-style: none;

  text-align: center;
`;

const StTextWrapper = styled.div`
  width: 42px;
  height: 36px;

  font-size: 14px;
`;

const StUserInfoCount = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
