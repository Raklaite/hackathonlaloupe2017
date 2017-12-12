
**Hackathon WCS La Loupe 2017**
====================

# Ave à vous Wilders !
## Readme Hackathon :

Salut ! Je suis votre  **README**. Je suis là pour vous guider au cours de l'installation et l'utilisation de la
stack que nous vous fournissons pour votre hackathon.
Vous aller utiliser une stack en front VUEJS et en back serverless (avec AWS LAMBDA & API GATEWAY).
Quelques liens utiles pour vous guider :
- https://fr.vuejs.org/v2/guide/  Documentation VUEJS officielle .
- https://vuex.vuejs.org/fr/ Documentation  VUEX (store).
- https://router.vuejs.org/fr/# Documentation vue-router.
- Axios make promised HTTP request simplier just look at https://github.com/axios/axios
- Responsive Alerts and hints https://limonte.github.io/sweetalert2/
- Already installed and ready to use : http://element.eleme.io/#/en-US/component/form and bootstrap.
- Liens vers les ressources de l'API : vous serons fournis sur site pour cause de confidentialité
- Les documentations citées ci-dessus ainsi que **google** et **StackOverflow**
seront vos futurs meilleurs potes !
- Coté CSS pré-installé vous disposez de [ELEMENT](http://element.eleme.io/#/en-US/component/installation) & [BOOSTRAP](https://getbootstrap.com/docs/3.3/) 3.3.7



# Prérequis

 **BeforeCode!**

> **U need already:**
>
> - Node installed, if he's not: https://nodejs.org/en/download/
> - NPM installed and up to date : https://docs.npmjs.com/getting-started/installing-node
> - Copy or Clone this repo to your computer
> - Then `cd app` & `npm install`
> - Then `npm run dev`
> - Ready to code !

## Dossiers et sous-dossiers

Le fichier **App** est construit ainsi :
> - **BUILD**: Les fichiers de builds, vous n'avez pas besoin d'y toucher pour l'instant, ils seront utiles lors de la mise en prod.
> - **NODE-MODULE**: Les modules node & paquets npm listés dans le package.json
> - **CONFIG**: Les fichiers de configurations d'environnement, Le HMR (Hot Module Reload), la compilation ( ou pas voir babel/webpack ) est configurée d'origine ici.
> - **STATIC**: Dossier destiné au fichiers static..., polices, images , backgrounds, icones,  etc...

 > - **SRC** : Le dossier Source qui contiendra :

>> - **COMPONENTS** : Nos composants Vue.js
>> - **ROUTE** : Nos imports de routes ainsi que les chemins.
>>- **app.vue**: Le fichier racine de l'application.
>>- **Components & directives** : Composants et directives réutilisable dans toute l'application
>>- **main.js**: Fichier principal de l'application (déclaration du router et du constructeur d'APP.vue).


## Créer un composant
**exemple d'import de composant :**
`import products from './components/products.vue'
&&
import example from './components/example'`
## avec VUE c'est tout en un :
- ## première partie l'html : Commence et se termine par une balise  `<template>` ou par une `<div id="COMPONENT"> (cas particulier)`
![Partie Html](https://img15.hostingpics.net/pics/304357templatevue1.png)
- ## Deuxieme partie : Le JS , sur ce bon hackathon

## Plus sérieusement voici un exemple du JS d'un composant vue simple:![enter image description here](https://img15.hostingpics.net/pics/423879tempalte2.png)
  # Le js se décompose en plusieurs partie :
  - Les déclarations et import , TOUJOURS AU DEBUT DU SCRIPT.
  - il se déclare entre deux balise `<script></script>.`
  - Les props, le contenu de votre composant dans l'exemple les prop sont :
  - - une String text qui est vide.
  - - une String visible qui contient 'all'.
  - - un Boolean markAll à false,
  - elles pourraient être n'importe quoi , object , array , array[Object]/[String], etc...
  ## Les méthodes :
  Pour faire au plus simple les méthodes sont les fonctions propres à un composant
  ex : ![enter image description here](https://img15.hostingpics.net/pics/321502addtocart.png)
# Troisième et dernière partie :
Le style simplement entre deux balise `<style></style>` comme dans n'importe quels autres fichiers scss, css , less etc ...
exemple :
![enter image description here](https://img15.hostingpics.net/pics/196858template3.png)
##  Cycle de vie
L'instance de vue et ces Hooks
![enter image description here](https://vuejs.org/images/lifecycle.png)
Les propriétés **destroyed** , **beforeDestroyed**, **mounted** etc... correspondent à des moment précis du rendu de nos composants ainsi on peut attacher ou séquencer ces actions. Voir la doc VueJs et les LifeCycleHook pour plus d'infos.

# Propriété computed & Watchers
voir doc officielle pour plus d'exemples.
![enter image description here](https://img15.hostingpics.net/pics/943837computed.png)
#Routes ##
Vue vous permet de router de plusieurs façons, mais d'abord il faudra déclarer votre route.
Les routes se composent ainsi :
 `path: '/', component: example, name: 'home', meta: {whateverUWant: whateverUWant} }`
- Le path : Le chemin d'accès à votre route dans l'exemple '/' ou '/#' correspondent au chemin racine.
- Le(s) composants : components, qui devront étre importés au début du fichier.
- un nom par convention on donne généralement un meme nom de composant et de route.
- Et (ou pas) un objet meta qui contient ce que vous voulez.


Bon courage et bonne chance ! L'équipe CGPRO.
=============================




