import {
  Text,
  TextInput,
  Animated,
  View,
  TouchableWithoutFeedback,
  Image,
  Keyboard
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

export default SearchInput = ({ onChangeText, value, setSearchKey }) => {
  const [keyboardStatus, setKeyboardStatus] = useState('');
  const inputWidth = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
      Animated.timing(inputWidth, {
        toValue: 300,
        duration: 400,
        useNativeDriver: false
      }).start();
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
      Animated.timing(inputWidth, {
        toValue: 200,
        duration: 400,
        useNativeDriver: false
      }).start();
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback
      style={{ backgroundColor: 'green' }}
      onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, marginTop: 40 }}>
        <Animated.View
          style={{
            width: inputWidth,
            height: 40,
            flexDirection: 'row',
            borderWidth: keyboardStatus === 'Keyboard Shown' ? 1 : 0,
            borderColor: 'red',
            borderRadius: 6,
            overflow: 'hidden'
          }}>
          <View
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 6
            }}>
            {/* <Image
              style={{ width: 15, height: 15 }}
              resizeMode="contain"
              source={require('../../../assets/icons/searchIcon.png')}
            /> */}
          </View>
          <TextInput
            onBlur={() => Keyboard.dismiss()}
            placeholder="Search"
            style={{
              flex: 1,
              paddingVertical: 8,
              paddingHorizontal: 6,
              backgroundColor: 'white',

              fontSize: 16
            }}
            onSubmitEditing={Keyboard.dismiss}
            autoCapitalize="none"
            onChangeText={onChangeText}
            value={value}
          />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};
