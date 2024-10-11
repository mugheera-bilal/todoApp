import {View, Text, Pressable} from 'react-native';
import styles from './styles';

function GoalItem(props: any) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{color: 'white'}}
        onPress={props.onDeleteItem.bind(null, props.id)}>
        <View style={[styles.goalItems, {backgroundColor: props.itemColor}]}>
          <Text style={styles.goalText}>
            {props.counterIncrement} - {props.text}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
export default GoalItem;
