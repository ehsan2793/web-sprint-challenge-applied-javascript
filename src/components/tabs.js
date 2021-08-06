const Tabs = (topics) => {

const topic = document.createElement('div');
const div0 = document.createElement('div');


div0.textContent = topics

topic.classList.add('topics');
div0.classList.add('tab')


topic.appendChild(div0);



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
  return topic
}


const tabsAppender = (selector) => {
  axios.get('http://localhost:5000/api/topics')
  .then(response => {
    // console.log(response.data.topics)
    response.data['topics'].forEach(item => {
      const viewtabs = Tabs(item)
      document.querySelector(selector).appendChild(viewtabs);
      return viewtabs;
    })
    // const viewtabs = Tabs(response['data']['topics'])
    // console.log(viewtabs)
    // console.log(viewtabs)
    // console.log(viewtabs)
    // console.log(viewtabs)
    // document.querySelector(selector).appendChild(viewtabs);
    
  })
    .catch(error => console.error(error));
  
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  
  // return viewtabs
}

export { Tabs, tabsAppender }
