document.addEventListener("DOMContentLoaded", () => {
  // Mettre à jour l'année dans le footer
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }

  // Ajouter la classe 'active' au lien de navigation correspondant à la page actuelle
  const currentPage = window.location.pathname.split("/").pop()
  const navLinks = document.querySelectorAll("nav ul li a")
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active")
    }
  })

  // Gestion du menu burger
  const menuBurger = document.querySelector(".menu-burger")
  const navMenu = document.querySelector("nav ul")

  if (menuBurger && navMenu) {
    menuBurger.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  }

  // Gestion du formulaire de contact (si présent sur la page)
  const contactForm = document.querySelector("form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
      // Par exemple, en utilisant l'API Fetch pour envoyer les données à un serveur
      console.log("Formulaire soumis")
      alert("Merci pour votre message. Nous vous contacterons bientôt.")
      contactForm.reset()
    })
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const welcomeText = document.getElementById("welcome-text")

  // Ajout d'un petit délai pour s'assurer que tout est chargé
  setTimeout(() => {
    welcomeText.classList.add("animate-welcome")
  }, 100)
})

