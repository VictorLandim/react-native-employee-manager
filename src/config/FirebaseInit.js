import firebase from 'firebase';

export default () => {
    const config = {
        apiKey: "AIzaSyDP733YJL3-_sq9wAAFxXxM2Bh979ynsOc",
        authDomain: "employee-manager-9f7a1.firebaseapp.com",
        databaseURL: "https://employee-manager-9f7a1.firebaseio.com",
        projectId: "employee-manager-9f7a1",
        storageBucket: "employee-manager-9f7a1.appspot.com",
        messagingSenderId: "400475156872"
    };
    
    firebase.initializeApp(config);
}
