import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './InputCard.styles';


const InputCard = (props) => {
    return(
       <View style={{ flexDirection: 'row',justifyContent:'center',marginBottom: 40, alignItems: 'center'}}>
           <View style={styles.container}>
               <TextInput
                   style={styles.input}
                   value={props.input}
                   placeholder="To Do List..."
                   onChangeText={props.onChangeInput}
               />
           </View>
           <View>
               <TouchableOpacity style={styles.button} onPress={props.onPress}>
                   <Text style={styles.buttonText}>Save</Text>
               </TouchableOpacity>
           </View>
       </View>

    );
};

export default InputCard;
