import styled, { css } from 'styled-components';

interface Props {
  size?: 'S' | 'M' | 'L';
  styleMod?: 'solid' | 'naked';
  square?: boolean;
}

const Button = styled.button<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition.base};

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({ styleMod, theme }) => {
    switch (styleMod) {
    case 'naked':
      return css`
        color: ${theme.colors.primary};
        background-color: transparent;
        @media (any-hover: hover) {
          &:hover:enabled {
            color: ${theme.colors.contentTitle};
          }
        }

        &:active:enabled {
          background-color: ${theme.colors.gray10};
          background-blend-mode: multiply;
        }`;
    default:
      return css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        @media (any-hover: hover) {
          &:hover:enabled {
            background-color: ${theme.colors.primaryHover};
          }
        }

        &:active:enabled {
          background-color: ${theme.colors.black};
        }`;
    }
  }}

  ${({ size, theme, square }) => {
    switch (size) {
    case 'S':
      return css`
        ${theme.typography.buttonXSmall};
        padding: ${square ? '8px' : '8px 12px'};
        gap: 4px;
        border-radius: ${theme.radius.xsmall};
        & svg {
          max-width: 16px;
          max-height: 16px;
        }
      `;
    case 'M':
      return css`
        ${theme.typography.buttonMedium};
        padding: ${square ? '8px' : '8px 16px'};
        gap: 6px;
        border-radius: ${theme.radius.small};
        & svg {
          max-width: 18px;
          max-height: 18px;
        }
      `;
    default:
      return css`
        ${theme.typography.buttonLarge};
        padding: ${square ? '8px' : '16px 24px'};
        gap: 8px;
        border-radius: ${theme.radius.medium};
        & svg {
          max-width: 20px;
          max-height: 20px;
        }
      `;
    }
  }}
`;

export default Button;
