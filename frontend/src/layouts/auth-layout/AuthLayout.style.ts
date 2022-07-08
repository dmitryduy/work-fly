import styled from 'styled-components';

export const MainTitle = styled.h1`
  ${({ theme }) => theme.typography.displayTitle};
  max-width: 380px;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 22px;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  padding: 24px 32px 16px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
`;

export const MainContainer = styled.div`
  max-width: 1425px;
  margin: 0 auto;
  display: flex;

  svg {
    margin-left: -32px;
  }
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.typography.subhead};
  color: ${({ theme }) => theme.colors.primary};
  margin: 53px 0 58px;
`;

export const AuthLink = styled.a`
  font-weight: 600;
  cursor: pointer;
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 58px 83px 43px;
  height: 800px;
  border-radius: 28px;
  max-width: 650px;
  width: 100%;
`;
