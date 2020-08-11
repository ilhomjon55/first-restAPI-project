; (
   async function () {

      let response = await fetch("http://jsonplaceholder.typicode.com/todos")
      let data = await response.json()

      for (let u of data) {
         console.log(u);
         let newLi = document.createElement('li')
         usersElement.appendChild(newLi)


         // USERID
         let userIdBox = document.createElement('p')
         userIdBox.textContent = "User ID: "
         newLi.appendChild(userIdBox)

         let userID = document.createElement('span')
         userID.textContent = u.userId
         userIdBox.appendChild(userID)


         // ID
         let idBox = document.createElement('p')
         idBox.textContent = " ID: "
         newLi.appendChild(idBox)

         let id = document.createElement('span')
         id.textContent = u.id
         idBox.appendChild(id)

         // TITLE
         let titleBox = document.createElement('p')
         titleBox.textContent = "Title: "
         newLi.appendChild(titleBox)

         let title = document.createElement('span')
         title.textContent = u.title
         titleBox.appendChild(title)


         // COMPLETED
         let completedBox = document.createElement('p')
         completedBox.textContent = "Completed: "
         newLi.appendChild(completedBox)

         let completed = document.createElement('span')
         completed.textContent = u.completed
         completedBox.appendChild(completed)
         if (completed.textContent === "true") {
            completed.textContent = 'Yes, good candidate! '
            completed.style.color = "green"
            completed.style.textDecoration = "underline"
         } else {
            completed.textContent = 'No, bad candidate! '
            completed.style.color = "red"
            completed.style.textDecoration = "underline"
         }
      }
   }
)()

