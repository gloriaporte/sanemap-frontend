import { View, Text, Image, StyleSheet } from "react-native-web";

export default function ContainerIntro({ image, title, description }) {
  const styles = StyleSheet.create({
    image: {
      resizeMode: "contain",
    },
  });

  return (
    <View className="min-h-screen">
      <Image className="w-full h-full" style={styles.image} source={image} />
      <View 
        className="bottom-0 w-full p-10 bg-tertiary flex justify-between items-center h-2/5"
      >
        <Text className="font-bold">{title}</Text>
        <Text className="text-justify">{description}</Text>
      </View>
    </View>
  );
}
