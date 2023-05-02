import { View, Text, SafeAreaView, StatusBar, StyleSheet, Platform, Pressable } from 'react-native';
import React from 'react';
import Background from './background';
import { useTailwind } from 'tailwind-rn/dist';

const Home = () => {
  const style = useTailwind();

  return (
    <View style={styles.top}>
      <SafeAreaView style={styles.container}>
          <Text style={styles.text}>
          olá, estou feliz que você esteja conosco.
          </Text>
          <Pressable style={styles.pressable} onPress={() => { console.log('Você pressionou o botão!');}}>
            <Text style={styles.button}>Começar</Text>
          </Pressable>
          <Background></Background>
          
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 1,
    backgroundColor: '#B8E7FF'
  },
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  view: {
    flex: 1
  },
  text: {
    //fontFamily: "Itim",
    flex: 1,
    width: 275,
    height: 51,
    top: 124,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing:  -0.00022,
    textTransform: 'capitalize',
    color: '#000000',
    alignSelf: 'center'
  },
  pressable: {
    height: 43,
    width: 95,
    marginBottom: 300,
    backgroundColor: '#1C54E4',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    shadowColor: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 10
  },
  button: {
    color: 'white',
    fontSize: 12,
    alignSelf: 'center'
  },
});

export default Home;
