
import AnimalsCard from "components/AnimalCard/AnimalCard";
import 
import "./styles.css";

function Homework07() {
    const animals = animalsData.map((animal) =>{
        return (
            <AnimalCard
            key={}
            animalName={animal.name}
            animalSpecies={animal.species}
            animalImg={animal.image}
            />
        );
    });

    return <div classNane="homeworrk07-wrapper">{animals}</div>;
}