import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    static navigationOptions = {
      title: 'Login',
      header: null
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        Keyboard.dismiss();

        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner size="large" />
            );
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            );
        }
    }

    render() {
        const { containerStyle, titleStyle } = styles;
        return (
            <View style={containerStyle}>
                <Text style={titleStyle}>
                    Let's Login
                </Text>
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="myemail@email.com"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeholder="password123"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                    </CardSection>

                    {this.renderError()}

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#ccfce4',
        paddingTop: 80
    },
    titleStyle: {
        color: '#2e7d32',
        fontSize: 56,
        textAlign: 'center',
        marginBottom: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);
