import styled from '@emotion/styled';
import OptionIcon from '@src/assets/myPage/OptionIcon';

export default function HeaderSection() {
  const nickname = 'joamjoam_2';

  return (
    <StSection>
      <StProfileImg />
      <StProfileTextWrapper>
        <StName>
          {nickname}
          <OptionIcon />
        </StName>
        <StEditBtn type="button">프로필 편집</StEditBtn>
      </StProfileTextWrapper>
    </StSection>
  );
}

const StSection = styled.section`
  display: flex;

  padding: 16px;
`;

const StProfileImg = styled.div`
  margin-right: 28px;

  border-radius: 50%;

  background-color: blue;
  width: 77px;
  height: 77px;

  &:hover {
    cursor: pointer;
  }
`;

const StProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StName = styled.h2`
  margin: 0 0 12px;
  line-height: 32px;

  font-size: 28px;
  font-weight: 300;
`;

const StEditBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgb(219, 219, 219);
  border-radius: 4px;

  background-color: transparent;
  width: 250px;
  height: 30px;

  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;
