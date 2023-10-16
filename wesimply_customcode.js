const pageTansition = document.querySelector('.new-page-transition');
const pageTansitionItems = document.querySelectorAll('.new-page-transition__item');


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
        
        gsap.fromTo(
            pageTansitionItems,
            {
                y: '100vh',
            
            },
            {
                y: '0vh',
                duration: 1,
                ease: "expo.inOut",
                stagger: {
                    amount: 0.1,
                    from: "random",

            },
            onComplete: () => {
                window.location = destination
            }
        }
    );
});