import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
import {TouchableOpacity} from 'react-native'

// ao usar essa sintaxe styled(TouchableOpacity) é possível que o ts aponte erro de tipagem
// porque o styled-comp pode estar em uma versão de tipagem e o react causando assim o erro 
// é normal a tipagem do styled comp ficar desatualizada em relação ao react pois
// o styled tem que esperar o react lançar, ve o que mudou e so entao atualizar, 
// porem se acontecer esse erro basta resolvemos da seguinte forma
// no arquivo package.json, vemos qual é a versão da tipagem no meu caso é @types/react": "~18.0.14 e entao adicionamos o codigo
// "overrides": { "@types/react": "~18.0.14" }, (solução para npm)
// por fim apagamos a pasta node_Modules e instalamos de novo para que o arquivo package.json seja lido e gerado as novas config com base nas alteraçõs do arquivo
// é importante parar o servidor antes disso e depois iniciar quando tudo estiver ok
export const Container = styled(TouchableOpacity)` // fazemos dessa para usar as propriedades e estender a tipagem
  width: 100%;
  height: 90px;

  background: ${({theme}) => theme.COLORS.GRAY_500};

  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(UsersThree).attrs(({theme}) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill' // propriedade exclusiva do Icone para preencher com a cor 
  
}))`
  margin-right: 20px;
`;