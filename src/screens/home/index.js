import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { Container, Header } from '@src/components';
import SearchInput from '@src/components/searchInput';
import { useDispatch, useSelector } from 'react-redux';
import { getContentAction } from '@src/redux/actions/content/contentAction';
import { ContentList } from '@src/views';

export default function Home() {
  const [searchKey, setSearchKey] = React.useState('');
  const dispatch = useDispatch();
  const { contentData } = useSelector((state) => state.content);

  useEffect(() => {
    const params = {
      q: searchKey
    };
    dispatch(getContentAction(params));
  }, [searchKey]);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Container>
        <View style={styles.search_area}>
          <SearchInput onChangeText={setSearchKey} value={searchKey} />
        </View>
        {contentData?.length > 0 && <ContentList data={contentData} />}
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  search_area: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  }
});
