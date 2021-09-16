// const Conversations = require('../models/conversations');
// const Matches = require('./matches');
const InterestedInPronoun = require('./interestedInPronoun');
const Pronoun = require('./pronoun');
const InterestedInRelation = require('./interestedInRelation');
const RelationshipType = require('./relationshipType');
const User = require('./user');
const Beers = require('./beers');
const FavoriteBeer = require('./favoriteBeer');
const Photo = require('./photo');

Pronoun.belongsTo(User, {
  foreignKey: 'user_id',
});

InterestedInPronoun.belongsTo(User, {
  foreignKey: 'user_id',
});

RelationshipType.belongsTo(User, {
  through: {
    model: InterestedInRelation,
    unique: false,
  },

  as: 'relationshipType_id',
});

InterestedInRelation.belongsTo(User, {
  foreignKey: 'relationshipType_id',
});

Beers.belongsToMany(User, {
  through: {
    model: FavoriteBeer,
    unique: false,
  },

  as: 'beers_id',
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

User.belongsToMany(User, {
  through: {
    model: User,
    unique: false,
  },

  as: 'user_id',
});

module.exports = {
  User,
  Pronoun,
  InterestedInPronoun,
  InterestedInRelation,
  RelationshipType,
  Beers,
  FavoriteBeer,
  // Matches,
  // Conversations,
  Photo,
};
