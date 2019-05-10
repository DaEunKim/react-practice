import React, {Component} from 'react';
import {GoogleLogin} from 'react-google-login';
import styled from 'styled-components';
// import { wrap } from 'module';
import {withRouter} from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            provider:'',
        }
    }


    responseGoogle = (res) => {
        this.setState({
            id: res.googleId,
            name:res.profileObj.name,
            provider:'google'
        });
        this.doSignUp();

        this.props.onLogin();
        this.props.history.push('/');
    }

    

    responseFail = (err) => {
        console.error(err);
    }

    doSignUp = () => {
        const {id, name, provider} = this.state;

        window.sessionStorage.setItem('id', id);
        window.sessionStorage.setItem('name', name);
        window.sessionStorage.setItem('provider', provider);
        this.props.onLogin();
        this.props.history.push('/');
    }

    render(){
        return (
            <Container>
                <GoogleLogin 
                clientId="747157687686-r38q6euedhpsdrrnfmmaghee03v5bved.apps.googleusercontent.com"
                buttonText="Google Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseFail}
                />
            </Container>
        );
    }
}
const Container = styled.div`
    flex-flow:column wrap;
    margin:10px;

`
export default Login;//withRouter(Login);
