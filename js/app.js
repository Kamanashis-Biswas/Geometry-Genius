//triangle
document.getElementById('btn-triangle').addEventListener('click',function(){
    const geometryName= document.getElementById('triangle-name').innerText;
    const triangleBaseString=document.getElementById('triangle-base-input').value;
    const triangleBase=parseInt(triangleBaseString);
    const triangleHeightString=document.getElementById('triangle-height-input').value;
    const triangleHeight=parseInt(triangleHeightString);

    const geometryArea=0.5*triangleBase*triangleHeight;
    diplayData(geometryName,geometryArea);
})

//Rectangle
document.getElementById('btn-rectangle').addEventListener('click',function(){
    const geometryName= document.getElementById('rectangle-name').innerText;
    const rectangleWeigthString=document.getElementById('rectangle-weigth-input').value;
    const rectangleWeigth=parseInt(rectangleWeigthString);
    const rectangleLengthString=document.getElementById('rectangle-length-input').value;
    const rectangleLength=parseInt(rectangleLengthString);

    const geometryArea=rectangleWeigth*rectangleLength;
    diplayData(geometryName,geometryArea);
})

//Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click',function(){
    const geometryName=document.getElementById('parallelogram-name').innerText;
    const parallelogramBaseString=document.getElementById('parallelogram-base-input').value;
    const parallelogramBase=parseInt(parallelogramBaseString);
    const parallelogramHeightString=document.getElementById('parallelogram-height-input').value;
    const parallelogramHeight=parseInt(parallelogramHeightString);

    const geometryArea= parallelogramBase*parallelogramHeight;
    diplayData(geometryName,geometryArea);
})

//Rhombus
document.getElementById('btn-rhombus').addEventListener('click',function(){
    const geometryName=document.getElementById('rhombus-name').innerText;
    const rhombusDfirstString=document.getElementById('rhombus-dfirst-input').value;
    const rhombusDfirst=parseInt(rhombusDfirstString);
    const rhombusDlastString=document.getElementById('rhombus-dlast-input').value;
    const rhombusDlast=parseInt(rhombusDlastString);

    const geometryArea= 0.5*rhombusDfirst*rhombusDlast;
    diplayData(geometryName,geometryArea);
})





function diplayData(geometryName, geometryArea){
    const container = document.getElementById('table-container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${1}</td>
    <td>${geometryName}</td>
    <td>${geometryArea}</td>
    `;
    container.appendChild(tr);
}