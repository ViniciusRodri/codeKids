import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Modal, Alert, Pressable, StyleSheet } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const Idade = () => {
  const tailwind = useTailwind();
  const [modalVisible, setModalVisible] = useState(false);
  const [idade, setIdade] = useState('');

  const handleSelectIdade = (idadeSelecionada: string) => {
    setIdade(idadeSelecionada);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={[tailwind('h-full'), { backgroundColor: '#B8E7FF' }]}>
      <ScrollView contentContainerStyle={tailwind('pt-16 items-center')}>
        <View>
          <Text style={tailwind('font-medium')}>
            Digite sua idade:
          </Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={[tailwind('p-3 m-2 w-72 h-11 items-center rounded-full bg-[#7CC1F4]'), 
		{ 
		shadowColor: '#000000',
		shadowOffset: {
		  width: 0,
		  height: 4,
		},
		shadowOpacity: 0.25,
		elevation: 6,
		} 
		]}>
          <Text style={tailwind('text-white font-medium')}>{idade+' Anos'|| 'Selecione a idade'}</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={tailwind('flex-1 justify-center items-center bg-gray-700 bg-opacity-50')}>
            <View style={tailwind('bg-white p-4 rounded-lg')}>
              {[...Array(16)].map((_, i) => (
                <TouchableOpacity key={i} onPress={() => handleSelectIdade(`${i + 1}`)} >
                  <Text>{i + 1}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
		<Pressable style={[tailwind('m-4 p-3 rounded-lg bg-[#1C54E4] w-24 h-11 items-center'), 
		{ 
		shadowColor: '#000000',
		shadowOffset: {
		  width: 0,
		  height: 4,
		},
		shadowOpacity: 0.25,
		elevation: 6,
		} 
		]} onPress={() => Alert.alert('Fazer salvar')}>
      		<Text style={tailwind('text-white')}>Salvar</Text>
    	</Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Idade;
