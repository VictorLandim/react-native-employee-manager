import React from 'react';
import { Picker, Text, StyleSheet, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends React.Component {
    static navigationOptions = {
      title: 'Create'
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        Keyboard.dismiss();
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    renderOptions() {
        const days = [
            { id: 0, name: 'Monday' },
            { id: 1, name: 'Tuesday' },
            { id: 2, name: 'Wednesday' },
            { id: 3, name: 'Thursday' },
            { id: 4, name: 'Friday' },
            { id: 5, name: 'Saturday' },
            { id: 6, name: 'Sunday' }
        ];

        return days.map(item => <Picker.Item key={item.id} label={item.name} value={item.name} />);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={(value) => { this.props.employeeUpdate({ prop: 'name', value })}}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="(61) 9 9987-2343"
                        value={this.props.phone}
                        onChangeText={(value) => { this.props.employeeUpdate({ prop: 'phone', value })}}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerLabelStyle}>
                        Shift
                    </Text>
                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        { this.renderOptions() }
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                    >
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        paddingTop: 10
    },
    pickerStyle: {
        flex: 2
    }
});

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
