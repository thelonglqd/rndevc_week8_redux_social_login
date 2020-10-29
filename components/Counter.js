import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { connect } from "react-redux";

const Counter = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{props.count}</Text>
      <Button
        title="Increment"
        onPress={() => props.dispatch({ type: "INCREMENT" })}
      />
      <Button
        title="Decrement"
        onPress={() => props.dispatch({ type: "DECREMENT" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);
