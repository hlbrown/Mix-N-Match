const router = require('express').Router();
const { Matches, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage', {
    users,
    logged_in: req.seesion.logged_in
  });
})

//router.get('/', async (req, res) => {
//  try {
//    // Get all projects and JOIN with user data
//    const matchesData = await Matches.findAll({
//    //   include: [
//    //     {
//    //       model: User,
//    //       attributes: ['name'],
//    //     },
//    //   ],
//    });
//
//    // Serialize data so the template can read it
//    const matches = matchesData.map((matches) => matches.get({ plain: true }));
//
//    // Pass serialized data and session flag into template
//    res.render('homepage', { 
//      profiles, 
//      logged_in: req.session.logged_in 
//    });
//  } catch (err) {
//    res.status(500).json(err);
//  }
//});
//


router.get('/matches/:id', async (req, res) => {
    try {
      const matchesData = await Matches.findByPk(req.params.id, {
        // include: [
        //   {
        //     model: User,
        //     attributes: ['name'],
        //   },
        // ],
      });
  
      const matches = matchesData.get({ plain: true });
  
      res.render('matches', {
        ...project,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });




// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Matches }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

  module.exports = router;
