import { View, Text, FlatList } from 'react-native';
import React from 'react';
import FavoriteCard from '@src/components/card/favoriteCard';

export default function FavoritesList() {
  return (
    <View>
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
    </View>
  );
}
