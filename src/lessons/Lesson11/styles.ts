export type AnimalType = { "dog", "cat", "fox"};

export async 
function getAnimalImage(animal:AnimalType):Promise<string>{


    try {
        let url = "";

        if (animal === "dog") {
            url = "https://dog.ceo/api/breeds/image/random";
        }else if(animal === "cat") {
            url = "https://dog.ceo/api/breeds/image/random";
        }else if(animal === "fox") {
            url = "https://dog.ceo/api/breeds/image/random";
        }
}

const respons