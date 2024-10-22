// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
// Création des balises 
const article = pieces[0];
const article1 = pieces[1];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
// ici c'est l'article que j'ai créé 

const imageElement1 = document.createElement("img");
imageElement1.src = article1.image;
const nomElement1 = document.createElement("h2");
nomElement1.innerText = article1.nom;
const prixElement1 = document.createElement("p");
prixElement1.innerText = `Prix: ${article1.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
const categorieElement1 = document.createElement("p");
categorieElement1.innerText = article1.categorie ?? "(aucune catégorie)";
const description = document.createElement("p");
description.innerText = article1.description ?? "pas de description";
const stock= document.createElement("p");
stock.innerText = (atticle1.stock > 0 ? "en stock" : "pas en stock");
//Rattachement de nos balises au DOM
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(imageElement1);
sectionFiches.appendChild(nomElement1);
sectionFiches.appendChild(prixElement1);
sectionFiches.appendChild(categorieElement1);
sectionFiches.appendChild(description);
sectionFiches.appendchild(stock);
