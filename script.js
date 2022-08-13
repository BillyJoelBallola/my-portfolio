const btnMenu = document.querySelector(".nav__menu")
const navList = document.querySelector(".nav__list")
const btnNavLinks = document.querySelectorAll(".nav__list li")
const footerSocials = document.querySelector(".footer__socials")

btnMenu.addEventListener('click', () => {
    if(btnMenu.classList.contains('open-menu') && navList.classList.contains("open-list")){
        btnMenu.classList.remove('open-menu') 
        navList.classList.remove("open-list")
    }else{
        btnMenu.classList.add('open-menu')
        navList.classList.add("open-list")
    }
})

for (let btn of btnNavLinks){
    btn.addEventListener('click', () => {
        if(btnMenu.classList.contains('open-menu') && navList.classList.contains("open-list")){
            btnMenu.classList.remove('open-menu') 
            navList.classList.remove("open-list")
        }
    })
}

window.addEventListener('scroll', () => {
    const documentHeight = window.innerHeight + 500
    const scrollable = document.documentElement.scrollHeight - documentHeight
    const scrolled = window.scrollY

    if (scrolled > scrollable){
        footerSocials.classList.add('footer-hide-socials')
    }else{
        footerSocials.classList.remove('footer-hide-socials')
    }
})
