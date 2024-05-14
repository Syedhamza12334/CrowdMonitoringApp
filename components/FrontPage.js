import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Alert,
    Image,
    Pressable,
    TextInput,
    Button,
    ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const FrontPage = ({ navigation }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const handlelogo = () => {
		navigation.navigate("HomeScreen");
	};
    return (
      
        <View style={styles.container}>
              <Pressable onPress={handlelogo}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/t2.jpg")}
          style={styles.image}
        />
      </View>
      </Pressable>
    </View>
    

    );
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87E1ED",
  
  },
  imageContainer: {
    width: 200,
    height: 300,
    backgroundColor:  "#87E1ED",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 500,
    height: 650,
    resizeMode: "contain",
    backgroundColor: "#87E1ED",
    opacity: 1.5,
  },

})
export default FrontPage;


