import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "@screens/groups";
import { NewGroup } from "@screens/newGroup";
import { Players } from "@screens/players";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    // {headerShown: false} serve para remover o cabeçalho que o navigator tras
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />
      <Screen name="new" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
}
// o navigator é usado para definir um contexto de navegação e dentro dele passamos as screens que queremos, o name da screens é como se fosse a URL e o component é qual tela será exibida quando o nome for chamado


