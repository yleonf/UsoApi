import React from 'react';
import {
    Text,
    View,
    StyleSheet
}from 'react-native';

export default  class ComponenteExterno extends React.Component{
    render(){
    return (
        <View>
        <Text style={styles.texto}>
          Mi Componente Externo
        </Text>
        </View>
    );
    }
}
const styles = StyleSheet.create({
   texto: {
      
      
      color: '#0059FF',
      
    },
    });