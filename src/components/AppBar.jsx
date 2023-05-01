import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Subheading from './Subheading';
import { Link } from "react-router-native";
import useUserInfo from '../hooks/useUserInfo';

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
  const { data, loading, signOut } = useUserInfo()
  
  return (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer} horizontal>
        <Link to="/">
            <Subheading style={styles.gap}>Repositories</Subheading>
        </Link>
        {!loading && data.me ? 
        <Link to="/signin">
          <Subheading onPress={signOut} style={styles.gap}>Sign Out</Subheading>
        </Link> :
        <Link to="/signin">
          <Subheading style={styles.gap}>Sign In</Subheading>
      </Link> }
    </ScrollView>
  </View>
  )
};

export default AppBar;