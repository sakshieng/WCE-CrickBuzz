
let calc = () => {
    var value = document.getElementById("inp").value;
    let node = document.createElement('li');
    let nodeContent = document.createTextNode(`${value}`);
    node.appendChild(nodeContent);
    let node2 = document.createElement('button');
    let nodeContent2 = document.createTextNode('delete');
    node2.appendChild(nodeContent2);
    var newVal = document.getElementById('list').appendChild(node);
    var newVal = document.getElementById('list').appendChild(node2);
    node2.className = 'btn';
    node2.id = 'del';
}
