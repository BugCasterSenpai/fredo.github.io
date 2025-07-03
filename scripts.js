/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle');
        navClose = document.getElementById('nav-close');

/*=============== MENU SHOW =================*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== IMAGE FLIP FUNCTIONALITY ===============*/
const homeImage = document.querySelector('.home__image')
const aboutImage = document.querySelector('.about__image')
const homeImg = document.querySelector('#imageBlob')
const aboutImg = document.querySelector('#imageBorder')

// Function to check if device is mobile
const isMobile = () => window.innerWidth <= 1151

// Image sources
const homeImgSrc = 'img/home-img.webp'
const homeImgAnmSrc = 'img/home-img-animated.webp'
const aboutImgSrc = 'img/about-me-img.webp'
const aboutImgAnmSrc = 'img/about-me-img-animated.webp'

const preloadImages = () => {
    const imageUrls = [homeImgSrc, homeImgAnmSrc, aboutImgSrc, aboutImgAnmSrc]
    
    imageUrls.forEach(url => {
        const img = new Image()
        img.src = url
    })
}

// Call preload function when page loads
window.addEventListener('load', preloadImages)

// Home image flip functionality
if (homeImage && homeImg) {
    let isFlipped = false
    let hoverTimeout = null
    let isHovering = false
    
    const flipHome = () => {
        if (!isFlipped) {
            // Wait for half the animation to change image (when it's rotated 90deg)
            setTimeout(() => {
                homeImg.setAttribute('href', homeImgSrc)
                homeImg.setAttribute('width', '671')
                homeImg.setAttribute('height', '940')
            }, 300) 
        } else {
            setTimeout(() => {
                homeImg.setAttribute('href', homeImgAnmSrc)
                homeImg.setAttribute('width', '640')
                homeImg.setAttribute('height', '925')
            }, 300)
        }
        isFlipped = !isFlipped
    }
    
    if (isMobile()) {
        homeImage.addEventListener('click', () => {
            homeImage.classList.toggle('flipped')
            flipHome()
        })
    } else {
        homeImage.addEventListener('mouseenter', () => {
            isHovering = true
            // Set a delay before starting the flip animation
            hoverTimeout = setTimeout(() => {
                if (isHovering) { // Only flip if still hovering
                    setTimeout(() => {
                        if (isHovering) { // Double check before changing image
                            homeImg.setAttribute('href', homeImgSrc)
                            homeImg.setAttribute('width', '671')
                            homeImg.setAttribute('height', '940')
                        }
                    }, 150)
                }
            }, 150) // Wait 500ms before starting the flip
        })
        
        homeImage.addEventListener('mouseleave', () => {
            isHovering = false
            // Clear the timeout if mouse leaves quickly
            if (hoverTimeout) {
                clearTimeout(hoverTimeout)
                hoverTimeout = null
            }
            
            // Only revert if the image was actually changed
            if (homeImg.getAttribute('href') === homeImgSrc) {
                setTimeout(() => {
                    homeImg.setAttribute('href', homeImgAnmSrc )
                    homeImg.setAttribute('width', '640')
                    homeImg.setAttribute('height', '925')
                }, 300)
            }
        })
    }
}

// About image flip functionality
if (aboutImage && aboutImg) {
    let isFlipped = false
    let hoverTimeout = null
    let isHovering = false
    
    const flipAbout = () => {
        if (!isFlipped) {
            setTimeout(() => {
                aboutImg.setAttribute('href', aboutImgSrc)
                aboutImg.setAttribute('width', '640')
                aboutImg.setAttribute('height', '925')
            }, 300)
        } else {
            setTimeout(() => {
                aboutImg.setAttribute('href', aboutImgAnmSrc)
                aboutImg.setAttribute('width', '640')
                aboutImg.setAttribute('height', '940')
            }, 300)
        }
        isFlipped = !isFlipped
    }
    
    if (isMobile()) {
        aboutImage.addEventListener('click', () => {
            aboutImage.classList.toggle('flipped')
            flipAbout()
        })
    } else {
        aboutImage.addEventListener('mouseenter', () => {
            isHovering = true
            // Set a delay before starting the flip animation
            hoverTimeout = setTimeout(() => {
                if (isHovering) { // Only flip if still hovering
                    setTimeout(() => {
                        if (isHovering) { // Double check before changing image
                            aboutImg.setAttribute('href', aboutImgSrc)
                            aboutImg.setAttribute('width', '640')
                            aboutImg.setAttribute('height', '925')
                        }
                    }, 150)
                }
            }, 150) // Wait 500ms before starting the flip
        })
        
        aboutImage.addEventListener('mouseleave', () => {
            isHovering = false
            // Clear the timeout if mouse leaves quickly
            if (hoverTimeout) {
                clearTimeout(hoverTimeout)
                hoverTimeout = null
            }
            
            // Only revert if the image was actually changed
            if (aboutImg.getAttribute('href') === aboutImgSrc) {
                setTimeout(() => {
                    aboutImg.setAttribute('href', aboutImgAnmSrc)
                    aboutImg.setAttribute('width', '640')
                    aboutImg.setAttribute('height', '940')
                }, 300)
            }
        })
    }
}

/*=============== EMAIL JS ===============
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_a63n5cf', 'template_6pzg4oi', '#contact-form', 'iiTdbr6hnWa-hYGzW')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfuly ✅'
            
            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()
        }, (err) => {
            contactMessage.textContent = 
            `Message not sent (service error: ${err.text || err}) ❌`
        })
}

contactForm.addEventListener('submit', sendEmail)
*/

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }
        else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 150,
    //reset: true // Animations repeat
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})
