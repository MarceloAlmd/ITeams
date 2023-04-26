import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import * as Styles from "./styles";

import { Header } from "@components/header";
import { HighLight } from "@components/highlight";
import { Button } from "@components/button";
import { Input } from "@components/input";

export function NewGroup() {
  const [group, setGroup] = useState(" ");
  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate("players", { group: group });
  }

  return (
    <Styles.Container>
      <Header showBackButton />
      <Styles.Content>
        <Styles.Icon />
        <HighLight
          title="Nova Turma"
          subTitle="Crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da Turma" onChangeText={setGroup} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Styles.Content>
    </Styles.Container>
  );
}
