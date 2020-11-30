
let state = {count: 0}

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}


// let action = {type: 'INCREASE_COUNT'}

// state = changeState(state, action)

function dispatch(action){
  state = changeState(state, action)
  render()
}


function render(){
  document.body.textContent = state.count 
}

let button = document.createElement('BUTTON')
  // button.addEventListener('click', () => {
  //   console.log('click')
  // })
  button.innerText = "INCREASE"

document.body.append(button)
render()
