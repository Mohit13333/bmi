const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const weightGuide=document.querySelector('#weight-guide');
  const btn=document.querySelector('.btn');
  function handleClick(){
    window.location.reload();
  }
  btn.addEventListener('click', handleClick);

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    {
      if(bmi<=18.6){
        weightGuide.innerHTML=`<h1
        style="
        background-color:red;
        color:white;
        width:200px;
        padding:30px 50px;
        border-radius:10px;
              "
        >UnderWeight</h1>`;
       }else if(bmi>18.6 && bmi<=24.9){
         weightGuide.innerHTML=`<h1
         style="
        background-color:green;
        color:white;
        width:250px;
        padding:30px 50px;
        border-radius:10px;
              "
         >Normal Weight</h1>`;
       }else{
         weightGuide.innerHTML=`<h1
         style="
        background-color:red;
        color:white;
        width:200px;
        padding:30px 50px;
        border-radius:10px;
              "
         >Overweight</h1>`;
       }
    }
  }
});
