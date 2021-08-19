import React from 'react'
import { View } from 'react-native'

const gpio = () => {
    return (
        <View>
            onPress={fetch('http://192.168.1.123:3000/login')}
        </View>
    )
}

export default gpio
