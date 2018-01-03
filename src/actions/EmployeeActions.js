import firebase from 'firebase';

import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH,
    EMPLOYEE_FETCHING,
    EMPLOYEE_SAVE,
    EMPLOYEE_REMOVE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(dispatch({
                type: EMPLOYEE_CREATE
            }));
    }
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: EMPLOYEE_SAVE
                })
            });
    }
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({
            type: EMPLOYEE_FETCHING
        });

        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', (snapshot) => {
                dispatch({
                    type: EMPLOYEE_FETCH,
                    payload: snapshot.val()
                });
            });
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
          .remove()
          .then(() => {
              dispatch({
                  type: EMPLOYEE_REMOVE
              })
          });
    };
};
