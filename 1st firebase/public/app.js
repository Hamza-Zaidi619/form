// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase,ref,set,onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4XVzoI1jGlWfvRBw1rZ_ioxAHb2zfv_U",
  authDomain: "form-43230.firebaseapp.com",
  projectId: "form-43230",
  storageBucket: "form-43230.appspot.com",
  messagingSenderId: "570233366235",
  appId: "1:570233366235:web:0d1356ad098eb834bbcefe",
  measurementId: "G-8LXGSLZ492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var name = document.getElementById('name');
var fathername = document.getElementById('fathername');
var cnic = document.getElementById('cnic');
var course = document.getElementById('course');
var country= document.getElementById('country');
var city = document.getElementById('city');
var retrieve =document.getElementById('retrieve');
var index=0;



window.saveData = function  () {
    //function saveData(){
    var obj = {
        name:name.value,
        fathername:fathername.value,
        cnic:cnic.value,
        course:course.value,
        country:country.value,
        city:city.value,
    }
    obj.id=Math.random().toString().slice(2);
    let reference = ref(database,`info/${obj.id}/`);
    set(reference,obj);
    console.log(obj);
}
let arr = [];

function getData(){
    let reference = ref(database,"info/")
    // console.log(data.value)
    onChildAdded(reference,function(data){
        console.log(data.val())
        arr.push(data.val())
        retrieve.innerHTML="";
        for(var i =0;i<arr.length;i++){
            retrieve.innerHTML+=`<li>${arr[i].name+ '<br/>'+ arr[i].fathername +'<br/>' + arr[i].cnic
             +'<br/>'+ arr[i].course+'<br/>'+ arr[i].country+'<br/>'+ arr[i].city +'<br/>'+'<br/>'+'<br/>'} </li>`
        }
    })
}

getData();