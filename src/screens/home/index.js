import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Container, Header } from '@src/components';
import SearchInput from '@src/components/searchInput';

export default function Home() {
  return (
    <View>
      <Header />
      <Container>
        <View style={styles.search_area}>
          <SearchInput />
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  search_area: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
