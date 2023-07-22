function button1_click() {
//Создаем element по id =el_lux_p
let element = document.getElementById("el_lux_p");
console.log(element);
// //Проверка на наличие класса
// if (element.classList.contains('promo_stroke'))
// //удаляем класс
//     element.classList.remove("promo_stroke");
// else
// //добавляем класс
//     element.classList.add("promo_stroke");
    //проверка условия как выше
    element.classList.toggle("promo_stroke");
    element.textContent = element.textContent == "5000" ? "2500" : "5000";
}
function button2_click() {
    //Создаем element по id =el_lux_p
    let element2 = document.getElementById("el_st_p");
    console.log(element2);
    // //Проверка на наличие класса
    // if (element.classList.contains('promo_stroke'))
    // //удаляем класс
    //     element.classList.remove("promo_stroke");
    // else
    // //добавляем класс
    //     element.classList.add("promo_stroke");
        //проверка условия как выше
        element2.classList.toggle("promo_stroke");
        element2.textContent = element2.textContent == "3500" ? "1750" : "3500";
    }
//Создаем button1 по id =id_btn1
let button1 = document.getElementById("id_btn1");
let button2 = document.getElementById("id_btn2");
console.log(button1);
console.log(button2);
//добавляем слушатель события на кнопку
//нажали сработает function button1_click
button1.addEventListener('click', button1_click);
button2.addEventListener('click', button2_click);
//let name = prompt("Здравствуйте, как Вас зовут?"); alert ('Здравствуйте, '+ name);
let age=parseInt(prompt("Сколько Вам полный лет?"));
//let age = 101
switch(age) {
    case age = 18: {
        alert('Вы совершеннолетний, можете продолжать');
        break;
    }
    case age = 10: {
        alert('Вы не совершеннолетний, доступ к сайту не рекомендован, Вам надо учить уроки');
        break;
    }
    case age = 30:{
            alert('Вы совершеннолетний, ложитесь спать, завтра на работу');
        break;
    }
    default: {
            alert ("Мы не знаем что Вам делать");
            break;
            //window.close();
    }
}
//alert('Промокод на скидку в июле -50% "ИЮЛЬ2023"');