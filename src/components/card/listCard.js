import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

export default function ListCard({ item }) {
  return (
    <ImageBackground
      style={styles.contain}
      source={{ uri: item?.photo }}
      resizeMode="cover">
      <View style={styles.bottom}>
        <Text style={styles.title}>{item?.name}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  contain: {
    borderWidth: 1,
    height: 200,
    width: 160,
    position: 'relative',
    marginBottom: 20,
    marginHorizontal: 10 // duzenlenecek
  },
  bottom: {
    backgroundColor: '#00000080',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 18
  }
});
