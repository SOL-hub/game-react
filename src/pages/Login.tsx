import React from 'react';
import { DefaultLayout, Flex } from 'components/atom/Layout';
import { BarCancel } from 'components/template/Bar';
import KakaoLoginButtonImage from 'assets/image/kakao_login_large_wide.png';
import { ToolTip } from 'components/molecules/ToolTip';

const Login = () => {
  return (
    <DefaultLayout padding="0">
      <BarCancel title="로그인하기" />
      <Flex column margin="calc(50vh - 7.75rem) 1.5rem">
        <ToolTip text="간편하게 로그인 하고 보드살롱을 이용해보세요!" margin="0 0 0.5rem" />
        <img
          src={KakaoLoginButtonImage}
          alt="카카오 로그인 버튼"
          width="100%"
          onClick={() => console.log('카카오 로그인으로 이동')}
        />
      </Flex>
    </DefaultLayout>
  );
};

export default Login;
