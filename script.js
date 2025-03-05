const form = document.querySelector('form');

// form jab bhi submit hota hai to post type se ya get type se submit hota hai aur jb bhi submit hota hai to uski value url par db main ya server ke paas chali jaati hai to usko hume rokna hota hai to jo bhi default action hai form ka use rok lo

// this usecase will give you empty in height so write in under the form
// const height = parseInt(document.querySelector('#height').value) 

form.addEventListener('submit', function (e) {
  e.preventDefault();//default action rok lo

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const person = document.querySelector('#person');

  if (height === '' || height < 0 || isNaN(height)) {//old techniwue heigh!=nan
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);//ye 2 decimal value tak hi dihayega
    //show the result +
    results.innerHTML = `<span>Your BMI is : ${bmi}</span>`;


    // alert(bmi)

    if (bmi>=24.9){
      person.innerHTML = `<span>Your are Over Weight!!</span>`;
    }
    else if (bmi<=18.6){
      person.innerHTML = `<span>Your are Under Weight!!</span>`;
    }
  
    else{
      person.innerHTML= `<span>Your are Normal  </span>`
    }
  }
});
