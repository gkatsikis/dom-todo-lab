console.log('sanity check2')

const inp = document.querySelector("#important")

const butt = document.querySelector("#submit-button")

const list = document.querySelector("#todo-list")

const reset = document.querySelector("#reset")

const items = document.querySelector(".items")

butt.addEventListener('click', function(evt){
  const newLi = document.createElement('li')
  newLi.textContent = inp.value
  if(inp.value !== "") {
    document.querySelector('ul').appendChild
    (newLi)
    inp.value = ""
  }
})

reset.addEventListener('click', function(evt) {
  inp.value = ""
  document.removeChild('li')
})