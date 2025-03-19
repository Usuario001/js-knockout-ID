// Definir el ViewModel
function AppViewModel() {
    this.nombre = ko.observable('');
}

// Aplicar los bindings
ko.applyBindings(new AppViewModel());