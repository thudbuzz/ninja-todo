const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input') // grab the input field

const generateTemplate = todo => {

  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `

  list.innerHTML += html
}

addForm.addEventListener('submit', e => {
  e.preventDefault()
  const todo = addForm.add.value.trim() // trim removes white space

  if (todo.length) // check the user has entered a todo (does it have length?)
    generateTemplate(todo)
  addForm.reset()
})

// delete todos

list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove() // removes the li element because of parenElement
  }
})

const filterTodos = (term) => {

  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term)) // shows todos that do NOT include the search term
    .forEach((todo) => todo.classList.add('filtered')) // adds class of filtered to those that don't match

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term)) // shows todos that do include the search term
    .forEach((todo) => todo.classList.remove('filtered')) // removes class of filtered to those that don't match

}

//keyup event
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase()
  filterTodos(term)
})