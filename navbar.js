/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}
 
showMenu('nav-toggle','nav-menu')

/*=============== TOGGLE DROPDOWN ===============*/
document.addEventListener('DOMContentLoaded', () => {
    // Get all dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown__item')
    
    // For mobile and tablet view
    const mediaQuery = window.matchMedia('(max-width: 1118px)')
    
    if (mediaQuery.matches) {
        dropdownItems.forEach(item => {
            const dropdownLink = item.querySelector('.nav__link')
            const dropdownMenu = item.querySelector('.dropdown__menu')
            
            dropdownLink.addEventListener('click', (e) => {
                e.preventDefault()
                
                // Toggle active class on the clicked dropdown
                item.classList.toggle('dropdown-active')
                
                // Toggle dropdown menu visibility
                if (item.classList.contains('dropdown-active')) {
                    dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px'
                    item.querySelector('.dropdown__arrow').style.transform = 'rotate(180deg)'
                } else {
                    dropdownMenu.style.maxHeight = '0'
                    item.querySelector('.dropdown__arrow').style.transform = 'rotate(0)'
                }
                
                // Close other open dropdowns
                dropdownItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('dropdown-active')) {
                        otherItem.classList.remove('dropdown-active')
                        otherItem.querySelector('.dropdown__menu').style.maxHeight = '0'
                        otherItem.querySelector('.dropdown__arrow').style.transform = 'rotate(0)'
                    }
                })
            })
        })
    }
})