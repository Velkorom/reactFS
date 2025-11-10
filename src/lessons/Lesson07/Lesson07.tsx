import "./styles.css";


function Lesson07() {
    // ТИп any
    let city: any = "Berlin";
    city = 2354;
    city = true;
    city = [34, "London", null, false]

    interface User {
        name: string;
        age: number;
        isAdmin: boolean;
    };

    interface Address {
        city: string;
        postcode: string | number;
    };

    const address1: Address = {
        city: "London",
        postcode: "356643",
        street: "Main street"
    };

    const address2: Address = {
        city: "Paris",
        postcode: "4564573",
         street: "Main street"
    };

    // Создание одноименных интерфейсов интерфейс с таким же именем не будет
    //отдельным инт он просто будет дополнять предыдущий
    interface Address {
        street: string;
    };

    const userData: User = {
        name: "John",
        age: 43,
      //  isAdmin: true,
    };
    interface Person {
        fullName: string;
        email: string;
    };

    interface Admin extends Person {
        adminId: number
    };

    const personDate: Person = {
        fullName: "Admin Smith",
        email: "adam@gmail.com",
    };

    const adminData: Admin = {
         email: "john@gmail.com",
         adminId: 213424,
         fullName: "John Johnson",

    };

    //Типизация через type
    // Использование type lkz созданя усложненного типа для переменных
    type Weight = string | number | null;
    let personWeight: Weight = "56kg";
    let userWeight: Weight = null;
    userWeight = 45;

    //
    type Animal = {
        name: string;
        weight: Weight;
    };

    const animalData: Animal = {
        name: "Lion",
        weight: "200 kg"
    };
    
    //Одноименно типы type создавать нельзя
    // type Animal = string;

    //Объединение типов
    type ZooAnimal = Animal & { country: string};

    const zebra: ZooAnimal = {
        country : "Afrika",
        name: "Zebra",
        weight: null,
    };

    //Generic - дженертик это переменная в которую мы можем подставитьь 
    // нужный тип в момент использования 
    // Generic & type
    type CustomTupel< T = string> = [number, string, T];

    const arrayMix: CustomTupel<boolean> = [24, "Bob", false];
    const arrayMix2: CustomTupel<number> = [40, "Mary", 2345];
    const arrayMix3: CustomTupel = [56, "Tom", "Berlin"];

    // Generic & Interface
    interface Fruit<T = number> {
        titel: string,
        address: T

    }

    const fruit1: Fruit = {
        titel: "Apple",
        address: 45
    }

    const fruit2: Fruit<string> = {
        titel: "Grape",
        address: "57656"
    }

    //Числовое перечисление
   // enum Colors {
   //     Red,//0
    //    Black,//1
    //    Green,//2
   // }

   enum Colors {
      Red,//0
       Black,//1
       Green,//2
    }



    let currentColor: Colors = Colors.Black;
    console.log(currentColor);


    //Строковое пересечение
    //


     // Строковое перечисление
  //   enum для цветов сетофора
  enum TRAFFIC_LIGHT {
    RED = "red",
    YELLOW = "yellow",
    GREEN = "green",
  }
  const getAction = (light: TRAFFIC_LIGHT) => {
    switch (light) {
      case TRAFFIC_LIGHT.RED:
        return "Стоп!";
      case TRAFFIC_LIGHT.YELLOW:
        return "Приготовьтесь идти";
      case TRAFFIC_LIGHT.GREEN:
        return "Можно идти";
    }
};
  return <div className="lesson07-wrapper">{getAction(TRAFFIC_LIGHT.GREEN)}</div>
}

  export default Lesson07;