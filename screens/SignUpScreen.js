import {View,Text,StyleSheet,TextInput, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from "react";


import{
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
} from "@expo-google-fonts/montserrat"
import{
    JosefinSans_400Regular,
    JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans"
//import AppLoading from 'expo-app-loading';

const SignUpScreen=({navigation})=>{
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    //console.log(userName,password);
    const[agree,setAgree]=useState(false);

    const submit=()=>{
        const emailIsValid = userName.includes('@');
        const passwordIsValid = password.length > 6;
        const passwordsAreEqual = password === confirmPassword;
        if (
            !emailIsValid ||
            !passwordIsValid ||
            !passwordsAreEqual
          ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
          }
       else{
            navigation.navigate("Login");
        }
    }

    let [fontLoaded,error]=useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        bold: Montserrat_700Bold,
        regular: JosefinSans_400Regular,
        JosefinSans_500Medium
    });

  //  if(!fontLoaded){
    //    return <AppLoading/>;
    //}

    return(
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Sign Up Form</Text>
            
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter email</Text>
                <TextInput style={styles.inputStyle} 
                    autoCapitalize="none" 
                    autoCorrect={false}
                    value={userName}
                    onChangeText={(actualData)=>setUserName(actualData)}
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter password</Text>
                <TextInput style={styles.inputStyle} 
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(actualData)=>setPassword(actualData)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Confirm password</Text>
                <TextInput style={styles.inputStyle} 
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={(actualData)=>setConfirmPassword(actualData)}
                />
            </View>

                <TouchableOpacity style={styles.buttonStyle}
                    onPress={()=>submit() }
                >
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            
        </View>
    );
}
export default SignUpScreen;

const styles=StyleSheet.create({
    mainContainer:{
        height:"100%",
        paddingHorizontal:30,
        paddingTop:30,
        backgroundColor:"#fff"
    },
    mainHeader:{
        fontSize:25,
        color:"#344055",
        fontWeight:"500",
        paddingTop:20,
        paddingBottom:15,
        textTransform:"capitalize",
       // fontFamily:"bold",
    },
    inputContainer:{
        marginTop:20,
    },
    labels:{
        fontSize:18,
        color:"#7d7d7d",
        marginTop:10,
        marginBottom:5,
        lineHeight:25,
      //  fontFamily:"regular",
    },
    inputStyle:{
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.3)",
        paddingHorizontal:15,
        paddingVertical:7,
        borderRadius:1,
      //  fontFamily:"regular",
        fontSize:18,
    },
    wrapper:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:15,
    },
    wrapperText:{
        marginLeft:10,
       // fontFamily:"regular",
        fontSize:16,
    },
    buttonStyle:{
        marginTop:30,
        padding:15,
        borderRadius:5,
        alignItems:"center",
        backgroundColor:"#4630EB"
    },
    buttonText:{
        color:"#fff",
        fontSize:18,
        fontWeight:"bold",
    }
})
