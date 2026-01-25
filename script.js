

const adminBtn = document.getElementById("adminBtn");
const adminSection = document.getElementById("admin-login");

adminBtn.addEventListener("click", (e) => {
  e.preventDefault();
  adminSection.style.display = "block";
  adminSection.scrollIntoView({ behavior: "smooth" });
});


document.getElementById("admin-form").addEventListener("submit", function(e){
  e.preventDefault();

  const user = document.getElementById("input_user").value.trim();
  const pass = document.getElementById("input_pass").value.trim();

  if(user === "Midhila" && pass === "bruh") {
    alert("Login successful");
    adminSection.style.display = "none";
    document.getElementById("user-responses").style.display = "block";
    fetchUserResponses();
  } else {
    alert("Access denied");
  }
});


document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  const data = {
    name: document.getElementById("input_name").value,
    email: document.getElementById("input_email").value,
    message: document.getElementById("input_msg").value,
    date: new Date().toLocaleString()
  };

  const db = JSON.parse(localStorage.getItem("tempDB")) || [];
  db.push(data);
  localStorage.setItem("tempDB", JSON.stringify(db));

  this.reset();
  document.getElementById("confirm-response").textContent = "Message sent successfully.";
  document.getElementById("confirm-response").style.color = "#6D4C41";
});


function fetchUserResponses(){
  const container = document.getElementById("user-messages");
  container.innerHTML = "";

  const db = JSON.parse(localStorage.getItem("tempDB")) || [];
  db.forEach(r=>{
    container.innerHTML += `
      <p><strong>${r.name}</strong> (${r.email})</p>
      <p>${r.message}</p>
      <small>${r.date}</small>
      <hr>
    `;
  });
}


document.getElementById("toggle-theme").addEventListener("click", ()=>{
  document.body.classList.toggle("dark-theme");
});


document.querySelectorAll('nav a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:"smooth"});
  });
});

