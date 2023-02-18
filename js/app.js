//triangle
document.getElementById('btn-triangle').addEventListener('click', function () {
    serial += 1;
    const geometryName = getInnerText('triangle-name');
    const triangleBase =getInputValue('triangle-base-input');
    if(isNaN(triangleBase)){
        alert("Provide a number for Triangle Base");
        return;
    }
    const triangleHeight =getInputValue('triangle-height-input');
    if(isNaN(triangleHeight)){
        alert("Provide a number for Triangle Height");
        return;
    }
    const geometryArea = 0.5 * triangleBase * triangleHeight;
    diplayData(geometryName, geometryArea);
})

//Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function () {
    serial += 1;
    const geometryName = getInnerText('rectangle-name');
    const rectangleWeigth =getInputValue('rectangle-weigth-input');
    if(isNaN(rectangleWeigth)){
        alert("Provide a number for Rectangle Weigth");
        return;
    }
    const rectangleLength =getInputValue('rectangle-length-input');
    if(isNaN(rectangleLength)){
        alert("Provide a number for Rectangle Length");
        return;
    }

    const geometryArea = (rectangleWeigth * rectangleLength).toFixed(2);
    diplayData(geometryName, geometryArea);
})

//Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    serial += 1;
    const geometryName = getInnerText('parallelogram-name');
    const parallelogramBase =getInputValue('parallelogram-base-input');
    const parallelogramHeight =getInputValue('rectangle-length-input');

    const geometryArea = (parallelogramBase * parallelogramHeight).toFixed(2);
    diplayData(geometryName, geometryArea);
})

//Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function () {
    serial += 1;
    const geometryName = getInnerText('rhombus-name');
    const rhombusDfirst =getInputValue('rhombus-dfirst-input');
    const rhombusDlast =getInputValue('rhombus-dlast-input');

    const geometryArea = (0.5 * rhombusDfirst * rhombusDlast).toFixed(2);
    diplayData(geometryName, geometryArea);
})

//Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function () {
    serial += 1;
    const geometryName = getInnerText('pentagon-name');
    const pentagonPerimeter =getInputValue('pentagon-perimeter-input');
    const pentagonApothem =getInputValue('pentagon-apothem-input');

    const geometryArea = (0.5 * pentagonPerimeter * pentagonApothem).toFixed(2);
    diplayData(geometryName, geometryArea);
})

//Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function () {
    serial += 1;
    const geometryName = getInnerText('ellipse-name');
    const ellipseFirstInput =getInputValue('ellipse-first-input');
    const ellipseLastInput =getInputValue('ellipse-last-input');

    const pi = 3.1416;
    const geometryArea = (pi * ellipseFirstInput * ellipseLastInput).toFixed(2);
    diplayData(geometryName, geometryArea);

})

//Hover Random Background Color for card
const container = document.querySelectorAll(".card");
container.forEach((f, index) => {
    f.addEventListener("mouseenter", (e) => {
        e.target.classList.remove("bg-base-100");
        e.target.style.backgroundColor = rc();
    });
    f.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = "";
        e.target.classList.add("bg-base-100");
    });
});

const rc = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
}


//common function for input value
function getInputValue(id){
    const inputTypeValue=document.getElementById(id);
    const inputTypeInnerElement=inputTypeValue.value
    const inputTypeOfNumber=parseInt(inputTypeInnerElement);
    inputTypeValue.value ="";
    return inputTypeOfNumber;
};

function getInnerText(id){
    const heading=document.getElementById(id);
    const headingInnerText=heading.innerText;
    return headingInnerText
}

//show display data
function diplayData(geometryName, geometryArea) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${geometryName}</td>
    <td>${geometryArea}<span> cm<sup>2</sup></span></td>
    <td><button class="btn btn-primary">convert to m<sup>2</sup></button></td>
    `;
    container.appendChild(tr);
}
let serial = 0;