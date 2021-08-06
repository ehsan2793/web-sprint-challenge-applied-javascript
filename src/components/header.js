const Header = (title, date, temp) => {
  
  const head =document.createElement('div');
  const da = document.createElement('span')
  const tileOfPage = document.createElement('h1')
  const temperature = document.createElement('span')

  head.classList.add('header');
  da.classList.add('date');
  temperature.classList.add('temp')
  
  da.textContent = date;
  tileOfPage.textContent = title
  temperature.textContent = temp


  head.appendChild(da)
  head.appendChild(tileOfPage)
  head.appendChild(temperature)

  return head;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
 const header = Header('Lambda Times','Augest 6,2021', "85º");
 document.querySelector(selector).appendChild(header);
 
  // TASK 2 
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
 return header
}

export { Header, headerAppender }
