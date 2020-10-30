import React, { Component } from 'react'
import Button from '../../Components/Button/Button';
import './LoginPage.scss'

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            warning: false,
        }
    }

    handleLogin() {
        // make API call
        const credentialsVerified = true;
        if (credentialsVerified) {
            this.props.history.push('/lobby');
        } else {
            this.setState({ warning: true });
        }
    }

    handleGoToRegistration() {
        this.props.history.push('/register');
    }

    handleBackToLandingPage() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='page'>
                <div className='login-wrapper text'>
                    <div className='big-title'>
                        Login
                    </div>
                    <label>
                        Username:
                        <input className='login-input' type='text' onChange={(event) => this.setState({ username: event.target.value })}/>
                    </label>
                    <label>
                        Password:
                        <input className='login-input' type='password' onChange={(event) => this.setState({ password: event.target.value })}/>
                    </label>
                    {this.state.warning &&
                        <div className='warning'>
                            username or password is incorrect
                        </div>
                    }
                    <div className='login-page-buttons'>
                        <div className='login-button'>
                            <Button buttonText='Login' handleOnClick={this.handleLogin.bind(this)}/>
                        </div>
                        <div className='go-to-registration-button'>
                            <Button buttonText='Register Now!' handleOnClick={this.handleGoToRegistration.bind(this)}/>
                        </div>
                    </div>
                    <div className='back-to-landing-page-text' onClick={this.handleBackToLandingPage.bind(this)}>
                        {"< go back to landing page"}
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage