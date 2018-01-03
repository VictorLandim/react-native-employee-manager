import React from 'react';
import { Picker, Text, StyleSheet, Keyboard, Alert } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends React.Component {
    static navigationOptions = {
      title: 'Create'
    }

    constructor(props) {
        super(props);

        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        Keyboard.dismiss();
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button
                        onPress={this.onButtonPress}
                    >
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
