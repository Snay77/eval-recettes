import Alpine from 'alpinejs'
import Recettes from './modules/Recettes.js';

window.Alpine = Alpine;

Alpine.data('Recettes', Recettes);
Alpine.start();