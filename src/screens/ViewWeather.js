import React, {useEffect} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import PushNotification from 'react-native-push-notification';
import {CURRENT_WEATHER, WEATHER_KEY} from '../../config';
import Geolocation from 'react-native-geolocation-service';

const ViewWeather = props => {
  const {item} = props.route.params;

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        fetch(
          `${CURRENT_WEATHER}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${WEATHER_KEY}`,
        )
          .then(response => response.json())
          .then(data => showWeather(data));
      },
      error => {},
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  const showWeather = data => {
    const currentTemp = Math.round(data.main.temp);
    PushNotification.localNotification({
      largeIconUrl:
        'https://www.freeiconspng.com/uploads/weather-icon-png-16.png',
      channelId: 'weather',
      title: `Current Temrature ${currentTemp}°c`,
      message: ` ${data.weather[0].main}`,
      timeoutAfter: 15000,
      shortcutId: 'noID',
    });
  };
  let min = Math.round(item.main.temp_min);
  let max = Math.round(item.main.temp_max);
  let temp = Math.round(item.main.temp);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 5}}>
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: item.coord.lat,
            longitude: item.coord.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{latitude: item.coord.lat, longitude: item.coord.lon}}
            title={item.name}
          />
        </MapView>
      </View>
      <View style={{flex: 2, flexDirection: 'row', backgroundColor: '#fff'}}>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.name}</Text>
          <Text style={styles.h2}>{item.weather[0].description}</Text>
          <Text style={styles.h2}>{`Humidity : ${item.main.humidity}`}</Text>
          <Text style={styles.h2}>{`Wind Speed : ${item.wind.speed}`}</Text>
          <Text style={styles.h2}>{`Max. Temp : ${max}°c`}</Text>
          <Text style={styles.h2}>{`Min. Temp : ${min}°c`}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20}}>{`${temp}°c`}</Text>
          <Image
            style={{height: 100, width: 100}}
            source={require('../assets/sun.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default ViewWeather;

const styles = StyleSheet.create({
  h2: {
    marginVertical: 3,
    fontFamily: 'Roboto',
  },
});
