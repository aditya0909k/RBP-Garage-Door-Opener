import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './style';

const index = (props) => {
    console.log(props)
    let content;
    if (props.color==='red')
    {
        content = (
            <View style={styles.button}>
                <Image source={require('../../assets/garagered.png')}
                    style={{width: 150, height: 150}}
                />
            </View>
        )
    }
    else if (props.color==='green')
    {
        content = (
            <View style={styles.button}>
               <Image source={require('../../assets/garagegreen.png')}
                   style={{width: 150, height: 150, marginRight: 30}}
               />
            </View>
        )
    }
    else
        return;
    return <TouchableOpacity onPress={()=>{props.event()}}>{content}</TouchableOpacity>
};

export default index;
