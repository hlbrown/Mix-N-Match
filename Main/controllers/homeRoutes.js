const router = require('express').Router();
const { Matches, User, Notification } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  console.log(req.session.user_id);
  
  try {
    // Get all suggested matches and JOIN with user data
    const currentUser = await User.findOne({ where: { id: req.session.user_id } });
    const currUser = currentUser.get({ plain: true });
    console.log(currUser)
    //console.log(currentUser);
    const userData = await User.findAll({
      where: { beers_name: currUser.beers_name, interested_in: currUser.preferred_pronoun }
    
    });
    // Serialize data so the template can read it
    const users = userData.map((user) => user.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('homepage', {
      users,
      currentUser: currUser,
      logged_in: req.session.logged_in 
    });
    return(currUser, userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/notification', async (req, res) => {
  try {
    const notiData = await Notification.findByPk(req.params.id);
    const likes = notiData.get({ plain: true });
    res.render('notification', {
      likes,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})


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

  router.delete('/delete/:id', async (req, res) => {
    try{
      const userData = await User.destroy({
        where: { id: req.params.id,
                    }});
  
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
      console.log("helloworld")
      console.log(err)
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
  console.log("login")
    res.render('login');
  });
router.get('/signup', (req, res) => {
  console.log("signup")
  res.render('signup');
});
//router.get('/notification', (req, res) => {
//  console.log("notification")
//  res.render('notification');
//});

  module.exports = router;
