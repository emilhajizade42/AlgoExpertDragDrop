const dropZone = document.querySelectorAll(".drop-zone")
const dropItem = document.querySelectorAll(".item")
// dropZone.forEach(item =>{
//   item.addEventListener("click",function (e) {
//     console.log("hi");
//   })
//   item.ondrop = drop(e)
//   item.ondragover = allowDrop(e)
// })
// dropItem.forEach(item =>{
//   item.ondragstart = drag()
// })
// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


dropZone.forEach(item => {
  item.addEventListener("dragover", function (e) {
    e.preventDefault()
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    console.log("over");
  })

})
dropZone.forEach(item => {
  item.addEventListener("drop", function (e) {
    e.preventDefault()
    console.log("drop");
  })

})
dropItem.forEach(item => {
  item.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text", e.target.id);
    console.log("start");
  })
})