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

export default function ListaDenuncias() {

  const lista = [
    { key: 1, foto: "https://media-cdn.tripadvisor.com/media/photo-s/13/26/a5/66/photo5jpg.jpg", autor: "José da Silva", descricao: "Encontrei um vazamento de esgoto próximo à esquina da Rua das Flores com a Avenida do Sol. O esgoto está fluindo para a rua, causando mau cheiro e... isso é um absurdo, precisamos fazer algo", 
      data: "2023-10-04 23:00:24", curtidas: 126, endereco: "Rua Tomas de Souza Vila Real, 78 - Ermelino Matarazo", latitude: null, longitude: null, 
      imagens: [
        { key: 1, imagem: "https://www.esgotecnicalitoral.com.br/wp-content/uploads/2019/06/vazamento-rede-esgoto-identificar.jpg"}
      ]
    },
    { key: 2, foto: "https://media.gazetadopovo.com.br/viver-bem/2016/01/mama-lee-600x422-6b5377a0.jpg", autor: "Amarilda Joanne Almeida", descricao: "Olha só quantos problemas tem no meu bairro!", 
      data: "2023-10-04 19:00:24", curtidas: 126, endereco: null, latitude: null, longitude: null, 
      imagens: [
        { key: 1, imagem: "https://www.esgotecnicalitoral.com.br/wp-content/uploads/2019/06/vazamento-rede-esgoto-identificar.jpg"},
        { key: 2, imagem: "https://www.atibaiasp.com.br/wp-content/uploads/2022/10/ralo_201022.jpg"},
      ]
    },
    { key: 3, foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-1cmvM0LxAjY8xpM9eDwUGmuo6YiipRVCg&usqp=CAU", autor: "Josefina Borlando", descricao: "A rua localizada está com muitos problemas, sempre inunda na chuva e agora com esse esgoto com problema... sem condições", 
      data: "2023-10-04 19:00:24", curtidas: 126, endereco: null, latitude: null, longitude: null, 
      imagens: [
        { key: 1, imagem: "https://www.esgotecnicalitoral.com.br/wp-content/uploads/2019/06/vazamento-rede-esgoto-identificar.jpg"},
        { key: 2, imagem: "https://www.atibaiasp.com.br/wp-content/uploads/2022/10/ralo_201022.jpg"},
        { key: 3, imagem: "https://www.desentupidorapernambucana.com.br/wp-content/uploads/2018/07/caca-vazamento-em-sistema-de-esgoto.jpg"},
      ]
    },
    { key: 4, foto: "https://img.freepik.com/fotos-premium/retrato-sensual-de-mulher-jovem-modelo-de-moda-linda-garota-moca-elegante_265223-8983.jpg", autor: "Amarilda Joanne Almeida", descricao: "Acreditam que faz mais de um mês que a rua do lado está assim????", 
      data: "2023-10-04 19:00:24", curtidas: 126, endereco: null, latitude: null, longitude: null, 
      imagens: [
        { key: 1, imagem: "https://www.esgotecnicalitoral.com.br/wp-content/uploads/2019/06/vazamento-rede-esgoto-identificar.jpg"},
        { key: 2, imagem: "https://www.atibaiasp.com.br/wp-content/uploads/2022/10/ralo_201022.jpg"},
        { key: 3, imagem: "https://www.desentupidorapernambucana.com.br/wp-content/uploads/2018/07/caca-vazamento-em-sistema-de-esgoto.jpg"},
        { key: 4, imagem: "https://www.esgotecnicalitoral.com.br/wp-content/uploads/2019/06/vazamento-rede-esgoto-identificar.jpg"},
      ]
    },
  ];

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
    backgroundColor: "#FFF",
    padding: "2%",
    flex: 1
  }
});

