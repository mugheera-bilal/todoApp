import {useState} from 'react';
import React from 'react';
import {StyleSheet, View, FlatList, Button, Text} from 'react-native';
import GoalItem from './components/goalitem';
import GoalInput from './components/GoalInput';

function App(): React.JSX.Element {
  const colors1 = '#3F3C3C';
  const colors2 = '#794439';

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<any[]>([]);
  const [counter, setCounter] = useState<number>(1);

  function startGoalHandler() {
    setModalIsVisible(true);
  }

  function endGoalHandler() {
    setModalIsVisible(false);
  }

  function goalHandler(enteredGoalText: any) {
    // console.log(enteredGoalText)
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
        index: counter,
      },
    ]);
    setCounter(prevCounter => (prevCounter += 1));
    endGoalHandler();
  }

  function deleteInputHandler(id: number) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
    setCounter(prevCounter => (prevCounter -= 1));
  }

  function getColor(index: number) {
    let colordiff;
    if (index % 2 === 0) {
      colordiff = colors1;
    } else {
      colordiff = colors2;
    }
    return colordiff;
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#585858"
        onPress={startGoalHandler}></Button>
      <GoalInput
        showModal={modalIsVisible}
        onAddGoal={goalHandler}
        onCancel={endGoalHandler}
      />
      <View style={styles.goalscontainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                counterIncrement={itemData.index + 1}
                itemColor={getColor(itemData.index)}
                onDeleteItem={deleteInputHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          // windowSize={}
          // initialNumToRender={}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 40,
    justifyContent: 'space-around',
    backgroundColor: '#C5C5C5',
    // alignItems: 'center'
  },

  goalscontainer: {
    flex: 0.75,
    // borderWidth: 1
  },
});

export default App;
