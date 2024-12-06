export default function Recettes(jsonFile) {
    return {
        recipes: [],
        selectedDifficulty: '',
        selectRecipe: null,
        currentEtape: 0, // Etape de la card sélectionné

        init() {
            this.fetchDatas(jsonFile);
        },

        // Récupérer la liste des recettes
        fetchDatas(json) {
            fetch(json)
                .then(response => response.json())
                .then(data => {
                    this.setDatas(data);
                })
                .catch(error => console.error('Erreur lors de la récupération des données :', error));
        },

        // Met les recettes dans le tableau
        setDatas(data) {
            this.recipes = data.recipes;
        },

        // Filtre des recette par rapport à la difficultés sélectionné
        filteredRecipes() {
            if (!this.selectedDifficulty) {
                return this.recipes;
            }
            return this.recipes.filter(recipe => recipe.difficulty === this.selectedDifficulty);
        },

        // Ouvre la card sélectionné
        openRecipe(recipe) {
            this.selectRecipe = recipe;
            this.currentEtape = 0;
        },

        goToEtape(index) {
            this.currentEtape = index;
        },

        // Permet d'aller à l'étape suivante si possible
        nextEtape() {
            if (this.currentEtape < this.selectRecipe.instructions.length - 1) {
                this.currentEtape++;
            }
        },

        // Permet d'aller à l'étape précédente si possible
        prevEtape() {
            if (this.currentEtape > 0) {
                this.currentEtape--;
            }
        }
    }
}
