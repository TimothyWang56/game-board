import React, { Component } from 'react'
import Button from '../../Components/Button/Button';
import './LoginPage.scss'
import { connect } from 'react-redux';
import { loginStart } from '../../actions/userActions';
import { Redirect } from 'react-router-dom';

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
        this.props.handleLogin(this.state.username, this.state.password);
    }

    handleGoToRegistration() {
        this.props.history.push('/register');
    }

    handleBackToLandingPage() {
        this.props.history.push('/');
    }

    render() {
        if (this.props.token) {
            return <Redirect to='/lobby'/>
        }

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

const mapStateToProps = (state) => {
    return {
        ...state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: (username, password) => {
            dispatch(loginStart({username, password}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)