import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC6rV1_IOIVDtcqekqPp-xhOZ4mWjRAQKA",
    authDomain: "react-9-6-19.firebaseapp.com",
    databaseURL: "https://react-9-6-19.firebaseio.com",
    projectId: "react-9-6-19",
    storageBucket: "react-9-6-19.appspot.com",
    messagingSenderId: "1065811728457",
    appId: "1:1065811728457:web:351dac2fe3e0755f"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function getRealtimeTodo() {
    return new Promise((resolve, reject) => {
        // db.collection('todo').get().then(snapshot => {
        db.collection('todo').onSnapshot(snapshot => {
            const temp = [];

            snapshot.forEach(doc => {
                const obj = {id: doc.id, ...doc.data()}
                temp.push(obj);
            })
            console.log('getRealtimeTodo ===>', temp);
            resolve(temp);
        })
    })
}

export default firebase;
export {
    getRealtimeTodo
}