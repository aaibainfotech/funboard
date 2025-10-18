import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ABCDComponent } from './Features/ABCD-Files/abcd/abcd.component';
import { AnimalsComponent } from './Features/animals/animals.component';
import { NumbersComponent } from './Features/numbers/numbers.component';
import { DrawingComponent } from './Features/drawing/drawing.component';
import { MathComponent } from './Features/math/math.component';
import { PoemsComponent } from './Features/poems/poems.component';
import { AbcdWordsComponent } from './Features/ABCD-Files/abcd-words/abcd-words.component';

export const routes: Routes = [

    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomePageComponent },
    { path: "abcd", component: ABCDComponent },
    { path: "animals", component: AnimalsComponent },
    { path: "numbers", component: NumbersComponent },
    { path: "drawing", component: DrawingComponent },
    { path: "math", component: MathComponent },
    { path: "poems", component: PoemsComponent },
    { path: "next-level", component: AbcdWordsComponent },



];



