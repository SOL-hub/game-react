import React from 'react';
import styled from 'styled-components';
import { Flex } from 'components/atom/Layout';
import { HeadBold20 } from 'components/atom/Typo';

const RegistrationButton = ({ isCompleted, registrationProgress }) => {
  return (
    <>
      <Flex width="100%" height="0.313rem" background="red50">
        {/* <ProgressBox percent={registrationProgress} /> */}
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="calc(100% - 0.313rem)"
        background={isCompleted ? 'red500' : 'black50'}
        onClick={() =>
          isCompleted
            ? console.log('판매정보 다 입력 완료')
            : alert('판매에 필요한 정보를 다 등록하지 않았습니다.')
        }
      >
        <HeadBold20 color={`black${isCompleted ? 0 : 200}`}>등록 완료</HeadBold20>
      </Flex>
    </>
  );
};

export default RegistrationButton;

// const ProgressBox = styled.div`
//   width: ${({ percent }: { percent: number }) => `${(percent / 12) * 100}%`};
//   height: 100%;
//   background: ${({ theme }) => theme.color.red500};
//   transition: width 0.6s ease;
// `;
