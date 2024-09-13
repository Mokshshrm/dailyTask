

const first_container = document.getElementById('first-container');

let prevIndex = "#A0";
let length = 700;


function getRandomIndex() {

    let randomIndex;

    do {
        randomIndex = "#" + Math.floor(Math.random() * 16777215).toString(16);
        console.log(randomIndex)
    } while (prevIndex === randomIndex);

    return randomIndex;

}



function onDragOver(event) {
    event.preventDefault();
}
function setDataasId(event) {
    event.dataTransfer.setData('Id', event.target.getAttribute('show'));
}



function dropMethod(event) {

    const id = event.dataTransfer.getData('Id');
    const node = document.querySelector(`[show=${id}]`)

    length = Math.max(length - 30, 30);

    node.style.width = `${length}px`;
    node.style.height = `${length}px`;

    event.target.appendChild(node);

    prevIndex = getRandomIndex();

    AddCircle();
}
function AddCircle() {

    const newNode = document.createElement('div');

    newNode.style.backgroundColor = `${prevIndex}`;
    newNode.classList.add('circle');
    newNode.classList.add('a')
    newNode.draggable = true;

    newNode.setAttribute('show', 'circleAppear')

    newNode.addEventListener('dragstart', (event) => {
        setDataasId(event);
    })

    first_container.append(newNode);
    return;
}