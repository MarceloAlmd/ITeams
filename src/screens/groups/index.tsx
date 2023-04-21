import { Header } from "@components/header";
import * as Styles from "./styles";
import { HighLight } from "@components/highlight";

export function Groups() {
  return (
    <Styles.Container>
      <Header />
      <HighLight title="Turmas" subTitle="Jogue com a sua turma"/>
    </Styles.Container>
  );
}


