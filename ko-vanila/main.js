// Definir el ViewModel
function AppViewModel() {
    this.nombre = ko.observable('');
    this.nombreDos = ko.observable('');
    this.numerico = ko.observable(0);
    this.numeroDos = ko.observable();

}

function updateItemQty() {
    var currentQty = this.numeroDos();
    console.log(currentQty);
}

// Aplicar los bindings
ko.applyBindings(new AppViewModel());