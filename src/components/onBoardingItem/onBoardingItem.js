import { useWindowDimensions, View, Text, Image, StyleSheet } from 'react-native';

export default function OnBoardingItem({ item }) {
  const { width, height } = useWindowDimensions();
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    image: {
      flex: 0.5,
      justifyContent: 'center',

    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: '10',
      color: '#0668B8',
      textAlign: 'center'
    },
    description: {
      fontSize: 16,
      color: '#263238',
      textAlign: 'justify',
      paddingHorizontal: 64
    },
  });

  return (
    <View style={[styles.container, { width, height }]}>
      <Image style={[styles.image, { width, resizeMode: 'contain' }]} source={item.image} />
      <View style={{ flex: 0.4 , backgroundColor: '#E6F4F1', gap: "10%"}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}
