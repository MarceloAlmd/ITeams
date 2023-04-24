import * as Styles from "./styles";
import { TouchableOpacityProps } from "react-native";

// colocando tudo dentro do Props inclusive o isActive
type Props = TouchableOpacityProps &
  Styles.FilterStylesProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Styles.Container isActive={isActive} {...rest}>
      <Styles.Title>{title}</Styles.Title>
    </Styles.Container>
  )

}
