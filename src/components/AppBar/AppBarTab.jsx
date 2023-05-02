import { View, StyleSheet, Pressable } from "react-native"
import Constants from 'expo-constants';
import { Link } from "react-router-native"
import Subheading from "../Subheading";

const styles = StyleSheet.create({
    container: {
      display: "flex",
      paddingTop: Constants.statusBarHeight,
      paddingBottom: 10,
      paddingLeft: 5,
    },
    gap: {
      paddingHorizontal: 10
    }
  });

const AppBarTab = ({ children, to, ...props }) => {
    const content = (
        <View style={styles.container} {...props}>
        <Subheading  style={styles.gap}>
            {children}
        </Subheading>
        </View>
    );

    return to ? (
        <Link to={to} {...props}>
        {content}
        </Link>
    ) : (
        <Pressable {...props}>{content}</Pressable>
    );
};

export default AppBarTab