import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Layout,
  Input,
  Text,
  Icon,
  Button
} from 'react-native-ui-kitten'
import FormSection from '../components/FormSection'
import LoadingIndicator from '../components/LoadingIndicator'
import { connect } from 'react-redux'
import { tryLogin } from '../actions/user'
import defaultStyle from '../styles/default'
import StatusMessageDisplay from '../components/StatusMessageDisplay'

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
    const { loading } = this.props
    return (
      loading
      ? null
      : (
        <Button
            style={ defaultStyle.marginBottom }
            size='giant' 
            onPress={ this._handleLoginButtonPress }>
            Fazer login
        </Button>
      )
    )
  }



  render(){
    return (
      <Layout style={styles.container}>
          <FormSection style={styles.header} flex={2}>
            <Text style={[defaultStyle.centered, styles.headerTitle]} category="h4">Entre com sua conta</Text>
          </FormSection>
          <FormSection flex={4}>
            <Input
                style={ defaultStyle.marginBottom }
                placeholder='joao@gmail.com'
                value={this.state.email}
                onChangeText={value => this._handleInputChange('email', value)}
            />
            <Input
                style={ defaultStyle.marginBottom }
                placeholder='senha'
                icon={this.renderViewPassIcon}
                onIconPress={ this.handleViewPassIconClick }
                secureTextEntry={ !this.state.showPass }
                value={this.state.pass}
                onChangeText={value => this._handleInputChange('pass', value)}
            />
            <Layout style={ defaultStyle.row }>
              <Layout style={{flex: 1}} />
              <Button appearance='ghost' status='warning'>Esqueceu sua senha?</Button>
            </Layout>
          </FormSection>
          <FormSection flex={3}>
            <LoadingIndicator isLoading={this.props.loading} caption="Aguarde ..." />
            { this.renderLoginButton() }
            <StatusMessageDisplay statusMessage={this.props.statusMessage} />
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
  headerTitle: {
    color: 'white'
  },
});

const mapStateToProps = (state) => ({
  statusMessage: state.statusMessage,
  loading: state.loading
})

export default connect(mapStateToProps, { tryLogin })(LoginScreen)