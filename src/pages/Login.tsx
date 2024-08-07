import React from 'react';
import styled from 'styled-components';
import { DefaultLayout } from 'components/common/Layout';
import { BarCancel } from 'components/common/Bar';
import KakaoLoginButtonImage from 'assets/image/kakao_login_large_wide.png';

const Login = () => {
  return (
    <DefaultLayout padding="0">
      <BarCancel title="로그인하기" />
      <LoginImage
        src={KakaoLoginButtonImage}
        alt="카카오 로그인 버튼"
        onClick={() => console.log('카카오 로그인으로 이동')}
      />
    </DefaultLayout>
  );
};

export default Login;

const LoginImage = styled.img`
  margin: calc(50vh - 3.75rem) 1.5rem;
  width: calc(100% - 3rem);
`;
