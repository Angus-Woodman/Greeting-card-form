const form = document.querySelector('#my-form');
form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e){
  e.preventDefault();
  const form = e.target;

  form.style.display = "none";

  const name = form.greeting.value;
  const occasion = form.eventType.value;
  const message = form.message.value;

  const recipientName = document.getElementById('userName')
  recipientName.textContent = `Dear ${name}`;

  const occasionType = document.getElementById('occasionGreeting');
  const imageType = document.getElementById('cardImage');

  if(occasion === 'Birthday') {
    occasionType.textContent = "Happy Birthday!!";
    imageType.src = "happy-birthday.jpg"
  } else if(occasion === 'Christmas') {
    occasionType.textContent = "Merry Christmas!!";
    imageType.src = "christmas-card.jpg"
  } else if(occasion === 'Thank You Letter') {
    occasionType.textContent = "Thank You!!";
    imageType.src = "thankyou-card.jpg"
  } else {
    occasionType.textContent = "Happy Anniversary!!";
    imageType.src = "happy-anniversary-card.jpg"
  }
  const greeting = document.getElementById('greetingMessage')
  greeting.textContent = message;
}
