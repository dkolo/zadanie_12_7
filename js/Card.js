// KLASA KANBAN CARD
function Card(id, name) {
    var self = this;

    this.id = id;
    this.name = name;
    this.element = createCard();

    function createCard() {
        var card = $('<li class="card"></li>');
        var cardDeleteBtn = $('<button class="btn-delete">x</button>');
        var cardEditBtn = $('<button class="btn-edit">Edit</button>')
        var cardDescription = $('<p class="card-description"></p>');

        cardDeleteBtn.click(function() {
            self.removeCard();
        });
        // Event handler for editCard function
        /*cardEditBtn.click(function() {
                self.editCard(card);
            }*/

            // End of event handler for editCard function
            card.append(cardDeleteBtn); cardDescription.text(self.name); card.append(cardDescription);
            return card;
        }
    }
    Card.prototype = {
        //Start editCard function
        /*editCard: function(card) {
            var newCardName = prompt('Enter new task description');
            this.name = newCardName;
            event.preventDefault();
            $.ajax({
                    url: baseUrl + '/card/' + self.id,
                    method: 'PUT',
                    data: {
                        name: newCardName,
                        bootcamp_kanban_column_id: self.id
                    },
                    success: function(response) {
                        var card = new Card(response.id, newCardName);
                    });
            });*/
        /*Przeniesione z Column.js
        this.element.text(card.element);
    }*/
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