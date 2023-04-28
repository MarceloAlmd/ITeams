import { Header } from "@components/header";
import * as Styles from "./styles";
import { HighLight } from "@components/highlight";
import { GroupCard } from "@components/groupCard";
import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/listEmpty";
import { Button } from "@components/button";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupsGetAll";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();
  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }
  // é importante involver pelo useCallback, para garantir
  // que nao tenha renderização desncessaria, para garantir performace
  // useFocusEffect serve parecido como useEffect, mas ele é para dizer qual tela está em foco, nesse caso sempre que a gente voltar pra tela groups sera ativado o useFocusEffect diferente do useEffect que carregava uma unica vez e mesmo se eu voltasse pra essa tela nao recarregava
  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );
  return (
    <Styles.Container>
      <Header />
      <HighLight title="Turmas" subTitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        // centralizando os styles da lista vazia
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira Turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova Turma" onPress={handleNewGroup} />
    </Styles.Container>
  );
}
