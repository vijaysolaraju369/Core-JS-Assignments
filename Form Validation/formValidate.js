let fnameNode=document.getElementById("fname")
let lnameNode=document.getElementById("lname")
let unameNode=document.getElementById("uname")
let passNode=document.getElementById("pass")
let emailNode=document.getElementById("email")
let mobileNode=document.getElementById("mobile")

let tdNode1=document.getElementById("error1")
let tdNode2=document.getElementById("error2")
let tdNode3=document.getElementById("error3")
let tdNode4=document.getElementById("error4")
let tdNode6=document.getElementById("error6")
let tdNode7=document.getElementById("error7")

let border1="2px solid green"
let border2="2px solid red"

function validate1() {
    let fname1=fnameNode.value;
    let regularExp=new RegExp("^[A-Za-z]*$")
    if (fname1==''){
        tdNode1.textContent="this field is required";
        fnameNode.style.border=border2;
        return false;
    }
    else if (regularExp.test(fname1)==false) {
        tdNode1.textContent="name should have only alphabets"
        fnameNode.style.border=border1;
        return false;
    }
    else{
        fnameNode.style.border=border1;
        tdNode1.textContent="";
        return true;
    }
}
function validate2() {
    let lname1=lnameNode.value;
    let regularExp=new RegExp("^[A-Za-z]*$")
    if (lname1==''){
        tdNode2.textContent="this field is required";
        lnameNode.style.border=border2;
        return false;
    }
    else if (regularExp.test(lname1)==false) {
        tdNode2.textContent="name should have only alphabets"
        lnameNode.style.border=border1;
        return false;
    }
    else{
        lnameNode.style.border=border1;
        tdNode2.textContent="";
        return true;
    }
}
function validate3() {
    let uname1=unameNode.value;
    if (uname1==''){
        tdNode3.textContent="this field is required";
        unameNode.style.border=border2;
        return false;
    }
    else if (uname1.length<3 || uname1.length>10) {
        tdNode3.textContent="username must have atleast 3 and at most 10 chars"
        unameNode.style.border=border1;
        return false;
    }
    else{
        unameNode.style.border=border1;
        tdNode3.textContent="";
        return true;
    }
}
function validate4() {
    let pass1=passNode.value;
    let regularExp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

    if (pass1==''){
        tdNode4.textContent="this field is required";
        passNode.style.border=border2;
        return false;
    }
    else if (regularExp.test(pass1)==false) {
        let spannode=document.createElement("span")
        spannode.textContent="the password should contain"
        let ulnode=document.createElement("ul")
        let linode1=document.createElement("li")
        linode1.textContent="atleast 1 capital letter"
        let linode2=document.createElement("li")
        linode2.textContent="atleast 1 small letter"
        let linode4=document.createElement("li")
        linode4.textContent="atleast digit"
        let linode5=document.createElement("li")
        linode5.textContent="atleast 1 special character"
        ulnode.append(linode1,linode2,linode4,linode5)
        tdNode4.append(spannode,ulnode)
        
        passNode.style.border=border1;
        return false;
    }
    else if (pass1.length<5 || pass1.length>12) {
        tdNode4.textContent="Password must be 5-12 characters long"
        passNode.style.border=border1;
        return false;
    }
    else{
        passNode.style.border=border1;
        tdNode4.textContent="";
        return true;
    }
}
function validate6() {
    let email1=emailNode.value;
    let ss=email1.substring(email1.indexOf('@')+1)
    if (email1==''){
        tdNode6.textContent="this field is required";
        emailNode.style.border=border2;
        return false;
    }
    else if (!email1.includes('@') || ss=='') {
        tdNode6.textContent="enter valid email id"
        emailNode.style.border=border1;
        return false;
    }
    else{
        emailNode.style.border=border1;
        tdNode6.textContent="";
        return true;
    }
}
function validate7() {
    
    let mobile1=mobileNode.value;
    let regularExp=new RegExp("^[0-9]*$")
    if (mobile1==''){
        tdNode7.textContent="this field is required";
        mobileNode.style.border=border2;
        return false;
    }
    else if (regularExp.test(mobile1)==false) {
        tdNode7.textContent="mobile number should contain only numbers"
        mobileNode.style.border=border1;
        return false;
    }
    else if (mobile1.length!=10) {
        tdNode7.textContent="mobile number should contain 10 digits"
        mobileNode.style.border=border1;
        return false;
    }
    else{
        mobileNode.style.border=border1;
        tdNode7.textContent="";
        return true;
    }
}

