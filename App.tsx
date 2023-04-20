import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
// para usar essas fonts no expo é preciso instalar npx expo install expo-font @expo-google-fonts/roboto
import { Loading } from "@components/loading";
import theme from "./src/theme";
import { Groups } from "@screens/groups";

export default function App() {
  // o carregamento de font é assíncrono, por isso, precisamos garantir que as fontes carregue primeiro e so entao a aplicação apareça, por isso fazemos essa estrategia
  // conseguimos acessar de dentro do useFonts um estado que fica observando se as fontes foram carregadas ou nao, ou seja um boolean
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {/* se a font carregou entao mostra o grups, se nao mostra o loading ate que carregue */}
      { !fontsLoaded ? <Groups /> : <Loading/>}
    </ThemeProvider>
  );
}
