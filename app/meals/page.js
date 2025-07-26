import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "../components/meals/meals-grid";
import { getMeals } from "../lib/meals";
import { Suspense } from "react";

export const metadata = {
    title: 'Shared food',
    description: 'Delicious meals, shared by a food-loving community.',
  };

async function Meals(){
    const meals = await getMeals();
    return <MealsGrid meals={meals}/>;
}

export default function MealsPage() {
    
    return (
    <>
        <header className={classes.header}>
            <h1>Food created <span className={classes.highlight}> 
                By YOU</span></h1>
            <p>Your food choice</p>
            <p className={classes.cta}><Link href="/meals/share">
            Share your favourite recipe</Link></p>
        </header>
        
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>
                Fetching meals...</p>} >
                <Meals />
            </Suspense>
        </main> 
    </>
);}