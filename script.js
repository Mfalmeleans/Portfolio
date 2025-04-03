// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  const yearElements = document.querySelectorAll("#year")
  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear()
  })

  // Mobile menu toggle
  const menuBtn = document.querySelector(".menu-btn")
  const nav = document.querySelector("nav ul")

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("show")
    })
  }

  // Project filtering
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => btn.classList.remove("active"))

        // Add active class to clicked button
        btn.classList.add("active")

        // Get filter value
        const filterValue = btn.getAttribute("data-filter")

        // Filter projects
        projectCards.forEach((card) => {
          if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        })
      })
    })
  }

  // Form submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject") ? document.getElementById("subject").value : ""
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      // For now, we'll just log it to the console
      console.log("Form submitted:", { name, email, subject, message })

      // Reset form
      contactForm.reset()

      // Show success message (you could create a better UI for this)
      alert("Thank you for your message! I will get back to you soon.")
    })
  }

  // Resume page actions
  const downloadResumeBtn = document.querySelector(".download-resume")
  const printResumeBtn = document.querySelector(".print-resume")

  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener("click", (e) => {
      e.preventDefault()
      // In a real implementation, this would download a PDF file
      alert("In a real implementation, this would download your resume as a PDF file.")
    })
  }

  if (printResumeBtn) {
    printResumeBtn.addEventListener("click", (e) => {
      e.preventDefault()
      window.print()
    })
  }
})

