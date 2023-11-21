const submit = document.getElementById('comment-form')
const box = document.getElementById('comment-input')
const number = document.getElementById('counter')
const heart = document.getElementById('heart')
const likeList = document.querySelector('ul.likes')
const up = document.getElementById('plus')
const down = document.getElementById('minus')



//comment function
submit.addEventListener('submit', (event)=>{
    const list = document.getElementById('list')
    const element = document.createElement('p')
    const node = document.createTextNode(box.value)
    event.preventDefault()
    element.appendChild(node)
    list.appendChild(element)
})

//counter function
let counter = 0
    let display = setInterval(function(){
    counter++
    number.innerHTML = counter 
}, 1000)


//like button function
const likeNum = {}
heart.addEventListener('click', (event)=>{
    if(likeNum[counter]){
        likeNum[counter]++
        document.getElementById(counter).textContent = `You liked ${counter}, it has been liked ${likeNum[counter]} times`
    }else{
    const element = document.createElement('li')
    likeNum[counter]=1
    const node2 = document.createTextNode(number.innerHTML)
    element.textContent = `You liked ${counter}, it has been liked ${likeNum[counter]} times`
    element.id = counter
    
    likeList.appendChild(element)}
    console.log(likeNum)
})

//up and downs
up.addEventListener('click', ()=>{
    number.innerHTML = counter+=1
})
down.addEventListener('click', ()=>{
    number.innerHTML = counter-=1
})
    
//pause!
const pauseButton = document.getElementById('pause');

function her(string){
    const go = document.getElementById(string)
    go.addEventListener('click', ()=>{
        display = setInterval(() => {
            counter++
            number.innerHTML = counter 
          }, 1000)
        go.id = 'pause'
        go.textContent = 'pause'
    })
}


pauseButton.addEventListener('click', () => {
  clearInterval(display);
  pauseButton.id = 'resume';
  pauseButton.textContent = 'resume'
  her('resume')
});









