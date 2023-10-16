const pageTansition = document.querySelector('.new-page-transition');
const pageTansitionItems = document.querySelector('.new-page-transition__item');


const links = document.querySelectorAll('a');
links.forEach((link) => {
    link.addEventListener('click', function (e) {
        if (
            this.hostname === window.location.hostname &&
            this.href.indexOf('#') === -1 &&
            this.getAttribute("target") !== "_blank"
        )

        e.preventDefault ();
        let destination = this.href;

        
        pageTansition.style.display = "grid";
        console.log(destination);
    });
});