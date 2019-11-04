import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Input,
  Text,
  Icon,
  Button
} from 'react-native-ui-kitten';
import * as firebase from "firebase/app";
import "firebase/auth";
import FormSection from '../components/FormSection';
import firebaseAuth from '../utils/firebase';

class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showPass: false,
      email: '',
      pass: ''
    }
  }

  componentDidMount(){

  }

  _handleInputChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  handleViewPassIconClick = () => {
    const showPass = !this.state.showPass;
    this.setState({ showPass });
  };

  renderViewPassIcon = (style) => {
    const iconName = this.state.showPass ? 'eye': 'eye-off';
    return (
      <Icon {...style} name={iconName}/>
    );
  };

  render(){
    return (
      <Layout style={styles.container}>
          <FormSection style={styles.header}>
            <Text style={styles.text} category="h4">Entre com sua conta</Text>
          </FormSection>
          <FormSection flex={2}>
            <Input
                style={styles.input}
                placeholder='joao@gmail.com'
                value={this.state.email}
                onChangeText={value => this._handleInputChange('email', value)}
            />
            <Input
                style={styles.input}
                placeholder='senha'
                icon={this.renderViewPassIcon}
                onIconPress={this.handleViewPassIconClick}
                secureTextEntry={!this.state.showPass}
                value={this.state.pass}
                onChangeText={value => this._handleInputChange('pass', value)}
            />
            <Layout style={{flexDirection: 'row'}}>
              <Layout style={{flex: 1}} />
              <Button appearance='ghost' status='warning'>Esqueceu sua senha?</Button>
            </Layout>
          </FormSection>
          <FormSection>
            <Button style={styles.button} size='giant'>Fazer login</Button>
            <Button style={styles.button} size='giant' appearance='ghost'>Ainda não tem conta?</Button>
          </FormSection>
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#5802a8'
  },
  input: {
    marginBottom: 10
  },
  button: {
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    color: 'white'
  }
});

export default LoginScreen