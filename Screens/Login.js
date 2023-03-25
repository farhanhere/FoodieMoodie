import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity,Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import logo from '../assets/logo.png'

const Login = ({ navigation }) => {

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  const goToHome = () => {
    navigation.navigate('Home');
  };


  return (

    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Image style={styles.foodie} source={logo}/>
   


      <View style={styles.emailContainer}>
        <AntDesign name='mail' style={styles.icon} />
        <TextInput style={styles.textinput} placeholder="E-mail" ></TextInput>
      </View>
      <View style={styles.passwordcontainer}>
        <AntDesign name='lock' style={styles.icon} />
        <TextInput style={styles.textinput} secureTextEntry={true} placeholder="Password"></TextInput>
      </View>

      <TouchableOpacity><Text style={styles.forget}>Forget password?</Text></TouchableOpacity>

      <TouchableOpacity style={styles.Login}  onPress={goToHome} >
        <View style={styles.LoginButton}>
          <Text style={styles.Logintext}>Login</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Loginwith}>
        <View style={styles.LoginwithButton}>
          <Text style={styles.Loginwithtext}>or Login with</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToSignup}><Text style={styles.new}>New on foodie moodie? Sign up</Text></TouchableOpacity>

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
  welcome: {
    fontSize: 45,
    marginTop: 70,
    marginLeft: 15,
    fontWeight: 'bold'
  },
  foodie: {
    width:300,
    height:60,
    marginLeft:50,
    marginTop:20
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    height: 50,
    backgroundColor: "#fff",
    marginLeft: 30,
    marginTop: 70,
    paddingLeft: 10,
    borderRadius: 10
  },
  passwordcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    height: 50,
    backgroundColor: "#fff",
    marginLeft: 30,
    marginTop: 30,
    paddingLeft: 10,
    borderRadius: 10
  },
  textinput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 15
  },
  icon:
  {
    color: 'black',
    padding: 10,
    fontSize: 25,
    marginLeft: 5,
  },
  forget: {
    marginLeft: 245,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'grey'
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
  new: {
    marginLeft: 100,
    marginTop: 230,
    fontWeight: 'bold',
    color: 'grey'
  }
});


export {Login};