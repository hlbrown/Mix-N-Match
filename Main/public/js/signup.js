 const signupFormHandler = async (event) => {
  event.preventDefault();
     
    const first_name = document.querySelector('#first_name-signup').value.trim();
    const last_name = document.querySelector('#last_name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const age = document.querySelector('#age-signup').value.trim();
    const city = document.querySelector('#city-signup').value.trim();
    const preferred_pronoun = document.querySelector('#preferred_pronoun-signup').value.trim();
    const hobbies = document.querySelector('#hobbies-signup').value.trim();
    const dating_or_friendship = document.querySelector('#dating_friendship-signup').value.trim();
    const interested_in = document.querySelector('#interested_in-signup').value.trim();
    const beers_name = document.querySelector('#beers_name-signup').value.trim();



      // Select your input type file and store it in a variable
    const input = document.getElementById('myfile');

      // This will upload the file after having read it
    const upload = (file) => {
      console.log(file)
      const data = new FormData();
      data.append('image-raw', file);

      fetch('/api/upload', { // Your POST endpoint
      method: 'POST',
      body: data // This is your file object
      
    }).then(
    response => response.json() // if the response is a JSON object
    ).then(
      () => document.location.replace('/')
    ).catch(
      error => console.log(error) // Handle the error response object
    );
  };

    // Event handler executed when a file is selected
    // const onSelectFile = () => 
    // upload(input.files[0]);


     if (first_name && last_name && email && password && age && city && preferred_pronoun && hobbies && dating_or_friendship && interested_in && beers_name ) {
         const response = await fetch('/api/user/signup', {
             method: 'POST',
             body: JSON.stringify({ first_name, last_name, email, password, age, city, preferred_pronoun, hobbies, dating_or_friendship, interested_in, beers_name}),
             headers: { 'Content-Type': 'application/json' },
         });

         if (response.ok) {
          upload(input.files[0]);

            //  document.location.replace('/');
         } else {
             alert(response.statusText);
         }
     }

    
};
 

  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  