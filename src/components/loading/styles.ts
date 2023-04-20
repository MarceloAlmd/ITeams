import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: ${({theme}) => theme.COLORS.GRAY_600};
`;


// estamos pegando todos os atributos que o ActivityIndicator pode ter(aqueles que passamos para dentro dele ao chamar no app, por exemplo <ActivityIndicator color="red"/>), um deles é mudar a cor do loading para isso precisamos colocar todo o codigo dentro do ({}), aproveitamos e ja pegamos o tema também
export const LoadIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.COLORS.GREEN_700
}))``;
