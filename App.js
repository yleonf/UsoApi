import React from 'react';// declaración de componentes
import {
  AppRegistry, // permite elegir cual es la clase principal en nuestra aplicación
  StyleSheet,// permite declarar los estilos de la app usa la funcion create que crea un objeto container y crea otros objetos cada objeto pertenece a una clase
  Text,
  Button, // usa el atributo style 
  View //usa felx
   } from 'react-native';//componentes nativos
import ComponenteExterno from '/Users/yleonf/UsoApi/ComponenteExterno';

export class Loading extends React.Component{
render(){
  return(
    <Text> Loding ...</Text>
  )
}

}

export  class ComponenteHijo extends React.Component{
  render(){
    if(this.props.result){
      var res = this.props.result.map((item,i)=>{
          return(
             <Text key={i}>{item.title}</Text>
          )
      })
    }else{
      return(
      <Loading/>
      )
    }

    return (
      
      <View>
        {res}
        <View style={this.props.status ? styles.on : styles.off}/>
      </View>
    );
 }
}

export  class ComponenteTexto extends React.Component{
  render(){
    console.log(":D");
    console.log(this.state.data);
    return (


      <View>

        <Text style={styles.welcome} >
          {this.props.nombre}
        </Text>
      </View>
    );
  }
}
export default class App extends React.Component{
constructor(props){
  super(props)
    this.state={
      status:false,
      nombre:"hola....!",
      data:null
    }
  
}

ComponentDidMount(){
fetch('https://facebook.github.io/react-native/movies.json')
.then((response) => response.json())
.then((responseJson)=>{
this.setState({
  data:responseJson.movies
})
console.log(this.state.data)
console.log(":D")
} )

}


clicked(){
  this.setState({
    status: !this.state.status
  })
}

  render(){
  return (
    <View style={styles.container}>
      
    <ComponenteHijo status={this.state.status} result={this.state.data}/>
    <ComponenteTexto nombrea={this.state.nombre}/>
<Button
    onPress={this.clicked.bind(this)}
    title='Click here'
    color='red'
    />
      <ComponenteExterno/>
      <Text style={styles.welcome}>
        Mi primera app!
        {this.state.nombre}
      </Text>
      <Text style={styles.instructions}>
        Mis datos
      </Text>
      <Text style={styles.instructions}>
        Yasna León
      </Text>

    </View>
  );
}
} // esto es la clase = componente 
const styles = StyleSheet.create({
  on:{
     width:100,
    height:100,
     backgroundColor:'red'
  },
  off:{
    width:100,
    height:100,
    backgroundColor:'black'
  },
  container: {
    flex: 1, // es una propiedad que permite colocar los elementos en la vista
    justifyContent:'center',
    backgroundColor: '#FFF000',
    alignItems: 'center',
    
  },
  welcome: {
    fontSize:20,
    textAlign: 'center',
    margin:10,

  },
  instructions: {
    
    color: '#FF0046',
    textAlign: 'center',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('App',()=>App);// se le pasan dos parametros
// nombre de la clase y crea una funcion anonima que 
// devuelve el componente 