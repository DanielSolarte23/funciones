//Body
let body = document.querySelector('body');
// Variable del header
let header = document.createElement("header");
let h1 = document.createElement('h1');
let textPrincipal = document.createTextNode("Start Boostrap");
let ul = document.createElement('ul');
let li = [
    document.createElement('li'),
    document.createElement('li'),
    document.createElement('li'),
    document.createElement('li'),
    document.createElement('li')
];
// let li2 = document.createElement('li');
// let li3 = document.createElement('li');
// let li4 = document.createElement('li');
// let li5 = document.createElement('li');

let a = [
    document.createElement('a'),
    document.createElement('a'),
    document.createElement('a'),
    document.createElement('a'),
    document.createElement('a')
];


// let text =document.createTextNode("Servicios");
// let text1 =document.createTextNode("Portafolio");
// let text2 =document.createTextNode("Acerca de");
// let text3 =document.createTextNode("Equipo");
// let text4 =document.createTextNode("Contact");

// variables del Main
let main = document.createElement('main');
let article = document.createElement('article');
let h1main = document.createElement('h1');
let h4 = document.createElement('h4');
let Texh1main = document.createTextNode("IT'S NICE TO MEET YOU");
let Texh2main = document.createTextNode("Welcome To Our Studio!");
let button = document.createElement('button');
let textbutton = document.createTextNode('TELL ME MORE') ;

//variables del section
let section = document.createElement('section');
let section2 = document.createElement('section');
let h2 = document.createElement('h2');
let p = document.createElement('p');
let article2 = document.createElement('article');
let imgs1 = document.createElement('img');
let imgs2 = document.createElement('img');
let imgs3 = document.createElement('img');
let article3 = document.createElement('article');
let article4 = document.createElement('article');
let article5 = document.createElement('article');
let ps1 = document.createElement('p');
let ps2 = document.createElement('p');
let ps3 = document.createElement('p');
let h2s1 = document.createElement('h2');
let h2s2 = document.createElement('h2');
let h2s3 = document.createElement('h2');

// varibales del footer
let footer = document.createElement('footer');

//variables del section 3
let section3 = document.createElement("section");
let h2section3 = document.createElement("h2");
let psection3 = document.createElement("p");
let articleS3 = document.createElement("article");
let art1Section3 = document.createElement("section");
let art2Section3 = document.createElement("section");
let art3Section3 = document.createElement("section");
let art4Section3 = document.createElement("section");
let art5Section3 = document.createElement("section");
let art6Section3 = document.createElement("section");
let img1Section3 = document.createElement("img");
let img2Section3 = document.createElement("img");
let img3Section3 = document.createElement("img");
let img4Section3 = document.createElement("img");
let img5Section3 = document.createElement("img");
let img6Section3 = document.createElement("img");
let h41Section3 = document.createElement("h4");
let h42Section3 = document.createElement("h4");
let h43Section3 = document.createElement("h4");
let h44Section3 = document.createElement("h4");
let h45Section3 = document.createElement("h4");
let h46Section3 = document.createElement("h4");
let p1Section3 = document.createElement("p");
let p2Section3 = document.createElement("p");
let p3Section3 = document.createElement("p");
let p4Section3 = document.createElement("p");
let p5Section3 = document.createElement("p");
let p6Section3 = document.createElement("p");


// .p2Section3.



//insertar el footer
body.insertAdjacentElement('afterbegin', footer);
//SECTION 3
body.insertAdjacentElement('afterbegin', section3);
section3.append(h2section3);
h2section3.textContent = "PORTFOLIO"
section3.append(psection3);
psection3.textContent = "Lorem ipsum dolor sit amet consectetur."
section3.append(articleS3);
articleS3.append(art1Section3);
articleS3.append(art2Section3);
articleS3.append(art3Section3);
articleS3.append(art4Section3);
articleS3.append(art5Section3);
articleS3.append(art6Section3);
art1Section3.append(img1Section3);
img1Section3.src="s31.png";
art2Section3.append(img2Section3);
img2Section3.src="s32.png";
art3Section3.append(img3Section3);
img3Section3.src="s33.png";
art4Section3.append(img4Section3);
img4Section3.src="s34.png";
art5Section3.append(img5Section3);
img5Section3.src="s35.png";
art6Section3.append(img6Section3);
img6Section3.src="s36.png";
art1Section3.append(h41Section3);
h41Section3.textContent="Threads";
art2Section3.append(h42Section3);
h42Section3.textContent="Explore";
art3Section3.append(h43Section3);
h43Section3.textContent="Finish";
art4Section3.append(h44Section3);
h44Section3.textContent="Lines";
art5Section3.append(h45Section3);
h45Section3.textContent="Southwest";
art6Section3.append(h46Section3);
h46Section3.textContent="Window";
art1Section3.append(p1Section3);
p1Section3.textContent="Illustration";
art2Section3.append(p2Section3);
p2Section3.textContent="Graphic Design";
art3Section3.append(p3Section3);
p3Section3.textContent="Identity";
art4Section3.append(p4Section3);
p4Section3.textContent="Branding";
art5Section3.append(p5Section3);
p5Section3.textContent="Website Design";
art6Section3.append(p6Section3);
p6Section3.textContent="Photography";


