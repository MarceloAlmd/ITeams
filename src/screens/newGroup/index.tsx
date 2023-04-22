import { Header } from "@components/header";
import * as Styles from "./styles";
import { HighLight } from "@components/highlight";
import { Button } from "@components/button";
import { Input } from "@components/input";

export function NewGroup() {
  return (
    <Styles.Container>
      <Header showBackButton />
      <Styles.Content>
        <Styles.Icon />
        <HighLight
          title="Nova Turma"
          subTitle="Crie a turma para adicionar as pessoas"
        />
        <Input 
          placeholder="Nome da Turma"
        />
        <Button 
          title="Criar" 
          style={{marginTop: 20}}
        />
      </Styles.Content>
    </Styles.Container>
  );
}
