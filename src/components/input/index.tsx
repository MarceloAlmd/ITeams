import * as Styles from './styles'
import {useTheme} from 'styled-components/native'
import {TextInputProps} from 'react-native'

export function Input({...rest}: TextInputProps){
// o useTheme tras para gente os temas que temos na nossa
// aplicação, estamos desestruturando de dentro dele o 
// COLORS e usando para definir a cor do placeHolder
  const {COLORS} = useTheme()

  return (
    <Styles.Container 
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
  
}