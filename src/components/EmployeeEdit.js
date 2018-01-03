import React from 'react';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends React.Component {
    static navigationOptions = {
      title: 'Edit'
    }

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.onButtonPress = this.onButtonPress.bind(this);
        this.onTextPress = this.onTextPress.bind(this);
        this.onAccept = this.onAccept.bind(this);
        this.onDecline = this.onDecline.bind(this);
    }

    componentWillMount() {
        const { employee } = this.props.navigation.state.params;

        _.each(employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift, navigation } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: navigation.state.params.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept() {
        const { employee } = this.props.navigation.state.params;
        this.props.employeeDelete({ uid: employee.uid });
        this.setState({
            showModal: false
        });
    }

    onDecline() {
        this.setState({
            showModal: false
        });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept}
                    onDecline={this.onDecline}
                    content="Are you sure you want to fire this employee?"
                />
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeUpdate,
    employeeSave,
    employeeDelete
 })(EmployeeEdit);
