// ! membuat button dengan Javascript
const myBody = document.body
const redRange = document.getElementsByName('red')[0];
const blueRange = document.getElementsByName('blue')[0];
const greenRange = document.getElementsByName('green')[0];
const span1 = document.getElementById('numberRed');
const span2 = document.getElementById('numberGreen');
const span3 = document.getElementById('numberBlue');



// const colorButton = document.createElement('button')
// colorButton.innerHTML = 'Mix The Color'
// colorButton.setAttribute('onclick' , 'mixColor()')
// myBody.append(colorButton)

function mixColor() {
    const redd  = intGenerator();
    const greenn  = intGenerator();
    const bluee  = intGenerator();
    myBody.style.backgroundColor = 'rgb('+redd+','+greenn+','+bluee+')';
    span1.innerHTML= redd;
    span2.innerHTML= greenn;
    span3.innerHTML= bluee
    blueRange.value = bluee;
    greenRange.value = greenn
    redRange.value = redd

}
// pembuat angka number antara 
function intGenerator() {
    const integer = Math.floor(Math.random() * 254 + 1)
    return integer;
}

redRange.addEventListener('input' , function () {
    const r = redRange.value;
    const b = blueRange.value;
    const g = greenRange.value;
    myBody.style.backgroundColor =  'rgb('+r+' , '+g+' , '+b+')';
    span1.innerHTML = r;
    
});
greenRange.addEventListener('input' , function () {
    const r = redRange.value;
    const b = blueRange.value;
    const g = greenRange.value;
    myBody.style.backgroundColor =  'rgb('+r+' , '+g+' , '+b+')';
    span2.innerHTML = g;
});
blueRange.addEventListener('input' , function () {
    const r = redRange.value;
    const b = blueRange.value;
    const g = greenRange.value;
    myBody.style.backgroundColor =  'rgb('+r+' , '+g+' , '+b+')';
    span3.innerHTML = b;
});



