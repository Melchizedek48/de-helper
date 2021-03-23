import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Title, List } from "react-native-paper";

const HouseScreen = () => {
  return (
    // <View style={styles.container}>
    //   <Title>Yays! More rules to come!</Title>
    //   <Text>Lala</Text>
    // </View>
    <View style={styles.container}>
      <List.Item title="No Food & Drinks In The Room" />
      <List.Item title="No Smoking" />
      <List.Item title="No Foul Language" />
      <List.Item
        title="Treatment of Guests"
        description="Be polite and welcoming. Always initiate the greeting with a smile and offer them a choice of drinks."
      />
      <List.Item title="Be at home before 8pm during your off-day" />
    </View>
  );
};

export default HouseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
});
