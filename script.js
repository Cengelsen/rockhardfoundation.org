var counter = document.getElementById("counter");
if (counter) {
  var visits = parseInt(localStorage.getItem("visits") || "312") + 1;
  localStorage.setItem("visits", visits);
  counter.textContent = String(visits).padStart(6, "0");
}

var form = document.getElementById("petition-form");
var count = document.getElementById("signatures");

if (form && count) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.elements["name"].value;
    if (name == "") {
      alert("Please write you're name");
      return;
    }
    count.textContent = parseInt(count.textContent) + 1;
    alert("Thank you " + name + " for you're signature! It has been sended. The stones thank you to.");
    form.reset();
  });
}
