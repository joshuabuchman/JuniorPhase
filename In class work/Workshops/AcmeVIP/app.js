  
const employees = [
  { id: 1, name: 'moe'},
  { id: 2, name: 'larry'},
  { id: 4, name: 'shep'},
  { id: 3, name: 'curly'},
  { id: 5, name: 'groucho'},
  { id: 6, name: 'harpo'},
  { id: 8, name: 'shep Jr.'},
  { id: 99, name: 'lucy'}
];

const list = document.querySelector('#employees');

list.addEventListener('click', (ev)=> {

  const target = ev.target;
  if(target.tagName === 'LI'){
    
    const idx = [...list.children].indexOf(target);
    for(let i=0;i<employees.length;i++)
    {count = 0
      if(targe)
        count++
      {
        employees[idx].favorite = !employees[idx].favorite;
      }
    }
    
    
    
  }
  render();
});

const render = ()=> {
  const html = employees.map( employee => {
    return `
      <li data-id='${employee.id}' ${ employee.favorite ? "class='favorite'": ''}>${ employee.name }</li>
    `;
  }).join('');

  list.innerHTML = html;
};

render();