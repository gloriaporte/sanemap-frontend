import { Image } from 'react-native'
import BlogPost from '../../../assets/blogPost.png'
import LocationSearch from '../../../assets/locationSearch.png'
import TeamSpirit from '../../../assets/teamSpirit.png'

export default [
  {
    title: 'Bem-vindo ao SaneMap!',
    subtitle: 'Aqui, juntos, podemos transformar nossa comunidade. Denuncie problemas de saneamento e ajude a criar um ambiente mais saudável.',
    image: <Image source={BlogPost} />,
    backgroundColor: '#F4F9FF'
  },
  {
    title: 'Faça a Mudança!',
    subtitle: 'Compartilhe as preocupações com o saneamento, aumente a conscientização e faça parte da solução.',
    image: <Image source={LocationSearch} />,
    backgroundColor: '#F4F9FF'
  },
  {
    title: 'Registre, compartilhe, aja!',
    subtitle: 'Registre, conecte-se e ajude a melhorar as condições de saneamento em sua vizinhança. Sua voz faz a diferença.',
    image: <Image source={TeamSpirit} />,
    backgroundColor: '#F4F9FF'
  }
]