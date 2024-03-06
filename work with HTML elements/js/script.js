/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const promoADV = document.querySelectorAll('.promo__adv img'),
        promoGenre = document.querySelector('.promo__genre'),
        poster = document.querySelector('.promo__bg'),
        addForm = document.querySelector('.add'),
        addInput = addForm.querySelector('.adding__input'),
        addCheckBox = addForm.querySelector('[type="checkbox"]'),
        promoFilmsList = document.querySelector('.promo__interactive-list'),
        liFilm = document.querySelectorAll('li.promo__interactive-item')

    
    function checkFilmName (name) {
        let newName = "";
        (name.length > 21) ? newName = newName = `${name.slice(0, 22)}...` : newName = name;
        return newName;  
    }

    function upgradeFilmsList (parent, films) {            
        movieDB.movies.sort();     
        parent.innerHTML = "";
        films.forEach((item, i) => {            
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
            </li>`;
        });

        parent.forEach((item, i) => {
            const deleteButton = item.querySelector('div.delete');                       
    
            deleteButton.addEventListener('click', (event) => {
                item.parentElement.remove();
                console.log(item, i);
            });
        })
    }
    
    function doTaskTheFirst () {
        promoADV.forEach(item => {
            item.remove();
        });
        promoGenre.textContent = 'ДРАМА';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
        upgradeFilmsList(promoFilmsList, movieDB.movies);       
    };
    
    function doTaskTheSecond () {
        addForm.addEventListener('submit', (event) => {
            event.preventDefault();        

            const newFilm = checkFilmName(addInput.value),
                isUsedCheckbox = addCheckBox.checked; 
            
            if (isUsedCheckbox) {
                console.log("Добавляем любимый фильм")
            }

            if (newFilm) {
                movieDB.movies.push(newFilm);           
                upgradeFilmsList(promoFilmsList, movieDB.movies);
            }

            event.target.reset();    
        });
        
       
    
    

    };
    
    doTaskTheFirst();
    doTaskTheSecond();
})



