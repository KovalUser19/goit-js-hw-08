import throttle from 'lodash.throttle';

const form = document.querySelector("form");
valueInputParsed()
form.addEventListener('input', throttle((evt) => {
   const valueInput = { email:form.email.value, message:form.message.value };
  localStorage.setItem("feedback-form-state", JSON.stringify(valueInput));
}, 500));


function valueInputParsed() {
  const formValue = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (formValue) {
     form.email.value = formValue.email;
     form.message.value = formValue.message;
  }

}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log({ email: form.email.value, message: form.message.value });
  localStorage.removeItem("feedback-form-state");
  form.reset();
});
