
// const Conversations = require('../models/conversations');
// const Matches = require('./matches');
const InterestedInGender = require('./interestedInGender');
const Gender = require('./gender');
const InterestedInRelation = require('./interestedInRelation');
const RelationshipType = require('./relationshipType');
const User = require('./user');
const Beers = require('./beers');
const FavoriteBeer = require('./favoriteBeer');
const Photo = require('./photo')

Gender.belongsTo(User, {
    foreignKey: 'user_id',
});

InterestedInGender.belongsTo(User, {
    foreignKey: 'user_id',
});

RelationshipType.belongsTo(InterestedInRelation, {
    foreignKey: 'relationshipType_id',
});

InterestedInRelation.belongsTo(User, {
    foreignKey: 'relationshipType_id',
});

Beers.belongsTo(FavoriteBeer, {
    foreignKey: 'beers_id'
});

FavoriteBeer.belongsTo(User, {
    foreignKey: 'beers_id',
});

// User.hasMany(Matches, {

// });

// User.hasMany(Conversations, {

// });

Photo.belongsTo(User, {
    foreignKey: 'user_id',
});



module.exports = {
    User,
    Gender,
    InterestedInGender,
    InterestedInRelation,
    RelationshipType,
    Beers,
    FavoriteBeer,
    // Matches,
    // Conversations,
    Photo
  };