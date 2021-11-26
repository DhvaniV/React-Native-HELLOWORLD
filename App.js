import React , {useState} from 'react';
import{StyleSheet , Text , View, TextInput, Button} from 'react-native';

export default function App(){
  const [name, setName] = useState('Dhvani');
  const clickhandler = () => {
    setName = ('Tatvasoft');

  };
  return(
    <View style={styles.container}>
      <Text>Enter Name</Text>
      <TextInput
      style={styles.input}
      placeholder = 'e.g. ram narayan'/>
      <Text>My Name is {name}</Text>
      <Button style = {styles.button}  title = 'Update' onPress = {clickhandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    borderWidth: 2,
    padding: 4,
    margin: 6,
    backgroundColor: '#777'
  },
  button: {
    marginTop: 20
  }
});