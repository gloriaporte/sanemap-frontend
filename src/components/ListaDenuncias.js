import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { 
    TouchableOpacity,
    Text, 
    View, 
    StyleSheet,
    FlatList
} from 'react-native';

import PostagemDenuncia from './PostagemDenuncia';
import { lista } from '../../assets/lista_posts';

export default function ListaDenuncias() {
  return (
    <View style={styles.container}>
      <FlatList 
        showVerticalScrollIndicator={0}
        data={lista}
        keyExtractor={item => item.key}
        style={{ display: "flex"}}
        renderItem={ ({ item }) =>  ( 
            <PostagemDenuncia 
                data={item} 
            />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F9FF",
    flex: 1
  }
});

