import { TouchableOpacityProps } from 'react-native'
import * as Styles from './styles'

// pegando as propriedades do button e passando para dentro do GroupCardProps & as demais props como o title: string,
// agora quando esse comp for chamado podemos acessar todas as propriedades que um button tem porque o container é um button 
// para isso funcionar no arquivo de styles precisamos passar o dessa forma Container = styled(TouchableOpacity), para que o ts entenda
type GroupCardProps = TouchableOpacityProps & {
  title: string
}


// passamos o ...rest para que qualquer outra propriedade 
// incluida no TouchableOpacityProps 
// que eu nao dexei explicita ali no types possa ser entendida pelo container
export function GroupCard({title, ...rest}: GroupCardProps) {
  return (
    <Styles.Container{...rest}>
      <Styles.Icon />
      <Styles.Title>
        {title}
      </Styles.Title>
    </Styles.Container>
  )
}