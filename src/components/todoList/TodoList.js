import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './TodoList.styles';

const TodoList = (props) => {
    return (
        <View>
                <TouchableOpacity onPress={props.onPress} style={props.click ? styles.changeColorContainer : styles.listContainer} id={props.index}>
                   <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                       <Text style={props.click ? styles.textLine : styles.text}>{props.todoList}</Text>
                       <TouchableOpacity onPress={props.handleDeleteItem}>
                           <Image source={require('../../../assets/icon/trashIcon.png')} style={styles.icon} />
                       </TouchableOpacity>
                   </View>
                </TouchableOpacity>

        </View>
    );
};

export default TodoList;
