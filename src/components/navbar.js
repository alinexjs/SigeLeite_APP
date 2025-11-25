import { StyleSheet, View, Image } from "react-native";
import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform } from "react-native";
import Logo from "../../assets/logo.png";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Navbar = () => (
  <View style={styles.shadowWrapper}>
    <Appbar.Header>
      <View style={styles.logoContainer}>
        <Image
          source={Logo}
          style={styles.logo}
        />
        <Appbar.Content 
          title="SigeLeite"
          titleStyle={styles.title}
        />
      </View>

      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
  </View>
);

const styles = StyleSheet.create({
  shadowWrapper: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 6, 
  },

  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#8C8C8C",
  },
});

export default Navbar;
