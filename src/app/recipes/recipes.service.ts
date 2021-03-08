import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable } from "rxjs"
import { Recipe } from "./recipe.model"

@Injectable({
    providedIn: "root"
})
export class RecipesService {
    constructor() {}

    private recipes: Recipe[] = [
        {
            id: "r1",
            title: "Schnitzel",
            imageUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1280px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG",
            ingredients: ["French Fries", "Pork Meat", "Salad"]
        },
        {
            id: "r2",
            title: "Spaghetti",
            imageUrl:
                "https://www.thewholesomedish.com/wp-content/uploads/2020/08/THE-BEST-CLASSIC-SPAGHETTI-600X900.jpg",
            ingredients: ["Spaghetti", "Meat", "Tomatoes"]
        }
    ]

    private recipesSubject = new BehaviorSubject(this.recipes)

    public getRecipes(): Observable<Recipe[]> {
        return this.recipesSubject.asObservable()
    }

    public getRecipe(recipeId: string): Recipe {
        const recipe = this.recipes.find(recipe => recipe.id === recipeId)
        return { ...recipe }
    }

    public deleteRecipe(recipeId: string) {
        this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId)
        this.recipesSubject.next(this.recipes)
    }
}
