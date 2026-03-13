

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

document.addEventListener("DOMContentLoaded", function(){

const projectItems = document.querySelectorAll(".project-item");
const modal = document.getElementById("gallery-modal");
const galleryContent = document.querySelector(".gallery-content");
const closeGallery = document.getElementById("close-gallery");

projectItems.forEach(item => {
  item.addEventListener("click", () => {
    console.log("Project clicked");

    galleryContent.innerHTML = "";

    const images = item.querySelectorAll("img");

    images.forEach(img => {
      const newImg = document.createElement("img");
      newImg.src = img.src;
      galleryContent.appendChild(newImg);
    });

    modal.style.display = "flex";

  });
});

closeGallery.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

});
