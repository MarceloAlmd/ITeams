import * as Styles from "./styles";
import { ButtonTypeStyleProps } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Styles.Container type={type} {...rest}>
      <Styles.Title>{title}</Styles.Title>
    </Styles.Container>
  );
}
