import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import { TouchableOpacity } from 'react-native-web';
import FontAwesome5 from '../node_modules/react-native-vector-icons/FontAwesome5';

const Player = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <View style={style.mainContainer}>
          <Text>Player</Text>
        </View>

        <View style={style.bottomarrange}>
          <TouchableOpacity>
            <FontAwesome5 name="soundcloud" size={30} />
          </TouchableOpacity>

          
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Player

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888',
  },

  mainContainer: {
    flex: 2, 
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomarrange: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },


});