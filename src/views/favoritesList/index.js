import { View, Text, FlatList } from 'react-native';
import React from 'react';
import FavoriteCard from '@src/components/card/favoriteCard';
import { useSelector } from 'react-redux';

export default function FavoritesList() {
  const { favoriteItems } = useSelector((state) => state.favorites);

  return (
    <View>
      <FlatList
        numColumns={2}
        data={favoriteItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <FavoriteCard key={index} item={item} />
        )}
      />
    </View>
  );
}
