 
 
//  let arr = []

 let chores =[

    'make bed', 'dishwasher', 'clean kitchen sink', 'clean bathroom sink', 'clean fridge', 'laundry', 'sweep', 'empty roomba', 'empty dustbuster',
    'run roomba', 'litterbox', 'clean toilet', 'clean tub', 'dust for five minutes', 'read 7 minutes', 'meditate two minutes', 'nails', 'clean bathroom floor', 
    'books 3 minutes', 'yoga', 'clean kitchen counter', 'clean bathroom counter', 'clean mirror', 'take out compost', 'take out recycling', 'clean under kitchen sink', 
    'take out litter bag and set up new one', 'gather mail',
]

let arr =[

    'make bed', 'dishwasher', 'clean kitchen sink', 'clean bathroom sink', 'clean fridge', 'laundry', 'sweep', 'empty roomba', 'empty dustbuster',
    'run roomba', 'litterbox', 'clean toilet', 'clean tub', 'dust for five minutes', 'read 7 minutes', 'meditate two minutes', 'nails', 'clean bathroom floor', 
    'books 3 minutes', 'yoga', 'clean kitchen counter', 'clean bathroom counter', 'clean mirror', 'take out compost', 'take out recycling', 'clean under kitchen sink', 
    'take out litter bag and set up new one', 'gather mail',
]

//  console.log(document.getElementById('submit-task'))

// if( document.getElementById('submit-task').value.length == 0){
//     document.getElementById('submit-task').disabled = true
//     document.getElementById('random').disabled = true
//     document.getElementById('message').innerHTML = "Add a task to get started"
// }
// else{
//     document.getElementById('submit-task').disabled = false
//     document.getElementById('random').disabled = false
//     document.getElementById('message').innerHTML = ""
// }


 let add_task = function(){
    let get_input = document.getElementById('add-task').value


    console.log(get_input.length)
    if(get_input.length !== 0){

    } 

  
    arr.push(get_input)
    let ele_ol = document.getElementById('adding-list')

    let htmlString =``;

    for(let i =0; i<arr.length; i++){
        htmlString += `<li>${arr[i]}</li>`
    }
    ele_ol.innerHTML = htmlString
    document.getElementById('add-task').value = ''
    }


 


// let input = document.getElementById('add-task')
// input.addEventListener("keypress", (event)=>{
// if(event.key === "Enter"){
//     event.preventDefault()

//     if(input.value.length !== 0){
//         add_task()
//         document.getElementById('message').innerHTML = ""

//     }
//     else{
//         document.getElementById('message').innerHTML = "Please add a task to get started"

//     }


// }
// })

 let done_adding = function(){
    console.log('done adding')
    document.getElementById('adding-list').classList.toggle('hide')
    document.getElementById('done-adding').classList.toggle('hide')

    let ele_ol = document.getElementById('task-list')
    let htmlString ='';

    for(let i=0; i<arr.length; i++){
        htmlString += `<li>${arr[i]}</li> <button onclick="pass(${i})">Pass</button><button onclick="done(${i})">Done</button>  `
    }
   ele_ol.innerHTML = htmlString



 }

 let pass = function(param){
    console.log(param)
 }

let done = function(param){
    console.log(param)
}

let getRandomInt = function(max){
    return Math.floor(Math.random() * max)
}

// console.log(getRandomInt(arr.length))


let get_task = function(){
  
    let task_num = getRandomInt(arr.length)

    console.log(arr[task_num])
    let task = arr[task_num]

    let ele_task = document.getElementById('task')
    ele_task.innerHTML = task
}
