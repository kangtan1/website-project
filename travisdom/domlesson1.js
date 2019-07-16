let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
// create a event for additem

form.addEventListener('submit', addItem);

// create an event for delete item

itemList.addEventListener('click', deleteItem);

//create an event for filter the item

filter.addEventListener('keyup', filterItems);
// create a function

function addItem(e) {
    e.preventDefault();
    // get input value
    let newItem = document.getElementById('item').value;

    // create a variable li

    let li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // li append with node input value
    li.append(document.createTextNode(newItem));
    // create a delete button

    let deletebtn = document.createElement('button');
    // add class
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    // add X into deletebtn
    deletebtn.append(document.createTextNode('X'));
    // append button into li
    li.append(deletebtn);
    // append li into ul
    itemList.appendChild(li);
}

//create a function to use the delete button
function deleteItem(e) {
    if (e.target.classList.contains('delete'))
        if (confirm('are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
}
// filter function
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}