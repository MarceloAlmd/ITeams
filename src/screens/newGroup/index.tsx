import { Header } from "@components/header";
import * as Styles from "./styles";
import { HighLight } from "@components/highlight";
import { Button } from "@components/button";

export function NewGroup() {
  return (
    <Styles.Container>
      <Header showBackButton />
      <Styles.Content>
        <Styles.Icon />
        <HighLight title="Nova Turma" subTitle="Crie a turma para adicionar as pessoas"/>
        <Button title="Criar"/>
      </Styles.Content>
    </Styles.Container>
  );
}
