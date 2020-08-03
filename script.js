const colors = ['black', 'brown', 'purple', 'cyan', 'mediumblue', '#ff00ff',
'dimgrey', '#ff8800', 'white', 'red', '#0bac0b', '#138dff',
'pink', '#6caf89', '#ff019e', 'darkviolet']

let buttons = document.querySelectorAll('.btn');

// Задаём цвета для кнопок
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = colors[i]
}

// Обработка клика: фон тега body получает такое же цвет, как и у кликнутой кнопки
buttons.forEach((item) => {
    item.addEventListener('click', () => {
        document.body.style.backgroundColor = item.style.backgroundColor;
    });
});