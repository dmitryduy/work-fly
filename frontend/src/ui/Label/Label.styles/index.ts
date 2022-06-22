import styled from "styled-components";

export const LabelStyled = styled.div`
  display: inline-flex;
  align-items: center;
  ${({ theme }) => theme.typography.buttonSmall};
  background-color:${({ theme }) => theme.colors.gray40};;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  border: none;
  padding: 4px 8px;
`;

export const ChildrenStyled = styled.p`
  margin: 0 5px;
`;
