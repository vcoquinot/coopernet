window.onload = () => {
    //console.log("chargement");

    //création classe
    class Slideshow {
        constructor(slideshowId) {
            // images du slideshow
            this.images = [
                {"src": "img/img1.jpg"},
                {"src": "img/img2.jpg"},
                {"src": "img/img3.jpg"}
            ];
            //élément parent du slideshow
            this.slideShowContainer = document.getElementById(slideshowId);

            //création des ilages
            this.createImages();
        }
        createImages() {
            //parcours du tableau
            for (let i = 0; i < this.images.length; i++) {
                //créatiion d'un élément image dans le DOM
                const img = document.createElement("img");
                //ajour de l'attribut src
                img.setAttribute("src", this.images[i].src);
                //positionnement dans le dom
                this.slideShowContainer.appendChild(img)
            }
        }
    }
    //instanciation du slideshow
    const slideShow1 = new Slideshow("slideshow");
    slideShow1.createImages();
}
