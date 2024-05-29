
onload= async() => {
    const list=document.getElementById('list')
    const name=document.getElementById('name')
    const age=document.getElementById('age')
    const email=document.getElementById('email')
    
    const response = await fetch('https://personal-portfolio-backend-9t80.onrender.com/users');
    const result = await response.json();
    const achievement= await result[0].achievements
    console.log(achievement)
    name.innerHTML+=result[0].name
    age.innerHTML+=result[0].age
    email.innerHTML+=result[0].email
    achievement.forEach((data)=>{
    let container=`<li id="title">title: ${data.title}</li>
    <li>Discription: ${data.content}</li>`
    list.innerHTML+=container
    })
  };

