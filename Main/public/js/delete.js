
const deleteB = document.querySelector("#delete_button");
console.log(deleteB)

const deletebutton = async (event) => {
  const userID =  event.target.getAttribute("data-id")
  console.log(userID);
  const response = await fetch(`/delete/${userID}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
    alert("You have deleted your account. See you soon!");
  } else {
    alert(response.statusText);
  }
};

deleteB.addEventListener('click', deletebutton);