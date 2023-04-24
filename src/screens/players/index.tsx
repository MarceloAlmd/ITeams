import { useState } from "react";
import * as Styles from "./styles";
import { Header } from "@components/header";
import { HighLight } from "@components/highlight";
import { ButtonIcon } from "@components/buttonIcon";
import { Input } from "@components/input";
import { Filter } from "@components/filter";
import { FlatList } from "react-native";
import { PlayerCard } from "@components/playerCard";
import { ListEmpty } from "@components/listEmpty";
import { Button } from "@components/button";

export function Players() {
  const [team, setTeam] = useState("");
  const [players, setPlayers] = useState([]);

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
      <Styles.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
              // atualizando a borda de forma dinamica, se o team foi igual ao item do onPress entao adiciona a borda
            />
          )}
          // propriedade que deixa a lista na horizontal
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Styles.NumberOfPlayers>{players.length}</Styles.NumberOfPlayers>
      </Styles.HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard onRemove={() => {}} name={item} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há jogadores nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
          // centralizando o ListEmptyComponent de forma condicional players.length === 0 && {flex: 1} player.length é igual a zero ? entao aplica um flex de 1
        ]}
      />

      <Button 
        title="Remover Turma"
        type="SECONDARY"
      />
    </Styles.Container>
  );
}
