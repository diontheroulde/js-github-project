


document.addEventListener("DOMContentLoaded", () => {
   
    const submitBtn = document.querySelector("#github-form > input[type=submit]:nth-child(2)")
    const submitBox = document.querySelector("input#search")
    const divContainer = document.querySelector("div#github-container")
    const userList = document.querySelector("ul#user-list")
    const repoList = document.querySelector("ul#repos-list")


    submitBtn.addEventListener("click", (event) => {
        event.preventDefault()
     const searchInput =  submitBox.value 
     searchInput
    
    
    const configurationObject = {
        method : "GET",
        headers : {
            "Content-Type" : "application/json",
            Accept : "application/vnd.github.v3+json"
        }
    }
   
    fetch(`https://api.github.com/search/users?q=${searchInput}`, configurationObject)
    .then(res => res.json())
    .then(data => {
        searchInput === data.items.login
        
        data.items.forEach(item => {
            const profileLink = document.createElement("a")
            profileLink.href = item.html_url
            profileLink.innerText =item.html_url
            const searchList = document.createElement("li") 
            searchList.innerHTML = `${item.login}<br>`
            const avatarUrl = document.createElement("img")
            avatarUrl.addEventListener("click", (event) => {
                preventDefault()
            fetch(`https://api.github.com/search/users/${searchInput}/repos`)
            .then(res => res.json())
            .then(data => {
                
            })
            
            })
            avatarUrl.src = `${item.avatar_url}<br>`
            avatarUrl.height = 100
         userList.append(searchList, avatarUrl, profileLink)
    
        
        })
     })
    
    })

        
        
})











