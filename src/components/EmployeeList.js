import React from 'react';
import _ from 'lodash';
import { Button } from 'react-native-elements';
import { ListView, Alert } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import { Spinner } from './common';

class EmployeeList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        const title = 'Employee List';
        const headerLeft = null;
        const headerRight = (
            <Button
                title="Add"
                backgroundColor='#69f0ae'
                borderRadius={5}
                raised
                onPress={params.rightPress ? params.rightPress : () => null} />
        );

        return { title, headerLeft, headerRight };
    };

    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);
    }

    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentDidMount() {
        this.props.navigation.setParams({ rightPress: this._onButtonRightPress });
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    _onButtonRightPress = () => {
        const { navigate } = this.props.navigation;
        navigate('Create');
    }

    renderRow(employee) {
        return (
            <ListItem
                navigate={this.props.navigation.navigate}
                employee={employee}
            />
        );
    }

    render() {
        if (this.props.isLoading) {
          return (
            <Spinner />
          );
        }

        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const { list, isLoading } = state.employees;
    const employees = _.map(list, (val, uid) => {
        return { ...val, uid };
    });

    return { employees, isLoading };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
