import styled from "styled-components";

import {ITagStyledProps} from "../Tag.typings";

export const TagStyled = styled.div<ITagStyledProps>`
  display: inline-flex;
  align-items: center;
  ${({ theme }) => theme.typography.buttonSmall};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  border-radius: 15px;
  border: none;
  padding: 4px 8px;
`;
