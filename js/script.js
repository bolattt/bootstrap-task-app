const tr = document.createElement('tr')
$('#myList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

const ul = document.getElementById('todoList')
const button = document.getElementById('submitBtn')

button.addEventListener('click',(e)=> {
    e.preventDefault();
    const name = document.getElementById('taskName').value;
    const textNode = document.createTextNode(name)
    const li = document.createElement('li')
    li.append(textNode)
    li.classList.add('list-group-item')
    ul.append(li)
})


