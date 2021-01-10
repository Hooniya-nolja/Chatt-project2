import React from 'react';
import styled, { isStyledComponent } from 'styled-components';
import { Link } from 'react-router-dom';

import GO_BACK from '../components/icon/go_back.png';
import CLOSE_ICON from '../components/icon/close.png';

function Header({ beforeUrl, afterUrl, pageTitle, goBackButton, closeButton, forceLink }) {
  return (
    <Container>
      { goBackButton ? (
        <Link to={beforeUrl} onClick={() => {forceLink && forceLink()}}>
          <GoBackIcon src={GO_BACK} alt=''/>
        </Link>
      ) : null }
      <Title>{pageTitle}</Title>
      { closeButton ? (
        <Link to={afterUrl}>
          <CloseIcon src={CLOSE_ICON} alt=''/>
        </Link>
      ) : null }
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.div`
  text-align: center;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  width: 72px;
  height: 24px;
  position: absolute;
  top: 56px;
  left: calc(100vw / 2 - 36px);
`;

const GoBackIcon = styled.img`
  position: absolute;
  top: 56px;
  left: 16px;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 56px;
  right: 16px;
  width: 24px;
`;

export default Header;
