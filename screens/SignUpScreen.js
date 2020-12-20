import React from 'react';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text, TouchableOpacity, TextInput,Platform,StyleSheet ,StatusBar} from 'react-native';


export default function SignUpScreen({navigation}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    });

    const textInputChange = (val) => {
        if( val.length == 0 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

  return (

    <View style={styles.container}>
        <View style={styles.header}>
            <StatusBar backgroundColor='#a8c4c7' barStyle="light-content"/>
            <Text style={styles.text_header}>Sign Up</Text>
        </View>

        <Animatable.View style={styles.footer} animation='fadeInUpBig'>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome
                    name="user"
                    color="#36586f"
                    size={20}
                />
                <TextInput
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ?
                    <Animatable.View animation="bounceIn">
                        <Feather
                        name="check-circle"
                        color="#36586f"
                        size={13}
                    />
                    </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer,{
                marginTop: 35
            }]}>Password</Text>

            <View style={styles.action}>
                <FontAwesome
                    name="lock"
                    color="#36586f"
                    size={20}
                />
                <TextInput
                    placeholder="Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity onPress={updateSecureTextEntry}> 
                    {data.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="#36586f"
                            sixe={20}
                        />
                    :
                        <Feather
                            name="eye"
                            color="#36586f"
                            sixe={20}
                        />
                    }
                </TouchableOpacity>
            </View>

            <Text style={[styles.text_footer,{
                marginTop: 35
            }]}>Confirm Password</Text>

            <View style={styles.action}>
                <FontAwesome
                    name="lock"
                    color="#36586f"
                    size={20}
                />
                <TextInput
                    placeholder="Confirm Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity onPress={updateConfirmSecureTextEntry}> 
                    {data.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="#36586f"
                            sixe={20}
                        />
                    :
                        <Feather
                            name="eye"
                            color="#36586f"
                            sixe={20}
                        />
                    }
                </TouchableOpacity>
            </View>

            <View>
                <LinearGradient
                    colors={['#a8c4c7', '#7ea4a6']}
                    style={styles.signIn}
                    marginTop= {35}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>

                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={[
                        styles.signIn, {
                            borderColor: '#a8c4c7',
                            borderWidth: 1,
                            marginTop: 15
                }]}>
                    <Text style={[styles.textSign, {
                        color: '#a8c4c7'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
</View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#a8c4c7'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#36586f',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#36586f',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });