import React from "react";
import { StyleSheet, Text, View } from "react-native-web";

function App() {
  return (
    <View style={styles.container}>
        <Text>Editame en src/App.jsx</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
