import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import * as Styles from "./styles";

import { Header } from "@components/header";
import { HighLight } from "@components/highlight";
import { Button } from "@components/button";
import { Input } from "@components/input";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {
  const [group, setGroup] = useState(" ");
  const navigation = useNavigation();

  async function handleNew() {
    try {
      await groupCreate(group);
      navigation.navigate("players", { group: group });
    } catch (error) {
      console.log(error);
    }
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
