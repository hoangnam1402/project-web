const introDiv = document.querySelector('.intro')
const divP = document.querySelector('.intro p')
console.log(introDiv);
introDiv.addEventListener('mouseover', (e) => {
  divP.style = 'font-size: 20px';
  introDiv.addEventListener('mouseout', (e) => {
    divP.style = '';
  })

})  