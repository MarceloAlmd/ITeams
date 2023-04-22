import * as Styles from "./styles";

type ListEmptyProps = {
  message: string;
};

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <Styles.Container>
      <Styles.Message>{message}</Styles.Message>
    </Styles.Container>
  );
}
