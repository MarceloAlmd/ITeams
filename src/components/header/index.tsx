import * as Styles from "./styles";
import logoImg from "@assets/logo.png";


type Props = {
  showBackButton?: boolean;
};

// estrategia para exibir ou ão exibir o button voltar
export function Header({ showBackButton = false }: Props) {
  return (
    <Styles.Container>
      {showBackButton && (
        <Styles.BackButton>
          <Styles.BackIcon />
        </Styles.BackButton>
      )}

      <Styles.Logo source={logoImg} />
    </Styles.Container>
  );
}
