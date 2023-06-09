import { IonItem, IonLabel } from "@ionic/react";
import styles from "./Ingredient.module.css";

export const Ingredient = ({ ingredient }) => {

	return (

		<IonItem lines="full" className={ styles.ingredientItem }>
			<img alt="ingredient" src={ ingredient.image } className={ styles.ingredientImage } />
			<IonLabel className="ion-text-wrap ion-margin-start">
				<h3>{ ingredient.text }</h3>
				<p>{ ingredient.weight.toFixed(2) }g</p>
			</IonLabel>
		</IonItem>
	);
}