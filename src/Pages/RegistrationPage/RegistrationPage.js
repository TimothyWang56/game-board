import React, { Component } from 'react'
import Button from '../../Components/Button/Button';
import './RegistrationPage.scss';
import { connect } from 'react-redux';
import { registerStart } from '../../actions/userActions';
import { Redirect } from 'react-router-dom';

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

        this.props.handleRegister(this.state.username, this.state.password1);
    }

    handleGoToLogin() {
        this.props.history.push('/login');
    }

    handleBackToLandingPage() {
        this.props.history.push('/');
    }

    render() {
        // eventually check if token is expired
        if (this.props.token) {
            return <Redirect to='/lobby'/>
        }

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
                    {this.props.error && this.props.error.response.status === 409 &&
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

const mapStateToProps = (state) => {
    return {
        ...state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleRegister: (username, password) => {
            dispatch(registerStart({username, password}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)