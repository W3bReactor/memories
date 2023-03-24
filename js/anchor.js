const navLinks = document.querySelectorAll('.nav-menu__link')

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        const scrollTarget = document.getElementById(navLink.getAttribute('href').substring(1))
        console.log(navLink.getAttribute('href').substring(1))
        scrollTarget.scrollIntoView({
            block: "start",
            behavior: "smooth"
          });
              // document.querySelector(navLink.getAttribute('href')).scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start'
        // })
})})