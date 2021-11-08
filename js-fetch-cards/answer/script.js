function grabData() {
   //  const initialResult1 = fetch("https://ddc-web-student.cnm.edu/apis/")
   //      .then(reply => reply.json())
   //  console.log(initialResult.data)
   // initialResult.then(data => {
   //     console.log(data)
   // })

   fetch("https://ddc-web-student.cnm.edu/apis/")
        .then(reply => reply.json())
        .then(data => {
            console.log(data.data)
            const parsedCards = data.data.map(post=> {
             return  `
   <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${post.body}</p>
      </div>
    </div>
  </div>
               `
            })

            document.getElementById("target").innerHTML = parsedCards.join(" ")

       })
}

