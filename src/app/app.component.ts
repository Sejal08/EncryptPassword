import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 constructor() {}

 ngOnInit() {

    var myString   = "Sejal Patani";
    var myPassword = "myPassword";


var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
document.getElementById("demo0").innerHTML = myString;
document.getElementById("demo1").innerHTML = encrypted.key;
document.getElementById("demo2").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);


 }
}