
var firebaseConfig = {
    apiKey: "",
    authDomain: "emojo-234d5.firebaseapp.com",
    databaseURL: "https://emojo-234d5.firebaseio.com",
    projectId: "emojo-234d5",
    storageBucket: "emojo-234d5.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


window.getUser = () => {
    let unsub = () => null;
    return new Promise((res, rej) => {
        unsub = firebase.auth().onAuthStateChanged((user) => {
            res(user)
            unsub();
        })
    })
};

firebase.auth().onAuthStateChanged((user) => {
    console.log("The user: ", user);
    const path = location.href;
    console.log("calling setNavlinks...")
    setNavLinks(user);



    if (user) {
        if (path.includes("login.html")) {
            location.assign("/index.html")
        }

    } else {
        if (!(path.includes("login.html"))) {
            location.assign("/login.html")
        }

    }

})

function logout() {
    firebase.auth().signOut();
}

//this part is probably redundent...
function setNavLinks(user) {

    const loggedin = document.querySelectorAll('.logged-in');
    const loggedOut = document.querySelectorAll('.logged-out')
    console.log("the loggedin", { loggedin, loggedOut })


    loggedin.forEach((item) => {
        if (!user) {
            item.style.display = "none";
        }
    })
    loggedOut.forEach((item) => {
        if (user) {
            item.style.display = "none";
        }
    })
}
