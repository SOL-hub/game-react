import { css } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import BSButton from './BSButton';
import BSFlex from './BSFlex';
import { colors } from '@/styles/colorPalette';

function Navbar() {
  const location = useLocation();
  const showSignButton = ['/signup', '/signin'].includes(location.pathname) === false;

  return (
    <BSFlex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">홈</Link>
      <Link to="/signp"></Link>
      {showSignButton ? (
        <Link to="/signup">
          <BSButton>로그인/회원가입</BSButton>
        </Link>
      ) : null}
    </BSFlex>
  );
}

const navbarContainerStyles = css`
  position: sticky;
  top: 0;

  padding: 10px 24px;
  z-index: 10;

  border-bottom: 1px solid ${colors.blackSalon500};
  background-color: ${colors.whiteSalon0};
`;

export default Navbar;
