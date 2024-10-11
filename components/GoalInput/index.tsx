import {useState} from 'react';
import {View, TextInput, Button, Modal , Image} from 'react-native';
import styles from './styles';

function GoalInput(props: any) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  function inputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
    // console.log(enteredText)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.showModal} animationType='slide' >
      <View style={styles.appFlex}>
        <Image 
        style = {styles.imageStyle} 
        source = {require('../../assets/images/goalLogo.jpg')}/>
        <TextInput
          style={styles.textInput}
          placeholder="what are your goals!!"
          onChangeText={inputHandler}
          value={enteredGoalText}></TextInput>
        <View style={styles.buttonContainer}>
          <View style = {styles.buttonStyles}>
            <Button title="Add Goal!!" onPress={addGoalHandler} color = "#7E7E7E"></Button>
          </View>
          <View style = {styles.buttonStyles}>
            <Button title="Cancel" onPress={props.onCancel} color = "#B4B2B2" ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
