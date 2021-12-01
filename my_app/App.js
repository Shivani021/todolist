import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions, Button,} from 'react-native';

import BoxDesign from "BoxDesign";
const data=[
  {
    id:1,
    title:"First Task",
    body:"running",
  },
  {
    id:2,
    title:"Second Task",
    body:"novel reading",
  },
  {
    id:3,
    title:"Third Task",
    body:"Movie",
  },
  {
    id:4,
    title:"Fourth Task",
    body:"Dinner",
  },
];
const {width}=Dimensions.get("window");

export default function App() {
  const [todo,setTodo]= useState(data);
  const [title,setTitle]= useState("");
  const [body, setBody] = useState("");

  const handleSubmit = ()=>{
    setTodo([...todo,{id:6,title:title,body:body}]);
    setTitle("");
    setBody("");
  };
  return(
    <ScrollView style={styles.container}>
      {todo.map((v,i)=> {
        return (
          <View key={i}>
            <BoxDesign title={v.title} body= {v.body}/>
          </View>
        );
      })}
    <View
    style={{
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
    }}
    >
      <TextInput
      style={{
        height:60,
        width:width-10,
        backgroundColor:"rgba(252,252,252,1)",
        borderRadius:10,
        borderColor:"#0093db",
        borderWidth:1,
        paddingHorizontal:20,
      }}
      value={title}
      onChangeText={(text)=> setTitle(text)}
      multiline={true}
      placeholder="this is a placeholder"/>

      <TextInput
      style={{
        height:60,
        width:width-10,
        backgroundColor:"rgba(252,252,252,1)",
        borderRadius:10,
        borderColor:"#0093db",
        borderWidth:1,
        paddingHorizontal:20,
        marginVertical:10,
      }}
      value={body}
      onChangeText={(text)=> setBody(text)}
      multiline={true}
      placeholder="this is a placeholder"
      />

      <TouchableOpacity
      style={{
        backgroundColor:"red",
        height:60,
        width:width-10,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
      }}
      onPress={handleSubmit}
      >
        <Text style={{color:"#fff",fontSize:16}}>Post</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
      );
    }

  
  
  /*return (
    <View style={styles.container}>
      
      <Button title="123" onPress={press}/>
    </View>
  );
}*/


const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    marginTop:30
  },
});
