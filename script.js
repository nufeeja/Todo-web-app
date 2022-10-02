var username=document.getElementById("username")
var password=document.getElementById("password")
var usererror=document.getElementById("usererror")
var pswderror=document.getElementById("pswderror")


function validate(callback){
   let userregexp=/^admin$/
   let pswdregexp=/^12345$/
   var success=true;
if(userregexp.test(username.value)){
}
else{
usererror.innerHTML="Invalid Username";
usererror.style.color="red";
return success= false;
}

if(pswdregexp.test(password.value)){

}
else{
pswderror.innerHTML="Invalid Password";
pswderror.style.color="red";
return success= false;
}
callback(success)
}
function msg(data){
   if(data=true){
       window.open("main.html")
   }
   else{

   }
}


// validation ends

// function ajax(){
//     var request=new XMLHttpRequest();
//     request.onreadystatechange=function(){
//                  if(this.readyState==4 & this.status==200){
//                //   document.getElementById("demo").innerHTML=JSON.parse(this.responseText);
//                var response=JSON.parse(this.responseText);
//             console.log(request.responseText)
        
//                let output="";
//                for(let i=0;i<response.length;i++){
//                   output +="<li>"+response[i].title+"</li>"
                 
                    
//                // }    console.log(output)
//                } document.getElementById("demo").innerHTML=output;
//               }
//                }
//                request.open("GET","https://jsonplaceholder.typicode.com/todos",true);
//                request.onload=function(){
//                 // console.log(request.responseText)
//                }
//                request.send();
//           }
//           ajax();
function ajax(){
   var request=new XMLHttpRequest();
   request.onreadystatechange=function(){
                if(this.readyState==4 & this.status==200){
              //   document.getElementById("demo").innerHTML=JSON.parse(this.responseText);
              var response=JSON.parse(this.responseText);
            
            
            
              let output="";
              for(let i=0;i<response.length;i++){
                   output +="<li>"+response[i].title+"</li>"
                   
              // }    console.log(output)
              } document.getElementById("demo").innerHTML=output;
             }
              }
              request.open("GET","https://jsonplaceholder.typicode.com/todos",true);
              request.send();
         }