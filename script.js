let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let button = document.querySelector("button");
//proverbe aleatoire
let quotes = [
    {
        citation:"L'art, c'est ce qui est beau, ce qui s'inscrit dans la durée, ce qui reste et subit grace aux affaires du temps. Ce qui est eternel est beau.",
        auteur:"SASORI"

    },
    {
        citation:"Ceux qui ne comprennent pas la vraie douleur, ne peuvent pas comprendre la vraie paix.",
        auteur:"PAIN"
    },
    {
        citation:"Contente toi d'avancer meme si ton chemin est celui du carnage.",
        auteur:"ITACHI UCHIHA"
    },
    {
        citation:"Argent comptant vaut tous tourments meme ceux de l'enfert.",
        auteur:"KAKUZU"
    },
    {
        citation:"Ce ne sont pas les gens qui changent, ce sont les masques qui tombent.",
        auteur:"OBITO UCHIHA"
    },
    {
        citation:"L'amour engendre le sacrifice qui lui meme engendre la haine  et c'est la que la souffrance entre en jeu.",
        auteur:"NAGATO"
    }
]

// button declancheur aleatoire
button.addEventListener("click",()=>{
    let random = Math.floor( Math.random() * quotes.length);
    h2.innerText = quotes[random].citation;
    h3.innerText = quotes[random].auteur;
});