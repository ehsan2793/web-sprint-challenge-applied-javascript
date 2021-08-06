const Tabs = (topics) => {
 

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  
  
const parentDiv = document.createElement('div');
parentDiv.className = 'topics';
  topics.forEach(topic => {
    const div = document.createElement('div')
    div.className = 'tab';
    div.textContent = topic;
    parentDiv.appendChild(div)
  })
  

  

 

  


 
 
  return parentDiv
}


const tabsAppender = (selector) => {
  axios.get('http://localhost:5000/api/topics')
  .then(response => {
    const newTabs = Tabs(response.data.topics)
    document.querySelector(selector).appendChild(newTabs);

    
      // document.querySelector(selector).appendChild(newTabs);
      
    // response.data.topics.forEach(item => {
    //   const topic = Tabs(item)
    // //  console.log(topic)
    //  document.querySelector(selector).appendChild(topic);
    // })
    

  })
    .catch(error => console.error(error));
  

  
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the responses, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  
  
  // return viewtabs
}

export { Tabs, tabsAppender }
