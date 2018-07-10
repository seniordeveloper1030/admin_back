module.exports = (app) => {
    const cards = require('../controllers/card.controller.js');

     // Create a new card
     app.post('/cards', cards.create);

     // Retrieve all cards
     app.get('/cards', cards.findAll);
 
     // Retrieve a single card with cardId
     app.get('/cards/:cardId', cards.findOne);
 
     // Retrieve cards with categoryId
     app.get('/cardsIn/:categoryId', cards.findCardsIn);
 
     // Update a card with cardId
     app.put('/cards/:cardId', cards.update);
 
     // Delete a card with cardId
     app.delete('/cards/:cardId', cards.delete);
}