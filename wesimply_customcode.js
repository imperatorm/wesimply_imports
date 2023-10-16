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

        console.log(destination);
    });
});