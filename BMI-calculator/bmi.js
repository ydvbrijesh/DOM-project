const forms =document.querySelector('form')

forms.addEventListener('submit' ,(e)=>{
    e.preventDefault()
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const result = document.querySelector('#result')

if (height <= 0 || isNaN(height)) {
    result.innerHTML = 'please entre a valid height'
    result.style.color = 'red'; 
} else if(weight <= 0  || isNaN(weight)){
    result.innerHTML = 'please entre a valid weight'
    result.style.color = 'red';
} else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
   if (bmi < 18.6) {
    result.innerHTML = `your bmi is : ${bmi} - you are under weight`
    result.style.color = 'orange'
   } else if (bmi > 24.9) {
    result.innerHTML = `your bmi is : ${bmi} - you are overweight`
    result.style.color = 'purple'
   } else {
    result.innerHTML = `your bmi is : ${bmi} - you have a normal weight`
    result.style.color = `green`
   }
}

})

