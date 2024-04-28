let obj ={'Name':' ','Mobile':' ','Email':' ','Message':' '};
function submit()
{
    let a =document.getElementById("t1").value;
    let b =document.getElementById("t2").value;
    let c =document.getElementById("t3").value;
    let d =document.getElementById("t4").value;

    if(a.length!=0 && b.length!=0 && c.lenght!=0 && d.length!=0)
 
    {
        //obj = {'Name':a,'Mobile': b,'Email':c};
       // obj.Name = a;
        //obj.Mobile = b;
       // obj.Email = c;

       obj['Name']=a;
       obj['Mobile']=b;
       obj['Email']=c;
       obj['Message']=d;
    }

    else

    {
        alert("Please Enter Value");
        return false;
    }

}

function confirm()
{
    let a =document.getElementById("t1").value;
    let b =document.getElementById("t2").value;
    let c =document.getElementById("t3").value;
    let d =document.getElementById("t4").value;

    if(a.length!=0 && b.length!=0 && c.lenght!=0 && d.length!=0)
    {
        alert("your record is saved")
    }
    else
    {
        alert("no record available")
        return false
    }
}

function view()
{
    let v =' ';
    for(let x in obj)
    {
        v = v+obj[x]+"<br>";
    }
document.getElementById("div1").innerHTML=v;
}
