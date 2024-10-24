const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

const textColor = document.querySelectorAll('h1, h2'); // Select all heading elements


buttons.forEach( (button)=>{
button.addEventListener('click', ( (e)=>{   /*This function receives the event object e, which contains information about the event that occurred.*/
   
    // console.log(e)  
    // console.log(e.target) // e.target: Refers to the element that triggered the event (the button that was clicked)
textColor.forEach((heading) =>{
    heading.style.color = 'white'
})

switch (e.target.id) {
  case "red":
    body.style.backgroundColor = "red"
    break;
  case "yellow":
    body.style.backgroundColor = "yellow"
    textColor.forEach((heading)=>{
      heading.style.color = 'black'
    })

    break;
  case "green":
    body.style.backgroundColor = "green"
    break;
  case "blue":
    body.style.backgroundColor = "blue"
    break;
  case "orange":
    body.style.backgroundColor = "orange"
    textColor.forEach((heading)=>{
      heading.style.color = 'black'
    })

    break;
  case "pink":
    body.style.backgroundColor = "pink"
    textColor.forEach((heading)=>{
      heading.style.color = 'black'
    })

    break;


  default:
    console.log(`no color found`);
    
    break;
}

//       if (e.target.id == 'red') {
//         body.style.backgroundColor = "red"
//       } else if (e.target.id == 'yellow') {
//          body.style.backgroundColor = "yellow"
//          textColor.forEach((heading)=>
//             heading.style.color = 'black'
//             )
//       }
//        else if (e.target.id == 'green') {
//          body.style.backgroundColor = "green"
//       }
//        else if (e.target.id == 'blue') {
//          body.style.backgroundColor = "blue"
//       }
//        else if (e.target.id == 'orange') {
//          body.style.backgroundColor = "orange"
//           textColor.forEach((heading)=>
//         heading.style.color = 'black'
//         )
       
//       }
//        else if (e.target.id == 'pink') {
//          body.style.backgroundColor = "pink"
//         textColor.forEach((heading)=>
//         heading.style.color = 'black'
//     )
//       }
     

} ))     
} )
