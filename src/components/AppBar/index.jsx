import { View, StyleSheet, ScrollView } from 'react-native';
import useUserInfo from '../../hooks/useUserInfo';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24292e",
  },
  scrollContainer: {
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const { data, signOut } = useUserInfo()
  const currentUser = data?.me;

  return (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer} horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        {currentUser ? (
          <>
            <AppBarTab to='/review'>Create a review</AppBarTab>
            <AppBarTab to='/userreview'>My reviews</AppBarTab>
            <AppBarTab onPress={signOut}>Sign out</AppBarTab>
          </>
        ) : (
          <>
            <AppBarTab to="/signin">Sign in</AppBarTab>
            <AppBarTab to="/signup">Sign up</AppBarTab>
          </>
        )}
    </ScrollView>
  </View>
  )
};

export default AppBar;