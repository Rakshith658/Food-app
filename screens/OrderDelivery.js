import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import MapView,{PROVIDER_GOOGLE,Marker}from 'react-native-maps'
import{}from 'react-native-maps-directions'

const OrderDelivery = () => {

    const rendermap=()=>{
        return(
            <View style={{flex:1}}>
                <MapView
                    
                >

                </MapView>
            </View>
        )
    }
    return (
        <View style={{flex:1,marginTop:25}}>
            {rendermap()}
        </View>
    )
}

export default OrderDelivery

const styles = StyleSheet.create({})
