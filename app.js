//form validation

function validate(){

    var error=document.getElementById('errorText');
    error.style.border="2px solid red";

    if(document.getElementById('address').value=="" && document.getElementById('city').value=="" && document.getElementById('province').value=="" && 
     document.getElementById('postalcode').value=="" && document.getElementById('securityNumber1').value=="" && document.getElementById('securityNumber2').value=="" &&  document.getElementById('securityNumber3').value==""
     ){
        error.innerHTML="Empty Entry .. Please fill all Fields!";
        return false;
     }
    if(document.getElementById('address').value==""){
       error.innerHTML="please enter address";
       document.getElementById('address').focus();
       return false;
    }
     if(document.getElementById('city').value==""){
        error.innerHTML="Please enter City!";
        document.getElementById('city').focus();
        return false;
     }
     if(document.getElementById('province').value==""){
        error.innerHTML="Please enter State/Province!";
        document.getElementById('province').focus();
        return false;
     }
     if(document.getElementById('postalcode').value=="" || isNaN(document.getElementById('postalcode').value)){
        error.innerHTML="Please enter ZipPostal Code!";
        error.innerHTML="Please enter ZipPostal Code as a number!";
        document.getElementById('postalcode').focus();
        return false;
     }
     if(document.getElementById('securityNumber1').value=="" || isNaN(document.getElementById('securityNumber1').value)){
        error.innerHTML="Please enter Social Security Number 1 as a number!";
        document.getElementById('securityNumber1').focus();
        return false;
     }
     if(document.getElementById('securityNumber2').value=="" || isNaN(document.getElementById('securityNumber2').value)){
        error.innerHTML="Please enter Social Security Number 2 as a number!";
        document.getElementById('securityNumber2').focus();
        return false;
     }
     if(document.getElementById('securityNumber3').value=="" || isNaN(document.getElementById('securityNumber3').value)){
        error.innerHTML="Please enter Social Security Number 3 as a number!";
        document.getElementById('securityNumber3').focus();
        return false;
     }
     
     else{
        error.innerHTML="Form Submission succcess!";
        error.style.border="2px solid green";
        error.style.color="green";
        return false;
     }
     return ( true );
}   