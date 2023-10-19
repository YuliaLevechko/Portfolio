(() => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-open]"),
        closeMenuBtn: document.querySelector("[data-menu-close]"),
        menu: document.querySelector("[data-menu]"),
        linkAbout: document.querySelector("[data-link-about]"),
        linkSkills: document.querySelector("[data-link-skills]"),
        linkProjects: document.querySelector("[data-link-projects]"),
        linkContacts: document.querySelector("[data-link-contacts]"),
    };
    refs.openMenuBtn. addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    function toggleMenu() {
        refs.menu.classList.toggle("appear");
        document.body.classList.toggle("no-scroll");
    }
    refs.linkAbout.addEventListener("click", toggleMenu);
    function toggleMenu() {
        refs.menu.classList.toggle("appear");
        document.body.classList.toggle("no-scroll");
    }
    refs.linkSkills.addEventListener("click", toggleMenu);
    function toggleMenu() {
        refs.menu.classList.toggle("appear");
        document.body.classList.toggle("no-scroll");
    }
    refs.linkProjects.addEventListener("click", toggleMenu);
    function toggleMenu() {
        refs.menu.classList.toggle("appear");
        document.body.classList.toggle("no-scroll");
    }
    refs.linkContacts.addEventListener("click", toggleMenu);
    function toggleMenu() {
        refs.menu.classList.toggle("appear");
        document.body.classList.toggle("no-scroll");
    }
})();