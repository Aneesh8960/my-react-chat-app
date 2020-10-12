import firebase from 'firebase'

const config = {
        apiKey: "AIzaSyDP2c09poM2RJCxIeBf4WRgjseI7ji5boE",
        authDomain: "reactjs-chat-demo-master.firebaseapp.com",
        databaseURL: "https://reactjs-chat-demo-master.firebaseio.com",
        projectId: "reactjs-chat-demo-master",
        storageBucket: "reactjs-chat-demo-master.appspot.com",
        messagingSenderId: "981807051564",
        appId: "1:981807051564:web:41ce35b5aa6fdfa85df289",
        measurementId: "G-S9BKXQ4Y8B"
}
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
