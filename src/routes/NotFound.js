import React from 'react';
import styled from 'styled-components';

function NotFound() {
    return (
        <Container>
            <CodeNumber>404 <br /></CodeNumber>
            해당 페이지를 찾을 수 없습니다.
        </Container>
    )
}

const Container = styled.div`

`;

const CodeNumber = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

export default NotFound;