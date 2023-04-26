import { useNavigation } from "@react-navigation/native";
import * as Styles from "./styles";
import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

// estrategia para exibir ou ão exibir o button voltar
export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation()
  function handleGoBack() { 
    navigation.navigate('groups')
  }

  return (
    <Styles.Container>
      {showBackButton && (
        <Styles.BackButton onPress={handleGoBack}>
          <Styles.BackIcon />
        </Styles.BackButton>
      )}

      <Styles.Logo source={logoImg} />
    </Styles.Container>
  );
}
