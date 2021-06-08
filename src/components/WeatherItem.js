import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WeatherItem = props => {
  const { item } = props;
  const navigation = useNavigation();
  const temp = Math.trunc(item.main.temp);

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
      }}
      onPress={() =>
        navigation.navigate('ViewWeather', {
          item,
        })
      }>
      <View>
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
        <Text>{item.weather[0].description}</Text>
      </View>
      <Text style={{ fontSize: 25 }}> {` ${temp}° c `}</Text>
    </TouchableOpacity>
  );
};

export default WeatherItem;
