import React, { useEffect } from 'react';
import { StatusBar, View, FlatList } from 'react-native';
import { API } from '../../config';
import { useDispatch, useSelector } from 'react-redux';
import { addlist } from '../redux/reducer';

import WeatherItem from '../components/WeatherItem';

const Weather = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor('#00804A');
    getCities();
  }, []);

  const dispatch = useDispatch();

  const getCities = () => {
    fetch(API)
      .then(response => response.json())
      .then(data => dispatch(addlist(data.list)));
  };

  const listItems = useSelector(state => state.weatherList);

  const renderItem = ({ item }) => <WeatherItem item={item} />;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={listItems}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#d3d3d3',
            }}
          />
        )}
        style={{ flex: 1 }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Weather;
