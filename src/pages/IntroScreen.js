import { View, Text, Image, StyleSheet } from 'react-native-web';
import BlogPostSvg from '../../assets/blog_post.svg';
import ContainerIntro from '../components/ContainerIntro';

export default function IntroScreen() {
  const descriptionFirst = 
    "Aqui, juntos, podemos transformar nossa comunidade. Denuncie problemas de saneamento e ajude a criar um ambiente mais saudável."

  return (
    <View className="w-screen">
      <ContainerIntro 
        image={BlogPostSvg} 
        title={"Bem-Vindo ao SaneMap!"} 
        description={descriptionFirst} 
      />
    </View>  
  )
}