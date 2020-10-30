import React, { Component } from 'react'
import Button from '../../Components/Button/Button';
import './RegistrationPage.scss';
import { register } from '../../apis/auth';

class RegistrationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password1: '',
            password2: '',
            usernameLengthWarning: false,
            passwordLengthWarning: false,
            passwordMatchingWarning: false,
            usernameTakenWarning: false,
            registrationSuccessful: false,
            unknownWarning: false,
        }
    }

    async handleRegistration() {
        const usernameValid = this.state.username.length >= 5;
        const passwordValid = this.state.password1.length >= 6 && this.state.password2.length >= 6;

        this.setState({ usernameLengthWarning: !usernameValid, passwordLengthWarning: !passwordValid });

        if (!usernameValid || !passwordValid) return;

        const samePassword = this.state.password1 === this.state.password2;
        this.setState({ passwordMatchingWarning: !samePassword });

        if (!samePassword) return;

        const res = await register(this.state.username, this.state.password1);
        
        let registrationSuccessful = false;
        let usernameTaken = false;
        console.log(res);
        if (res.status === 201) {
            usernameTaken = false;
            registrationSuccessful = true;
        } else if (res.status === 409) {
            usernameTaken = true;
        }

        this.setState({ usernameTakenWarning: usernameTaken });
        
        if (usernameTaken) return
        if (registrationSuccessful) {
            this.setState({ registrationSuccessful: true, unknownWarning: false });
            this.setState({ username: '', password1: '', password2: '' });
        } else {
            this.setState({ unknownWarning: true });
        }
    }

    handleGoToLogin() {
        this.props.history.push('/login');
    }

    handleBackToLandingPage() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='page'>
                <div className='registration-wrapper text'>
                    <div className='big-title'>
                        Register
                    </div>
                    <label>
                        Username:
                        <input className='registration-input' type='text' value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })}/>
                    </label>
                    {this.state.usernameLengthWarning &&
                        <div className='warning'>
                            username must be 5 or more characters
                        </div>
                    }
                    {this.state.usernameTakenWarning &&
                        <div className='warning'>
                            username already taken
                        </div>
                    }
                    <label>
                        Password:
                        <input className='registration-input' type='password' value={this.state.password1} onChange={(event) => this.setState({ password1: event.target.value })}/>
                    </label>
                    <label>
                        Re-enter Password:
                        <input className='registration-input' type='password' value={this.state.password2} onChange={(event) => this.setState({ password2: event.target.value })}/>
                    </label>
                    {this.state.passwordLengthWarning &&
                        <div className='warning'>
                            password must be 6 or more characters
                        </div>
                    }
                    {this.state.passwordMatchingWarning &&
                        <div className='warning'>
                            passwords do not match
                        </div>
                    }
                    <div className='registration-page-buttons'>
                        <div className='registration-button'>
                            <Button buttonText='Register' handleOnClick={this.handleRegistration.bind(this)}/>
                        </div>
                        {this.state.registrationSuccessful &&
                            <div className='success'>
                                registration successful! go to login now!
                            </div>
                        }
                        <div className='go-to-login-button'>
                            <Button buttonText='Login Now!' handleOnClick={this.handleGoToLogin.bind(this)}/>
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

export default RegistrationPage