var nalertcnt = 0;

function nalert( msg, color )
{

 if (color == 'white')  document.getElementById('nalertbox').style.backgroundColor = "#ffffff";
 if (color == 'red')    document.getElementById('nalertbox').style.backgroundColor = "#ff2222";
 if (color == 'green')  document.getElementById('nalertbox').style.backgroundColor = "#22aa22";
 
nalertcnt=0;

 var msg2 = "<br>"+msg+"<br>";
  document.getElementById('nalertbox').innerHTML = msg2;


 document.getElementById('nalertbox').style.top = 50+"px";

 
setTimeout(nalert_hide, 7000); 
} //


function nalert_hide()
{
document.getElementById('nalertbox').style.top = -300+"px";
}

