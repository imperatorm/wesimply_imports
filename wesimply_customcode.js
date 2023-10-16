const links = document.querySelectorAll('a');
links.forEach((link) => {
    link.addEventListener('click', function (e) {
        e.eventDefault ();
        let destination = this.href;

        console.log(destination)
    })
})