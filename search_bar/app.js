 const userCardTemplate=document.querySelector("[data-user-template]");
const userCardContainer=document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
let users=[];
searchInput.addEventListener("input",(e)=>{
    const value=e.target.value.toLowerCase();
    users.forEach(user=>{
        const isVisible=user.name.toLowerCase().includes(value)||user.email.toLowerCase().includes(value);
        user.element.classList.toggle("hide",!isVisible);
    })
    
   
})

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
      
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const webData=card.querySelector("[web-data]");

      header.textContent ="Name: "+ user.name
      body.textContent ="Email: "+ user.email +"\n"+"Phone: "+user.phone+"\n";

      var a = document.createElement('a');
      var linkText = document.createTextNode("Website");
      a.appendChild(linkText);
      a.title = user.name;
      a.href = "http://"+user.website.toString();
      a.target="blank";

      webData.append(a);

      userCardContainer.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })