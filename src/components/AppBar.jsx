import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Subheading from './Subheading';
import { Link } from "react-router-native";


const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    paddingBottom: 10,
    paddingLeft: 5,
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  gap: {
    paddingHorizontal: 10
  }

  
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer} horizontal>
      <Pressable >
        <Link to="/">
            <Subheading style={styles.gap}>Repositories</Subheading>
        </Link>
      </Pressable>
      <Pressable >
        <Link to="/signin">
            <Subheading style={styles.gap}>Sign In</Subheading>
          </Link>
      </Pressable>
    </ScrollView>
  </View>
  )
};

export default AppBar;