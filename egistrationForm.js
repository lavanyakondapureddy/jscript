<html>



<script>


function validate()
{


var fname = document.f.t1.value;


var lname = document.f.t2.value;
var email = document.f.t3.value;
 

var pword = document.f.t4.value;
var phnumber = document.f.t5.value;
if (fname.length==0){

alert("First Name can't be blank");

return false;

}

if (lname.length==0){

alert("Last Name can't be blank");

return false;

}  
var atposition=email.indexOf("@");  
 

var dotposition=email.lastIndexOf(".");  


if (atposition<1 || dotposition<atposition+2 || dotposition+1>=email.length){

alert("Please enter a valid e-mail address");
 


return false;
   

}  

if(pword==null || pword.length<6){  
 

alert("Password must be at least 6 characters long.");  


return false;  
   

}  
   

if(phnumber.length==0 || phnumber.length<10 || phnumber.length>10)
{  
   

alert("Phonenumber should contain 10 digits only.");  
   

return false;  
   

}  
   


}

</script>



<body>

<center>

<h2>
REGISTRATION
</h2>

</center>

</body>


<form name = "f" action="#" onsubmit = "return validate();" method = "post">


First Name:
<input type="text" name = "t1"/>
<br><br>

Last Name:
<input type="text" name = "t2"/>
<br><br>

Email Id:
<input type="text" name = "t3"/><br><br>
Password:
<input type="password" name = "t4"/>
<br><br>


Phonenumber:
<input type="text" name = "t5"/>
<br><br>

<input type="submit" value="Register">


</form>


</body>


</html>