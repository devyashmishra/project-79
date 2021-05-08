pizza_array = ["chicken tandori", "margarita pizza", "veggie pizza", "pepporoni pizza", "deluxe veggie pizza"]

function showmenu() {
    var i;
    i = "<ol class='menulist'>"
    pizza_array.sort();
    for (var j = 0; j < pizza_array.length; j++) {
        i = i + '<li>' + pizza_array[j] + '</li>'
    }
    i = i + "</ol>"
    document.getElementById("display_menu").innerHTML = i

}
function add_item() {
    var i;
    var item = document.getElementById("add_item").value
    pizza_array.push(item)
    pizza_array.sort()
    i = "<section class='cards'>"
    for (var j = 0; j < pizza_array.length; j++) {
        i = i + '<div class="card">' + '<Img src="pizzaimg.png">' + pizza_array[j] + '</div>'
    }
    i = i + "</section>"
    document.getElementById("display_addmenu").innerHTML = i

}