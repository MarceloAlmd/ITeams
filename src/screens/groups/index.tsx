import { Header } from "@components/header";
import * as Styles from "./styles";
import { HighLight } from "@components/highlight";
import { GroupCard } from "@components/groupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/listEmpty";
import { Button } from "@components/button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Styles.Container>
      <Header />
      <HighLight title="Turmas" subTitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
          />
        )}
        // centralizando os styles da lista vazia
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira Turma?"/>
        )}
      />

      <Button 
        title="Criar nova Turma"
      />
    </Styles.Container>
  );
}
