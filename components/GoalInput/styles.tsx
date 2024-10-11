import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    // flex : 1,
    borderWidth: 2,
    borderColor: '#DCDCDC',
    borderRadius: 20,
    width: '75%',
    padding: 10,
    marginRight: 10,
    backgroundColor : 'white'
  },

  appFlex: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    backgroundColor : '#DCDCDC'
  },
  buttonContainer: {
    margin : 10,
    flexDirection: 'row',
  },

  buttonStyles : {
    width : 100 ,
    marginHorizontal : 8,
    
  },
  imageStyle : {
    width : 200,
    height : 200,
    margin : 20,
    borderColor : '#DCDCDC',
    borderWidth: 2,
    borderRadius : 50
  }
});

export default styles;
