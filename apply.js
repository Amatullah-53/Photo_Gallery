let obj ={'name':' ','work experience':'','contact':'','email':''};
let candidates=[];

    function store()
{
    let a =document.getElementById("t1").value ;
    let b =document.getElementById("t2").value ;
    let c =document.getElementById("t3").value ;
    let d =document.getElementById("t4").value ;
    if(a.length!=0 && b.length!=0 && c.length!=0 && d.length!=0)

    {
        obj={'name':a,'work experience':b,'contact':c,'email':''};
        candidates.push(obj);
    }
}

function view()
{
    let v =" ";
    for(let x in candidates)
    {
        
        for(let y in candidates[x])
        {
            v = v+candidates+[x][y]
        }
        v = v + "<br";
    }
    document.getElementById("div1").innerHTML= v;
}
