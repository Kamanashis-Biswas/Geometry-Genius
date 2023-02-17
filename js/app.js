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