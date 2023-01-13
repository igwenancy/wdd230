const input = document.getElementsById("#favchap");
const button = document.getElementsByTagName("button");
const list = document.getElementsByClassName("#list");

button.addEventListener('click', function() {
    if (input.value != "") {
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "❌";

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function() {
            listElement.removeChild(li);
            input.focus();
        })
    }

    input.focus();
    input.value="";
});




