const likeButtonHandler = async (event) => {
  event.preventDefault();

  const currUser = await fetch('/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', }
  });
  //console.log(currentUser);
  const liked_id = currUser.id;

  //const sender_firstName = "Daniel";
  //const sender_lastName = "Bradley";
  ////console.log(sender_id, sender_firstName, sender_lastName);

  const likedButton = document.querySelectorAll('.like');
 //const liked_id = likes.id;


  //if (likedButton.clicked == true) {
  //  currUser.matched = true;
  //  console.log('true');
    const response = await fetch('/api/user/notification', {
      method: 'POST',
      body: JSON.stringify({ liked_id }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      console.log('like added')
    } else {
      addListener(response.statusText);
   }
  //}
};

document
  .querySelector('.like')
  .addEventListener('click', likeButtonHandler);

