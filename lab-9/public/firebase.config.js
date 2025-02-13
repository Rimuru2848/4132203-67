// firebase.config.js
const firebaseConfig = {
    apiKey: "AIzaSyBJLq5_cxwBDUBSpjsw_t0bUVHNX8CwUc0",
    authDomain: "james-m2-042.firebaseapp.com",
    projectId: "james-m2-042",
    storageBucket: "james-m2-042.firebasestorage.app",
    messagingSenderId: "1083039828766",
    appId: "1:1083039828766:web:a0c0dcec1d21a679efd70f",
    measurementId: "G-K5HTCXLS7B"
};

// For service worker (firebase-messaging-sw.js)
// This ensures the config is available in both module and non-module contexts
if (typeof self !== 'undefined') {
    self.firebaseConfig = firebaseConfig;
}