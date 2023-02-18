//triangle
document.getElementById('btn-triangle').addEventListener('click', function () {
    serial += 1;
    const geometryName = document.getElementById('triangle-name').innerText;
    const triangleBaseString = document.getElementById('triangle-base-input').value;
    const triangleBase = parseInt(triangleBaseString);
    const triangleHeightString = document.getElementById('triangle-height-input').value;
    const triangleHeight = parseInt(triangleHeightString);

    const geometryArea = 0.5 * triangleBase * triangleHeight;
    diplayData(geometryName, geometryArea);
})

//Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function () {
    serial += 1;
    const geometryName = document.getElementById('rectangle-name').innerText;
    const rectangleWeigthString = document.getElementById('rectangle-weigth-input').value;
    const rectangleWeigth = parseInt(rectangleWeigthString);
    const rectangleLengthString = document.getElementById('rectangle-length-input').value;
    const rectangleLength = parseInt(rectangleLengthString);

    const geometryArea = (rectangleWeigth * rectangleLength).toFixed(2);
    diplayData(geometryName, geometryArea);
})

//Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    serial += 1;
    const geometryName = document.getElementById('parallelogram-name').innerText;
    const parallelogramBaseString = document.getElementById('parallelogram-base-input').value;
    const parallelogramBase = parseInt(parallelogramBaseString);
    const parallelogramHeightString = document.getElementById('parallelogram-height-input').value;
    const parallelogramHeight = parseInt(parallelogramHeightString);

    const geometryArea = (parallelogramBase * parallelogramHeight).toFixed(2);
    diplayData(geometryName, geometryArea);
})

//Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function () {
    serial += 1;
    const geometryName = document.getElementById('rhombus-name').innerText;
    const rhombusDfirstString = document.getElementById('rhombus-dfirst-input').value;
    const rhombusDfirst = parseInt(rhombusDfirstString);
    const rhombusDlastString = document.getElementById('rhombus-dlast-input').value;
    const rhombusDlast = parseInt(rhombusDlastString);

    const geometryArea = (0.5 * rhombusDfirst * rhombusDlast).toFixed(2);
    diplayData(geometryName, geometryArea);
})

//Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function () {
    serial += 1;
    const geometryName = document.getElementById('pentagon-name').innerText;
    const pentagonPerimeterString = document.getElementById('pentagon-perimeter-input').value;
    const pentagonPerimeter = parseInt(pentagonPerimeterString);
    const pentagonApothemString = document.getElementById('pentagon-apothem-input').value;
    const pentagonApothem = parseInt(pentagonApothemString);

    const geometryArea = (0.5 * pentagonPerimeter * pentagonApothem).toFixed(2);
    diplayData(geometryName, geometryArea);
})

//Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function () {
    serial += 1;
    const geometryName = document.getElementById('ellipse-name').innerText;
    const ellipseFirstInputString = document.getElementById('ellipse-first-input').value;
    const ellipseFirstInput = parseInt(ellipseFirstInputString);
    const ellipseLastInputString = document.getElementById('ellipse-last-input').value;
    const ellipseLastInput = parseInt(ellipseLastInputString);

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


//get data
function getData(){
    
}


//show display data
function diplayData(geometryName, geometryArea) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${geometryName}</td>
    <td>${geometryArea}</td>
    `;
    container.appendChild(tr);
}
let serial = 0;