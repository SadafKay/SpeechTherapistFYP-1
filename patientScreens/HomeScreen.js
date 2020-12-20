import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  Avatar
} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';

import eleImage from '../images/elephant.png';

import {SwipeListView} from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BookedAppointments from '../models/AvailableDoctors';
import DetailsScreen from './DetailsScreen';

const HomeScreen = ({navigation}) => {

    const [listData, setListData] = useState(
        BookedAppointments.map((BookedAppointmentsItem, index) => ({
          key: `${index}`,
          day: BookedAppointmentsItem.day,
          month: BookedAppointmentsItem.month,
          time: BookedAppointmentsItem.time,
          id: BookedAppointmentsItem.patientID,
          name: BookedAppointmentsItem.patientName,
          image: BookedAppointmentsItem.image
        })),
      );
        
      const VisibleItem = props => {
        const { data } = props;
        return (
            <View style={styles.rowFront} >
                <TouchableHighlight
                  style={styles.rowFrontVisible}
                  underlayColor={'#aaa'}
                  >
                <View flexDirection='row'>
                    <View alignItems='center' >
                    <Avatar.Image 
            source={eleImage}
            size={65}
          />
                    </View>
                    <View justifyContent='center' marginLeft={30}>
                        <Text style={styles.patientTitle}>Doctor Name: </Text>
                    </View>
                    <View justifyContent='center' marginLeft={20} alignItems='center'>
                        <Text style={styles.patientDetails}>Dr. {data.item.name}</Text>
                    </View>
                    <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                >
                    <LinearGradient
                        colors={['#a8c4c7', '#7ea4a6']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Sign In</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[
                        styles.signIn, {
                            borderColor: '#a8c4c7',
                            borderWidth: 1,
                            marginTop: 15
                }]}>
                    <Text style={[styles.textSign, {
                        color: '#a8c4c7'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
                </View>
                </TouchableHighlight>
                </View>
            );
            
      };

      const renderItem = (data, rowMap) => {
        return (
          <VisibleItem data={data} />
        );
      };


    return (
        <View style={styles.container} marginTop={40}>
          <StatusBar barStyle="dark-content"/>
          <SwipeListView
            data={listData}
            renderItem={renderItem}
          />
        </View>
      );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        flex: 1,
      },
      text_header: {
        marginBottom: 20,
        color: '#36586f',
        fontWeight: 'bold',
        fontSize: 30
    },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 90,
    margin: 5,
    marginBottom: 15,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: 385, height: 90
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 90,
    padding: 10,
    marginBottom: 15,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
    width: 385, height: 90
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#a8c4c7',
    right: 74,
  },
  backRightBtnRight: {
    backgroundColor: '#c79840',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  day: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#a8c4c7',
    marginLeft: 10
  },
  time: {
    fontSize: 13,
    color: '#999',
  },
  patientTitle:{
      fontSize: 14,
      color: '#999',
  },
  patientTitle:{
    fontSize: 14,
    color: '#999',
  },
  patientDetails:{
    fontSize: 14,
    color: '#36586f',
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
    fontSize: 8,
    fontWeight: 'bold'
}
});