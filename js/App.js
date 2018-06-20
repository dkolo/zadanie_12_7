// MODYFIKACJA URL API I NAGŁÓWKÓW

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '3122',
    'X-Auth-Token': '507764fa12e794c4df0e8e1a878fe0a5'
};

$.ajaxSetup({
    headers: myHeaders
});

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
        setupColumns(response.columns);
    }
});

// TWORZENIE KOLUMN

function setupColumns(columns) {
    columns.forEach(function(column) {
        var col = new Column(column.id, column.name);
        board.createColumn(col);
    });
}

function setupCards(col, cards) {
    cards.forEach(function(card) {
        var $card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
        col.addCard(card);
    });
}