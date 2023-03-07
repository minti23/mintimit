const form = document.getElementById("my-form");
const submitButton = form.querySelector('button[type="submit"]');

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // prevent default form submission behavior

  const name = form.elements["name"].value;
  const password = form.elements["password"].value;

  const formData = {
    name: name,
    password: password,
  };

  let submissions = localStorage.getItem("submissions");
  if (submissions) {
    submissions = JSON.parse(submissions);
  } else {
    submissions = [];
  }

  submissions.push(formData);
  localStorage.setItem("submissions", JSON.stringify(submissions));
  localStorage.setItem("recentName", name); // store most recent name

  console.log(submissions);

  // window.location.href = "hi.html";
  window.open("hi.html", "_blank").focus();
});
