import React from 'react';
import{View,Text,StyleSheet} from 'react-native';

const IndexScreen = () =>{
    return <View>
    <Text style= {styles.text}>This is the IndexScreen</Text>
    </View>
}

const styles = StyleSheet.create({
    text:{
        color:'red'      
    }
})

export default IndexScreen