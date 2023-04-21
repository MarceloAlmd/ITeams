import * as Styles from './styles'

type HighLightProps = {
  title: string
  subTitle: string 
}


export function HighLight({title, subTitle}: HighLightProps) {
  return (
    <Styles.Container>
      <Styles.Title>
        {title}
      </Styles.Title>

      <Styles.SubTitle>
        {subTitle}
      </Styles.SubTitle>

    </Styles.Container>
  )
}