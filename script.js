document.getElementById('form').addEventListener('submit',addForm);
function addForm(e){
    e.preventDefault();

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phn=document.getElementById('phn').value;
    let col=document.getElementById('college').value;

    if(document.getElementById('b1').checked)
        branch=document.getElementById('b1').value;
    else if(document.getElementById('b2').checked)
        branch=document.getElementById('b2').value;
    else if(document.getElementById('b3').checked)
        branch=document.getElementById('b3').value;
    else if(document.getElementById('b4').checked)
        branch=document.getElementById('b4').value;
    else if(document.getElementById('b5').checked)
        branch=document.getElementById('b5').value;
    
    fetch('https://httpbin.org/post',{
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain,*/*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({name:name,email:email,phn:phn,col:col,branch:branch})
    })
        .then((res) => res.json())
        .then((data)=> {
            console.log(data);
            let output='<br><br><div class="box"><h1><b>Form Details </b></h1><hr>';
            output +=`<div id="formDs"><br>
            <br><b>Name:</b> ${name}<br>
            <br><b>Email Id:</b> ${email}<br>
            <br><b>Phone Number:</b> ${phn}<br>
            <br><b>College:</b> ${col}<br>
            <br><b>Branch:</b> ${branch}<br>
            </div>
            </div>`; 
            document.getElementById('out').innerHTML=output;
            document.getElementById('form').reset();

        })
       
     
}