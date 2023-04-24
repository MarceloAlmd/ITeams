import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
export type FilterStylesProps = {
  isActive?: boolean;
};

/* se o isActive for true entao ele vai exibir a borda verde */
export const Container = styled(TouchableOpacity)<FilterStylesProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      /* border: 1px solid ${theme.COLORS.GREEN_700}; */
    `};

  border: 1px solid ${({ theme, isActive }) =>
    isActive ? theme.COLORS.GREEN_700 : theme.COLORS.RED};

  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `};
`;
