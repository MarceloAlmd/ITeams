import * as Styles from "./styles";
import { Header } from "@components/header";
import { HighLight } from "@components/highlight";
import { ButtonIcon } from "@components/buttonIcon";
import { Input } from "@components/input";
import { Filter } from "@components/filter";

export function Players() {
  return (
    <Styles.Container>
      <Header showBackButton />
      <HighLight
        title="Nome da Turma"
        subTitle="adicione a galera e separe os times"
      />
      <Styles.Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          // essa propriedade do textInput serve para nao corrigir caso o usario tente digitar um apelido ou um nome que nao exista
        />
        <ButtonIcon icon="add" />
      </Styles.Form>
      <Filter title="time a" isActive/>
      <Filter title="time b"/>
    </Styles.Container>
  );
}
