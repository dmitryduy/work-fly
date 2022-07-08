import styled from "styled-components";

export const InputContainer = styled.div`
`;

export const InputItem = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #f8f8f8;// изменить
  outline: none;
  &:focus {
    border-color: ${props => props.theme.colors.primaryColor};
  }
  &.error {
    border-color: #eeb6b0;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.paragraphColor};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

export const Info = styled.span`
  &.error {
    color: #D44333;
  }
  &.tooltip {
    color: #98A0AD;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin: 5px 0 7px;
`;

export const Error = styled.span`
  color: #eeb6b0;
`;