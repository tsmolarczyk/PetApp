import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import GradientWrapper from "../components/GradientWrapper";

const MapViewComponent = ({ route }) => {
  const { dog } = route.params;

  return (
    <GradientWrapper>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 50.2649,
            longitude: 19.0238,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title={`${dog.name}'s Last Known Location`}
            description={`Last seen near ${dog.lostLocation}`}
          />
        </MapView>
      </View>
    </GradientWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default MapViewComponent;
