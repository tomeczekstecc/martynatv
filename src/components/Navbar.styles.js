import styled from 'styled-components';

const leading_1 = '#b02727';

export const Wrapper = styled.div`
  color: ${leading_1};
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  h1 {
    margin: 0;
  }

  a {
    color: ${leading_1};
    text-decoration: none;
  }
`;

export const MenuStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  a {
    margin: 15px;
  }
`;
