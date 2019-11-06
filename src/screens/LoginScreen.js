import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Input,
  Text,
  Icon,
  Button,
  Spinner
} from 'react-native-ui-kitten';
import FormSection from '../components/FormSection';
import { connect } from 'react-redux';
import { tryLogin } from '../actions/user';


class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this._handleInputChange = this._handleInputChange.bind(this)
    this._handleLoginButtonPress = this._handleLoginButtonPress.bind(this)    
    this.state = {
      loading: false,
      message: '',
      err: false,
      showPass: false,
      email: '',
      pass: ''
    }

    this._handleLoginButtonPress = this._handleLoginButtonPress.bind(this)
  }

  componentDidMount(){

  }

  _handleInputChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  _handleLoginButtonPress(){
    const {email, pass} = this.state
    const { tryLogin } = this.props
    tryLogin(email, pass)
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

  renderLoginButton(){
    if (this.state.loading)
      return (
        <Layout style={[styles.centered, styles.row]}>
          <Spinner />
          <Text style={{ marginLeft: 10 }}>Aguarde...</Text>
        </Layout>
      )

    return (
      <Button
          style={styles.marginBottom}
          size='giant' 
          onPress={this._handleLoginButtonPress}>
          Fazer login
      </Button>)
  }

  renderMessage(){
    const { message, err } = this.state;

    if (this.state.message)
      return (
        <Layout style={[styles.centered, styles.marginBottom]}>
          { err
              ?<Text style={[styles.statusMessage]} status='danger'>{ message }</Text>
              :<Text style={[styles.statusMessage]} status='success'>{ message }</Text>
          }
        </Layout>
      )

    return null;
  }

  render(){
    return (
      <Layout style={styles.container}>
          <FormSection style={styles.header} flex={2}>
            <Text style={styles.text} category="h4">Entre com sua conta</Text>
          </FormSection>
          <FormSection flex={3}>
            <Input
                style={styles.marginBottom}
                placeholder='joao@gmail.com'
                value={this.state.email}
                onChangeText={value => this._handleInputChange('email', value)}
            />
            <Input
                style={styles.marginBottom}
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
          <FormSection flex={3}>
            { this.renderLoginButton() }
            { this.renderMessage() }
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
  marginBottom: {
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    color: 'white'
  },
  row: {
    flexDirection: 'row'
  },
  centered: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  statusMessage: {
    textAlign: 'center'
  }
});

const mapStateToProps = (state) => ({
  statusMessage: state.statusMessage
})

export default connect(null, { tryLogin })(LoginScreen)