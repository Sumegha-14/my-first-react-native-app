import * as React from 'react';
import { Text, View, StyleSheet ,Image,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

export default class Card extends React.PureComponent {
  render(){
  return (
     <TouchableOpacity style={styles.card}>
     <Image style={styles.cardImage} source={{uri:"https://dynaimage.cdn.cnn.com/cnn/digital-images/org/e752f24b-5c23-4a19-8f3f-548de83635e9.jpg"}}/>
     <Text style={styles.cardText}>{this.props.item.title}</Text>
     </TouchableOpacity>
  );
 }
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:'white',
    marginBottom:10,
    marginLeft:'2%',
    width:'96%',
    shadowColor:'black',
    shadowOpacity:0.2,
    shadowRadius:1,
    shadowOffset:{
      width:3,
      height:3
    }

  },
  cardImage:{
    width:'100%',
    height:200,
    resizeMode:'cover'
  },
  cardText:{
    padding:10,
    fontSize:20,
  }
});
