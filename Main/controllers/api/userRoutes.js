const router = require('express').Router();
const { User, Notification } = require('../../models');

router.post('/signup', async (req, res) => {

  try {
    const dbUserData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      city: req.body.city,
      preferred_pronoun: req.body.preferred_pronoun,
      hobbies: req.body.hobbies,
      dating_or_friendship: req.body.dating_or_friendship,
      interested_in: req.body.interested_in,
      beers_name: req.body.beers_name,
      willing_to_grab_a_pint: req.body.willing_to_grab_a_pint,
      matched: req.body.matched,
      user_image: req.body.user_image,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.first_name = dbUserData.first_name;
      req.session.last_name = dbUserData.last_name;
      req.user = dbUserData;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.post('/notification', async (req, res) => {
  
  try {
   
    const likeData = await Notification.create({
      user_id: req.body.liked_id,
      sender_id: req.session.user_id,
      sender_firstName: req.session.first_name,
      sender_lastName: req.session.last_name,
    });
    // req.session.save(() => {
    //   req.session.loggedIn = true;
    //   req.user = likeData;
    res.status(200).json(likeData);
    //})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  // try {
  const userData = await User.findOne({ where: { email: req.body.email } });
  
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
        req.session.first_name = userData.first_name;
       req.session.last_name = userData.last_name;
      req.user = userData;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  // } catch (err) {
  //   res.status(400).json(err);
  // }
});



router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
