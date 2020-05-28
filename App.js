//import * as React from 'react';
import React,{Component} from'react';
import { Text, View, ActivityIndicator,FlatList,StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';
import Card from './components/Card/Card.js';
export default class App extends Component {
constructor(){
  super();
  this.state={
    items:[]
  }
}

  componentDidMount(){
       this._get('https://jsonplaceholder.typicode.com/posts').then(
         data=>{
           this.setState({items:data})
         }
       )
  }
  render(){
    if(this.state.items.length===0){
      return(
        <View style={styles.loader}>
        <ActivityIndicator size="large"/> 
        </View>
      );
    }
  return (
    <FlatList 
    style={styles.container}
    data={this.state.items}
    keyExtractor={(item,index)=>index.toString()}
    renderItem={({item})=><Card item={item}/>}
    />
  );
}
_get=async(endpoint)=>{
  const res=await fetch(endpoint);
  const data=await res.json();
  return data;
}
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    marginTop:20
  },
  loader:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
});
