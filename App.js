import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

export default class App extends React.Component {
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Indeterminado',
    cor: '#c8d6e5'
}

calcularImc = () => {
  const resultado = this.state.peso / (this.state.altura * this.state.altura)
  this.setState({
    imc: Math.ceil(resultado)
  })

  if(resultado < 18.5){
    this.setState({
      legenda: 'Mageza',
      cor: '#f368e0'
    })
  }else if(resultado >= 18.5 && resultado < 25){
    this.setState({
      legenda: 'Normal',
      cor: '#10ac84'
    })
  }else if(resultado >= 25 && resultado < 30){
    this.setState({
      legenda: 'Sobrepeso',
      cor: '#feca57'
    })
  }else if(resultado >= 30 && resultado < 40){
    this.setState({
      legenda: 'Obesidade Leve',
      cor: '#ff9f43'
    })
  }else if(resultado >= 40){
    this.setState({
      legenda: 'Obesidade Grave',
      cor: '#ee5253'
    })
  }
}
  render(){
    return (
      <View style={styles.app}>
        <Text style={styles.titulo}>Seu IMC</Text>
        <View style={[styles.painel, {'backgroundColor': this.state.cor}]}>
          <Text style={styles.valor}>{this.state.imc}</Text>
          <Text style={styles.legenda}>{this.state.legenda}</Text>
        </View>
        <View>
          <TextInput 
            style={styles.peso}
            label='Peso'
            onChangeText={(valor) => {
              this.setState({peso: valor.replace(',', '.')})
            }}
          />
          <TextInput 
            style={styles.altura}
            label='Altura'
            onChangeText={(valor) => {
              this.setState({altura: valor.replace(',', '.')})
            }}/>
          <Button mode={"contained"} onPress={this.calcularImc}>
            Calcular
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    padding: 10
  },
  painel: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    borderRadius: 100
  },
  titulo: {
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10
  },
  valor: {
    textAlign: 'center',
    fontSize: 33,
    fontWeight: 'bold',
    padding:5,
    marginTop: 20
  },
  legenda: {
    textAlign: 'center',
    fontSize: 20,
    padding: 8
  },
  peso: {
    marginVertical: 10
  },
  altura: {
    marginVertical: 10
  }
});