// insertar el section 
body.insertAdjacentElement('afterbegin', section2);
//Encabezado del section2
section2.append(h2);
h2.textContent = "Servicios";
section2.append(p);
p.textContent = "Lorem ipsum dolor sit amet consectetur.";
//article2 con las imagenes y parrafos
//ARTICLE1
section2.append(article2);
article3.append(imgs1);
imgs1.src = "1.png"
article3.append(h2s1);
h2s1.textContent = "E-comerce";
article3.append(ps1);
ps1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'

//ARTICLE2
article4.append(imgs2);
imgs2.src = "2.png"
article4.append(h2s2);
h2s2.textContent = "Responsive Design";
article4.append(ps2);
article5.append(imgs3);
article5.append(h2s3);
h2s3.textContent = "Web Security";
ps2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.';

//ARTICLE3
imgs3.src = "3.png";
article5.append(ps3);
ps3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.';
article2.append(article3);
article2.append(article4);
article2.append(article5);


// creacion del contenido del main

body.insertAdjacentElement('afterbegin', main);
main.append(section);
section.append(h1main)
h1main.append(Texh1main)
section.insertAdjacentElement('afterbegin', h4);
h4.append(Texh2main)
section.append(button)
button.append(textbutton)


// contenido del header
main.insertAdjacentElement("afterbegin", header);
header.append(h1)
h1.append(textPrincipal)
header.appendChild(ul)
ul.append(li[0])
ul.append(li[1])
ul.append(li[2])
ul.append(li[3])
ul.append(li[4])

li[1].classList.add("color");
li[2].classList.add("color");
li[3].classList.add("color");
li[4].classList.add("color");

button.classList.add("boton");

li[0].appendChild(a[0]);
li[1].appendChild(a[1]);
li[2].appendChild(a[2]);
li[3].appendChild(a[3]);
li[4].appendChild(a[4]);

a[0].textContent = "Servicios";
a[1].textContent = "Portafolio";
a[2].textContent = "Acerca de";
a[3].textContent = "Equipo";
a[4].textContent = "Contacto";

// ESTILOS HEADER
a[0].style.cssText = 'color: #fed136'
body.style.cssText = "margin: 0; color: white;"
main.style.cssText = "height: 100vh; background-image: url('fondo2.jpg'); background-size: cover; display: flex; flex-direction: column; align-items: center;";
header.style.cssText = "display: flex; justify-content: space-between; height: 15vh;  width: 97%; align-items: center;" ;
h1.style.cssText = 'font-family: "Lugrasimo"; color: #fed136';
ul.style.cssText = 'display: flex; list-style:none; gap: 30px; padding: 20px; font-size: 25px; font-family: "Kanit"; font-weight: 300;';
section.style.cssText = 'width: 50%; display: flex; flex-direction: column; align-items: center; height: 80%; justify-content: center;'
h4.style.cssText = 'font-family: "Roboto Slab", cursiva; font-size: 46px; font-weight: 300; margin: 0;'
h1main.style.cssText = 'font-family: "Kanit", sans-serif; font-size: 70px; margin: 0;'
button.style.cssText = 'background-color: #fed136; border: 0; height: 80px; width: 30%; border-radius: 5px; color: white; font-size: 30px; font-family: "Kanit"; font-weight: 800; '

//ESTILOS SECTION 2
section2.style.cssText = 'color: black; display: flex; flex-direction: column; align-items: center; height: 100vh; justify-content: center; font-size: 30px; font-family: "Kanit", sans-serif;'
article2.style.cssText = ' height: 70vh; display: flex; padding: 0 150px 0 150px; gap: 20px; '
imgs1.style.cssText = 'height: 150px'
imgs2.style.cssText = 'height: 150px'
imgs3.style.cssText = 'height: 150px'

article3.style.cssText = 'width: 33%; height: 90%; display: flex; flex-direction: column; align-items: center; font-size: 25px; padding: 20px; color: gray;';
article4.style.cssText = 'width: 33%; height: 90%; display: flex; flex-direction: column; align-items: center; font-size: 25px; padding: 20px; color: gray;';
article5.style.cssText = 'width: 33%; height: 90%; display: flex; flex-direction: column; align-items: center; font-size: 25px; padding: 20px; color: gray;';

h2s1.style.cssText= 'color: black;'
h2s2.style.cssText= 'color: black;'
h2s3.style.cssText= 'color: black;';

//ESTILOS SECTION 3

section3.style.cssText= 'color: black; display: flex; flex-direction: column; align-items: center; font-family: "Kanit", sans-serif;';
articleS3.style.cssText= 'display: grid; grid-template-columns: repeat(3, 1fr); padding: 0 150px 0 150px; gap:20px'
img1Section3.style.cssText='height: 350px; display: flex; flex-direction: column; align-items: center;' ;
img2Section3.style.cssText='height: 350px; display: flex; flex-direction: column; align-items: center;';
img3Section3.style.cssText='height: 350px; display: flex; flex-direction: column; align-items: center;';
img4Section3.style.cssText='height: 350px; display: flex; flex-direction: column; align-items: center;';
img5Section3.style.cssText='height: 350px; display: flex; flex-direction: column; align-items: center;';
img6Section3.style.cssText='height: 350px; display: flex; flex-direction: column; align-items: center;';

// agregar estilos uno por uno 
// main.style.border="1px solid red";
// header.style.display="flex";

// agregar estilos en grupo

// main.style.cssText = "background-color: red; color: white;";