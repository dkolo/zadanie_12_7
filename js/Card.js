// KLASA KANBAN CARD
function Card(id, name, columnId) {
    var self = this;

    this.id = id;
    this.columnId = columnId;
    this.name = name;
    this.element = createCard();

    function createCard() {
        var card = $('<li class="card"></li>');
        var cardDeleteBtn = $('<button class="btn-delete">x</button>');
        var cardEditBtn = $('<button class="btn-edit">Edit</button>');
        var cardDescription = $('<p class="card-description"></p>');

        cardDeleteBtn.click(function() {
            self.removeCard();
        });
        // Event handler for editCard function
        cardEditBtn.click(function() {
            self.editCard(card);
        });

        // End of event handler for editCard function
        card.append(cardDeleteBtn);
        cardDescription.text(self.name);
        card.append(cardDescription);
        card.append(cardEditBtn);
        return card;
    }
}
Card.prototype = {
    //Start editCard function
    editCard: function(card) {
        var newCardName = prompt('Enter new task description');
        var self = this;
        this.name = newCardName;	
        $.ajax({
            url: baseUrl + '/card/' + self.id,
            method: 'PUT',
            data: {
            	//id: self.id,
                name: newCardName,
                bootcamp_kanban_column_id: self.columnId
            },
            success: function(response) {
                self.element.children('p').text(newCardName);
            }
        });
    },
    /*Przeniesione z Column.js
        this.element.text(card.element);
    */
    //End of editCard function
    removeCard: function() {
        var self = this;
        $.ajax({
            url: baseUrl + '/card/' + self.id,
            method: 'DELETE',
            success: function() {
                self.element.remove();
            }
        });
    }
};