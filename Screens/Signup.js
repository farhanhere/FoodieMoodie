import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const Signup = ({ navigation }) => {

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (

    <View style={styles.container}>
      <Text style={styles.text1}>Email</Text>
      <TextInput style={styles.fields} placeholder="E-mail" ></TextInput>
      <Text style={styles.texts}>Name</Text>
      <TextInput style={styles.fields} placeholder="Full Name" ></TextInput>
      <Text style={styles.texts}>Password</Text>
      <TextInput style={styles.fields} placeholder="Create Password" ></TextInput>
      <Text style={styles.texts}>Confirm Password</Text>
      <TextInput style={styles.fields} placeholder="Confirm Password" ></TextInput>
    <Text style={styles.termstext}>I accept the Terms of Use & Privacy Policy</Text>
    <TouchableOpacity style={styles.Login}  >
        <View style={styles.LoginButton}>
          <Text style={styles.Logintext}>Create Account</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Loginwith}>
        <View style={styles.LoginwithButton}>
          <Text style={styles.Loginwithtext}>or Signup with</Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={goToLogin}><Text style={styles.already}>Already on foodie moodie? Sign up</Text></TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    // alignItems: 'center',
    //justifyContent: 'center',
  },
  fields: {
    width: 330,
    height: 50,
    backgroundColor: "#fff",
    marginLeft: 30,
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 10,

  },
  text1: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 15,
    fontWeight: 'bold'
  },
  texts: {
    marginTop: 10,
    marginLeft: 30,
    fontSize: 15,
    fontWeight: 'bold'
  },
  termstext:{
    fontWeight:'600',
    marginTop:20,
    marginLeft:70,
  },
  Login: {
    width: 330,
    height: 50,
    marginLeft: 30,
    marginTop: 20,
  },
  LoginButton: {
    flex: 1,
    backgroundColor: '#F55050',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  Logintext: {
    color: '#fff',
    fontSize: 18,
  },
  Loginwith: {
    width: 330,
    height: 50,
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',

  },
  LoginwithButton: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  Loginwithtext: {
    color: 'grey',
    fontSize: 18,
  },
  already: {
    marginLeft: 90,
    marginTop: 180,
    fontWeight: 'bold',
    color: 'grey'
  }
});


export {Signup};