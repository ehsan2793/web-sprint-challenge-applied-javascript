const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  
   // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')           /// all tags are here 
  const imgContainer = document.createElement('div')
  const image = document.createElement('img')
  const span = document.createElement('span')

  card.classList.add('card')
  headline.classList.add('headline')                  // all needed classse are included here
  author.classList.add('author')
  imgContainer.classList.add('img-container')
  

  headline.textContent = article.headline
  image.src = article.authorPhoto
  image.alt = `this is the image of the author ${article.authorName}`
  span.textContent =  `by ${article.authorName}`

  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgContainer)
  author.appendChild(span)
  imgContainer.appendChild(image)


  card.addEventListener('click', (event) => {
    console.log(`${article["headline"]}`)
  })
 
 
  return card
}


const cardAppender = (selector) => {
  
  axios.get("http://localhost:5000/api/articles")
  .then((response) => {
    console.log(response)
    
   const bootstrap = response.data.articles.bootstrap
   bootstrap.forEach((article => {
     const card = Card(article)
    document.querySelector(selector).appendChild(card);
   }))
   const javascript = response.data.articles.javascript
   javascript.forEach((article => {
    const card = Card(article)
   document.querySelector(selector).appendChild(card);
  }))

  const jquery = response.data.articles.jquery
  jquery.forEach((article => {
    const card = Card(article)
   document.querySelector(selector).appendChild(card);
  }))

  const node = response.data.articles.node
  node.forEach((article => {
    const card = Card(article)
   document.querySelector(selector).appendChild(card);
  }))

  const technology = response.data.articles.technology
  technology.forEach((article => {
    const card = Card(article)
   document.querySelector(selector).appendChild(card);
  }))
  //  console.log(text)
//   const text = Card(response.data.articles.bootstrap[0])

  // document.querySelector(selector).appendChild(text);

// console.log(response)

  
})

.catch(error => {console.error(error)})
  
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
