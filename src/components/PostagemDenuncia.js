import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment/min/moment-with-locales';

import { 
    StyleSheet,
    View, 
    Image, 
    Text,
    TouchableOpacity,
    FlatList
} from "react-native";

export default function PostagemDenuncia({ data }) {

    moment.locale('pt-br');
    let numeroColunas = data.imagens.length > 1 ? 2 : 1;

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Image source={{ uri:data.foto }} style={styles.foto} />
                <View>
                    <Text style={styles.autor}>{ data.autor }</Text>
                    <Text style={styles.data}>{ moment.utc(data.data).local().startOf('seconds').fromNow() }</Text>
                </View>
                <TouchableOpacity style={styles.botaoInvisivel}>
                    <MaterialCommunityIcons name="dots-horizontal" size={30} color="#0668B8" />
                </TouchableOpacity>
            </View>
            <Text style={styles.descricao}>{ data.descricao }</Text>
            <View style={{ justifyContent: "space-between", marginBottom: 10 }}>
                { data.imagens.length == 1 &&
                    <FlatList 
                        showVerticalScrollIndicator={0}
                        data={data.imagens}
                        keyExtractor={item => item.key}
                        numColumns={numeroColunas}
                        style={{ display: "flex", gap: 10 }}
                        renderItem={ ({ item }) =>  ( 
                            <Image key={item.key} source={{ uri: item.imagem }} style={[styles.galeria, styles.unicoItem]} />
                        )}
                    />
                }
                { data.imagens.length == 2 &&
                    <FlatList 
                        showVerticalScrollIndicator={0}
                        data={data.imagens}
                        keyExtractor={item => item.key}
                        numColumns={numeroColunas}
                        columnWrapperStyle={{ justifyContent: "center", gap: 10 }}
                        style={{ display: "flex", gap: 10 }}
                        renderItem={ ({ item }) =>  ( 
                            <Image key={item.key} source={{ uri: item.imagem }} style={[styles.galeria, styles.doisItem]} />
                        )}
                    />
                }
                { data.imagens.length == 3 &&
                    <FlatList 
                        showVerticalScrollIndicator={0}
                        data={data.imagens}
                        keyExtractor={item => item.key}
                        columnWrapperStyle={{ gap: 10 }}
                        numColumns={numeroColunas}
                        style={{ display: "flex", gap: 10 }}
                        renderItem={ ({ item }) =>  ( 
                            <Image key={item.key} source={{ uri: item.imagem }} style={[styles.galeria, item.key == 3 ? styles.largaImagem : styles.outrasImagens]} />
                        )}
                    />
                }
                { data.imagens.length == 4 &&
                    <FlatList 
                        showVerticalScrollIndicator={0}
                        data={data.imagens}
                        keyExtractor={item => item.key}
                        numColumns={numeroColunas}
                        columnWrapperStyle={{ justifyContent: "center", gap: 10 }}
                        style={{ display: "flex", gap: 10 }}
                        renderItem={ ({ item }) =>  ( 
                            <Image key={item.key} source={{ uri: item.imagem }} style={[styles.galeria, styles.doisItem]} />
                        )}
                    />
                }
            </View>
            <View style={styles.rodape}>
                <TouchableOpacity style={styles.botao}>
                    <FontAwesome name={"arrow-up"} size={14} height={14} color={"#a1aaa8"}  /> 
                </TouchableOpacity>
                <Text style={styles.curtidas}>{ data.curtidas } denúncias</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#F4F9FF",
      padding: 10,
      borderBottomWidth: 2,
      borderBottomColor: "#EEE",
      flex: 1
  },

  cabecalho: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
  },

  foto: {
    width: 60,
    height: 60,
    marginRight: "4%",
    resizeMode: "stretch",
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#69a4d4"
  },

  autor: {
    borderRadius: 20,
    color: "#69a4d4",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: "4%"
  },

  data: {
    borderRadius: 20,
    color: "#888",
    fontSize: 12,
    fontWeight: "400",
    marginBottom: "4%"
  },

  botaoInvisivel: {
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0
  },

  descricao: {
    padding: "2%",
    marginBottom: "4%",
    color: "#444"
  },

  galeria: {
    borderRadius: 20
  },

  unicoItem: {
    width: "100%",
    height: 200,
  },

  doisItem: {
    width: "49%",
    height: 200,
  },   

  largaImagem: {
    width: "100%",
    height: 200,
  },
  
  outrasImagens: {
    width: "49%",
    height: 200,
  },

  botao: {
    borderRadius: 40,
    borderColor: "#FFF",
    borderWidth: 2,
    borderColor: "#FFF",
    borderColor: "#a1aaa8",
    width: 24,
    height: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 2
  },

  rodape: {
    display: "flex",
    flexDirection: "row",
  },

  curtidas: {
    borderRadius: 20,
    color: "#a1aaa8",
    fontSize: 14,
    fontWeight: "600",
    width: "40%",
    marginLeft: "2%"
  },
});