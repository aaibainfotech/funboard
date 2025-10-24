import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ABCDComponent } from './Features/ABCD-Files/abcd/abcd.component';
import { NumbersComponent } from './Features/Numbers-File/numbers/numbers.component';
import { DrawingComponent } from './Features/drawing/drawing.component';
import { MathComponent } from './Features/math/math.component';
import { PoemsComponent } from './Features/poems/poems.component';
import { AbcdWordsComponent } from './Features/ABCD-Files/abcd-words/abcd-words.component';
import { AnimalsComponent } from './Features/Animals-File/animals/animals.component';
import { AnimalsNameSoundsComponent } from './Features/Animals-File/animals-name-sounds/animals-name-sounds.component';
import { NumbersNextComponent } from './Features/Numbers-File/numbers-next/numbers-next.component';
import { FruitsComponent } from './Features/fruits/fruits.component';
import { ColorsComponent } from './Features/colors/colors.component';


export const routes: Routes = [

    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomePageComponent },
    { path: "abcd", component: ABCDComponent },
    { path: "abcd-next-level", component: AbcdWordsComponent },
    { path: "animals", component: AnimalsComponent },
    { path: "animals-next-level", component: AnimalsNameSoundsComponent },
    { path: "numbers", component: NumbersComponent },
    { path: "numbers-next-level", component: NumbersNextComponent },
    { path: "drawing", component: DrawingComponent },
    { path: "math", component: MathComponent },
    { path: "poems", component: PoemsComponent },
    { path: "fruits", component: FruitsComponent },
    { path: "colors", component: ColorsComponent },


];



