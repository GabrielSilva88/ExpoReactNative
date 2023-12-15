import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Pessoa from './src/Pessoas';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [
        { id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' },
        { id: '2', nome: 'Miguel', idade: 5, email: 'miguel@miguel.com' },
        { id: '3', nome: 'Gabriel', idade: 10, email: 'gabriel@gabriel.com' },
        { id: '4', nome: 'Silva', idade: 15, email: 'silva@silva.com' }
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.lista}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Pessoa data={item} />}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;


/**
  
 <======== ending of code =============> 
 21. SCROLLVIEW
  import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
    width:150
  },
  box2: {
    backgroundColor: 'green',
    height: 250,
    width:150
  },
  box3: {
    backgroundColor: 'yellow',
    height: 250,
    width:150
  },
  box4: {
    backgroundColor: 'blue',
    height: 250,
    width:150
  }

})

export default App;
 
<======== ending of code =============>

    *** 22. FLATLIST.

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' },
        { id: '2', nome: 'Miguel', idade: 5, email: 'miguel@miguel.com' },
        { id: '3', nome: 'Gabriel', idade: 10, email: 'gabriel@gabriel.com' },
        { id: '4', nome: 'Silva', idade: 15, email: 'silva@silva.com' },
        { id: '5', nome: 'da', idade: 5, email: 'da@da.com' },
        { id: '6', nome: 'Gonçalves', idade: 10, email: 'gonçalves@gonçalves.com' },
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Pessoa data={item} />}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaPessoa: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  },
  textoPessoa: {
    color: '#fff',
    fontSize: 20
  }

})

export default App;

class Pessoa extends Component {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome:
          {this.props.data.nome}
        </Text>
        <Text style={styles.textoPessoa}>Idade:
          {this.props.data.idade}
        </Text>
        <Text style={styles.textoPessoa}>E-mail:
          {this.props.data.email}
        </Text>

      </View >
    );
  }
}
<================ 22. DIVIDINDO COMPONENTE ===========================>
  SRC/PESSOA/INDEX.JS

  import React, { Component } from "react";
import { View, Text, StyleSheet, } from "react-native";

class Pessoa extends Component {
    render() {
        return (
            <View style={styles.areaPessoa}>
                <Text style={styles.textoPessoa}>
                    Nome:{this.props.data.nome}
                </Text>
                <Text style={styles.textoPessoa}>
                    Idade: {this.props.data.idade}
                </Text>
                <Text style={styles.textoPessoa}>
                    E-mail: {this.props.data.email}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaPessoa: {
        backgroundColor: '#222',
        height: 200,
        marginBottom: 15,
        padding:15
    },
    textoPessoa: {
        color: '#fff'
    }
});

export default Pessoa;

============================ 23

import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Pessoa from './src/Pessoas';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [
        { id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' },
        { id: '2', nome: 'Miguel', idade: 5, email: 'miguel@miguel.com' },
        { id: '3', nome: 'Gabriel', idade: 10, email: 'gabriel@gabriel.com' },
        { id: '4', nome: 'Silva', idade: 15, email: 'silva@silva.com' }
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.lista}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Pessoa data={item} />}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;


*/