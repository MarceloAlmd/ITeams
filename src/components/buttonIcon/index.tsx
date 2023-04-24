import * as Styles from "./styles";
import { TouchableOpacityProps } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
type Props = TouchableOpacityProps & {
  // uando a gente for usar o component apertar o ctrl + space no icon ele vai mostrar todas as opções de icon de dentro da lib MaterialIcons
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: Styles.ButtonIconTypeStylesProps;
};

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Styles.Container {...rest}>
      <Styles.Icon 
        name={icon}
        type={type}
      />
    </Styles.Container>
  );
}
