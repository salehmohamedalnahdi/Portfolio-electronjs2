
onload= async() => {
    const list=document.getElementById('list')
    const name=document.getElementById('name')
    const age=document.getElementById('age')
    const email=document.getElementById('email')
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();
    name.innerHTML+=result[0].title
    age.innerHTML+=result[0].title
    email.innerHTML+=result[0].title
    result.forEach((data)=>{
    let content=`<li id="title">title: ${data.title}</li>
    <li>Discription: ${data.title}</li>`
    list.innerHTML+=content
    })
  };

