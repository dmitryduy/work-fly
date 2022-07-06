import styled from 'styled-components';

export const CheckBoxStyled = styled.label`
  input[type='checkbox'] {
    display: none;
    opacity: 0;
    visibility: hidden;
  }

  span {
    display: block;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    width: 16px;
    height: 16px;
    position: relative;
    cursor: pointer;
    transition: ${({theme}) => theme.transition.base};

    &:hover {
      border: 1px solid rgba(89, 100, 118, 0.16);
    }

    &:before {
      content: '';
      position: absolute;
      transform-origin: 0 100%;
      border-bottom: 2px solid ${({ theme }) => theme.colors.white};
      border-right: 2px solid ${({ theme }) => theme.colors.white};
      width: 10px;
      height: 7px;
      top: -2px;
      left: 12.5px;
      transform: rotate(135deg) scaleY(-1);
      display: none;
    }

    &::after {
      content: '';
      position: absolute;
      right: 50%;
      bottom: 50%;
      z-index: -1;
      background: ${({ theme }) => theme.colors.gray40};
      border-radius: 12px;
      width: 24px;
      height: 24px;
      transform: translate(50%, 50%);
      opacity: 0;
      visibility: hidden;
      transition: .3s;
    }
  }

  input[type='checkbox']:checked + span {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &::before {
      display: block;
    }

    &:hover {
      &::after {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  input[type='checkbox']:disabled + span {
    background-color: ${({ theme }) => theme.colors.gray40};
    border-color: transparent;

    &::before {
      display: block;
    }
  }
`;
