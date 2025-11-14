import { useState, type ChangeEvent } from "react";
import {getAnimalImage, AnimalType} from "./styles";
import React from "react";

const [animal, setAnimal] = useState<AnimalType>("dog");
const [image, setImage] = useState<string | null>(null);
const [loading, setLoading] = useState(false);

async function loadImage() {
    setLoading(true);
    setLoading(null);

    try {
        const imgUrl = await getAnimalImage(animal);

        setImage(imgUrl);
    } catch (error) {
        setError ("Упс,упс");

        setImage(null);
    } finally {
        setLoading(false);
    }
}

React.useEffect(() => {
    loadImage();
}, [animal]);

function setError(arg0: string) {
    throw new Error("Function not implemented.");
}

return (
    <div style = {{
        textAlign: "center",
        marginTop: "30px"
    }}>
        <h2>Lesson11 Картинки животных</h2>

        <div>
            <label htmlFor = "animal-select">Выбери животное:</label>
            <select
            id = "animal-select"
            value = {animal}
            onChange = {(e) => setAnimal(e.target.value as unknown as AnimalType)}>
                <option value = "dog">Собака</option>
                 <option value = "cat">Кот</option>
                  <option value = "fox">Лиса</option>
            </select>
        </div>
    </div>
)

{loading && (
    <div style = {{ margin: "20px" }}>
        <div style {{
            border:
        }}
    </div>
)}
