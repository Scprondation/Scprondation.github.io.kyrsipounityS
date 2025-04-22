document.addEventListener('DOMContentLoaded', function() {
    // Данные курса (8 недель по 7 дней)
    const courseData = {
        weeks: [
            // Неделя 1: Основы C#
            {
                id: 'week1',
                title: 'Неделя 1: Основы C#',
                days: [
                    { id: 'day1-1', title: 'День 1: Введение в C# и .NET' },
                    { id: 'day1-2', title: 'День 2: Переменные и типы данных' },
                    { id: 'day1-3', title: 'День 3: Операторы и выражения' },
                    { id: 'day1-4', title: 'День 4: Условные конструкции' },
                    { id: 'day1-5', title: 'День 5: Циклы' },
                    { id: 'day1-6', title: 'День 6: Массивы и строки' },
                    { id: 'day1-7', title: 'День 7: Практика основ C#' }
                ]
            },
            // Неделя 2: Основы ООП
            {
                id: 'week2',
                title: 'Неделя 2: Основы ООП',
                days: [
                    { id: 'day2-1', title: 'День 1: Классы и объекты' },
                    { id: 'day2-2', title: 'День 2: Методы и свойства' },
                    { id: 'day2-3', title: 'День 3: Конструкторы' },
                    { id: 'day2-4', title: 'День 4: Наследование' },
                    { id: 'day2-5', title: 'День 5: Полиморфизм' },
                    { id: 'day2-6', title: 'День 6: Интерфейсы' },
                    { id: 'day2-7', title: 'День 7: Практика ООП' }
                ]
            },
            // Неделя 3: Продвинутые темы C#
            {
                id: 'week3',
                title: 'Неделя 3: Продвинутые темы C#',
                days: [
                    { id: 'day3-1', title: 'День 1: Коллекции' },
                    { id: 'day3-2', title: 'День 2: Делегаты и события' },
                    { id: 'day3-3', title: 'День 3: LINQ' },
                    { id: 'day3-4', title: 'День 4: Исключения' },
                    { id: 'day3-5', title: 'День 5: Асинхронность' },
                    { id: 'day3-6', title: 'День 6: Работа с файлами' },
                    { id: 'day3-7', title: 'День 7: Практика продвинутого C#' }
                ]
            },
            // Неделя 4: Введение в Unity
            {
                id: 'week4',
                title: 'Неделя 4: Введение в Unity',
                days: [
                    { id: 'day4-1', title: 'День 1: Интерфейс Unity' },
                    { id: 'day4-2', title: 'День 2: Игровые объекты' },
                    { id: 'day4-3', title: 'День 3: Компоненты' },
                    { id: 'day4-4', title: 'День 4: Префабы' },
                    { id: 'day4-5', title: 'День 5: Физика' },
                    { id: 'day4-6', title: 'День 6: Сцены' },
                    { id: 'day4-7', title: 'День 7: Первый проект Unity' }
                ]
            },
            // Неделя 5: Скрипты в Unity
            {
                id: 'week5',
                title: 'Неделя 5: Скрипты в Unity',
                days: [
                    { id: 'day5-1', title: 'День 1: MonoBehaviour' },
                    { id: 'day5-2', title: 'День 2: Transform' },
                    { id: 'day5-3', title: 'День 3: Input система' },
                    { id: 'day5-4', title: 'День 4: Rigidbody' },
                    { id: 'day5-5', title: 'День 5: Коллизии' },
                    { id: 'day5-6', title: 'День 6: Триггеры' },
                    { id: 'day5-7', title: 'День 7: Практика скриптинга' }
                ]
            },
            // Неделя 6: UI и анимации
            {
                id: 'week6',
                title: 'Неделя 6: UI и анимации',
                days: [
                    { id: 'day6-1', title: 'День 1: Canvas' },
                    { id: 'day6-2', title: 'День 2: UI компоненты' },
                    { id: 'day6-3', title: 'День 3: Анимации' },
                    { id: 'day6-4', title: 'День 4: Particle Systems' },
                    { id: 'day6-5', title: 'День 5: Timeline' },
                    { id: 'day6-6', title: 'День 6: Scriptable Objects' },
                    { id: 'day6-7', title: 'День 7: UI проект' }
                ]
            },
            // Неделя 7: Оптимизация и продвинутые техники
            {
                id: 'week7',
                title: 'Неделя 7: Оптимизация и продвинутые техники',
                days: [
                    { id: 'day7-1', title: 'День 1: Профилирование' },
                    { id: 'day7-2', title: 'День 2: Оптимизация рендеринга' },
                    { id: 'day7-3', title: 'День 3: Пулы объектов' },
                    { id: 'day7-4', title: 'День 4: Адресабельные ассеты' },
                    { id: 'day7-5', title: 'День 5: Шейдеры' },
                    { id: 'day7-6', title: 'День 6: DOTS' },
                    { id: 'day7-7', title: 'День 7: Оптимизированный проект' }
                ]
            },
            // Неделя 8: Создание полной игры
            {
                id: 'week8',
                title: 'Неделя 8: Создание полной игры',
                days: [
                    { id: 'day8-1', title: 'День 1: Планирование' },
                    { id: 'day8-2', title: 'День 2: Архитектура' },
                    { id: 'day8-3', title: 'День 3: Game Manager' },
                    { id: 'day8-4', title: 'День 4: Сохранение данных' },
                    { id: 'day8-5', title: 'День 5: ИИ противников' },
                    { id: 'day8-6', title: 'День 6: Публикация' },
                    { id: 'day8-7', title: 'День 7: Итоговый проект' }
                ]
            }
        ]
    };

    // Инициализация приложения
    initApp(courseData);

    function initApp(data) {
        renderWeeks(data.weeks);
        
        loadDayContent(data.weeks[0].days[0].id);
        addEventListeners();
    }

    function renderWeeks(weeks) {
        const weeksList = document.getElementById('weeks-list');
        weeksList.innerHTML = '';

        weeks.forEach(week => {
            const weekItem = document.createElement('li');
            weekItem.className = 'week-item';
            weekItem.dataset.weekId = week.id;

            const weekHeader = document.createElement('div');
            weekHeader.className = 'week-header';
            weekHeader.innerHTML = `
                <span class="week-title">${week.title}</span>
                <span class="week-status">${getWeekProgress(week)}%</span>
            `;

            const weekDaysList = document.createElement('div');
            weekDaysList.className = 'week-days-list';

            week.days.forEach(day => {
                const dayItem = document.createElement('div');
                dayItem.className = `day-item ${day.id === 'day1-1' ? 'active' : ''}`;
                dayItem.dataset.dayId = day.id;
                dayItem.innerHTML = `<span class="day-title">${day.title}</span>`;
                weekDaysList.appendChild(dayItem);
            });

            weekItem.appendChild(weekHeader);
            weekItem.appendChild(weekDaysList);
            weeksList.appendChild(weekItem);

            if (week.id === 'week1') {
                weekDaysList.classList.add('open');
                weekHeader.classList.add('active');
            }
        });
    }

    function getWeekProgress(week) {
        // В реальном приложении нужно считать из localStorage или БД
        return 0;
    }

    
       

    function loadDayContent(dayId) {
        const contentBody = document.getElementById('content-body');
        contentBody.innerHTML = generateDayContent(dayId);
        
        document.getElementById('current-week-title').textContent = 
            `Неделя ${dayId.split('-')[0].replace('day', '')}`;
        
        const completeBtn = document.querySelector('.complete-btn');
        if (completeBtn) {
            completeBtn.addEventListener('click', function() {
                markDayAsCompleted(dayId);
            });
        }
    }

    function generateDayContent(dayId) {
        const dayContent = {
            // Неделя 1
            'day1-1': generateDay1_1Content(),
            'day1-2': generateDay1_2Content(),
            'day1-3': generateDay1_3Content(),
            'day1-4': generateDay1_4Content(),
            'day1-5': generateDay1_5Content(),
            'day1-6': generateDay1_6Content(),
            'day1-7': generateDay1_7Content(),
            
            // Неделя 2
            'day2-1': generateDay2_1Content(),
            'day2-2': generateDay2_2Content(),
            'day2-3': generateDay2_3Content(),
            'day2-4': generateDay2_4Content(),
            'day2-5': generateDay2_5Content(),
            'day2-6': generateDay2_6Content(),
            'day2-7': generateDay2_7Content(),
            
            // Неделя 3
            'day3-1': generateDay3_1Content(),
            'day3-2': generateDay3_2Content(),
            'day3-3': generateDay3_3Content(),
            'day3-4': generateDay3_4Content(),
            'day3-5': generateDay3_5Content(),
            'day3-6': generateDay3_6Content(),
            'day3-7': generateDay3_7Content(),
            
            // Неделя 4
            'day4-1': generateDay4_1Content(),
            'day4-2': generateDay4_2Content(),
            'day4-3': generateDay4_3Content(),
            'day4-4': generateDay4_4Content(),
            'day4-5': generateDay4_5Content(),
            'day4-6': generateDay4_6Content(),
            'day4-7': generateDay4_7Content(),
            
            // Неделя 5
            'day5-1': generateDay5_1Content(),
            'day5-2': generateDay5_2Content(),
            'day5-3': generateDay5_3Content(),
            'day5-4': generateDay5_4Content(),
            'day5-5': generateDay5_5Content(),
            'day5-6': generateDay5_6Content(),
            'day5-7': generateDay5_7Content(),
            
            // Неделя 6
            'day6-1': generateDay6_1Content(),
            'day6-2': generateDay6_2Content(),
            'day6-3': generateDay6_3Content(),
            'day6-4': generateDay6_4Content(),
            'day6-5': generateDay6_5Content(),
            'day6-6': generateDay6_6Content(),
            'day6-7': generateDay6_7Content(),
            
            // Неделя 7
            'day7-1': generateDay7_1Content(),
            'day7-2': generateDay7_2Content(),
            'day7-3': generateDay7_3Content(),
            'day7-4': generateDay7_4Content(),
            'day7-5': generateDay7_5Content(),
            'day7-6': generateDay7_6Content(),
            'day7-7': generateDay7_7Content(),
            
            // Неделя 8
            'day8-1': generateDay8_1Content(),
            'day8-2': generateDay8_2Content(),
            'day8-3': generateDay8_3Content(),
            'day8-4': generateDay8_4Content(),
            'day8-5': generateDay8_5Content(),
            'day8-6': generateDay8_6Content(),
            'day8-7': generateDay8_7Content()
        };

        return dayContent[dayId] || `
            <div class="lesson-content active">
                <h3 class="theory-title">${getDayTitle(dayId)}</h3>
                <div class="theory-content">
                    <p>Материал для этого дня находится в разработке.</p>
                </div>
            </div>
        `;
    }

    // Генерация контента для каждого дня
    function generateDay1_1Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Введение в C# и .NET</h3>
                <div class="theory-content">
                    <p>C# - это современный объектно-ориентированный язык программирования, разработанный Microsoft. 
                    Он является основным языком для разработки на платформе .NET.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Основные особенности C#</h4>
                        <ul>
                            <li>Объектно-ориентированный подход</li>
                            <li>Статическая типизация</li>
                            <li>Автоматическое управление памятью (GC)</li>
                            <li>Богатая стандартная библиотека</li>
                            <li>Кроссплатформенность (с .NET Core)</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Простейшая программа на C#
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Установите .NET SDK</li>
                        <li>Создайте консольное приложение</li>
                        <li>Выведите разные сообщения в консоль</li>
                        <li>Используйте форматированный вывод</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay1_2Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Переменные и типы данных</h3>
                <div class="theory-content">
                    <p>Переменные используются для хранения данных в программе. В C# каждая переменная имеет определенный тип.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Основные типы данных</h4>
                        <table>
                            <tr><th>Тип</th><th>Описание</th><th>Пример</th></tr>
                            <tr><td>int</td><td>Целое число</td><td>42</td></tr>
                            <tr><td>double</td><td>Число с плавающей точкой</td><td>3.14</td></tr>
                            <tr><td>bool</td><td>Логическое значение</td><td>true</td></tr>
                            <tr><td>char</td><td>Символ</td><td>'A'</td></tr>
                            <tr><td>string</td><td>Строка</td><td>"Hello"</td></tr>
                        </table>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Объявление переменных
int age = 25;
double price = 9.99;
string name = "Иван";
bool isActive = true;</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Объявите переменные разных типов</li>
                        <li>Выполните арифметические операции</li>
                        <li>Поэкспериментируйте с преобразованием типов</li>
                        <li>Выведите результаты в консоль</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay1_3Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Операторы и выражения</h3>
                <div class="theory-content">
                    <p>Операторы позволяют выполнять операции над переменными и значениями. Выражения комбинируют операторы и операнды для вычисления нового значения.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Основные операторы C#</h4>
                        <ul>
                            <li>Арифметические: +, -, *, /, %</li>
                            <li>Сравнения: ==, !=, >, <, >=, <=</li>
                            <li>Логические: &&, ||, !</li>
                            <li>Присваивания: =, +=, -=, *=, /=</li>
                            <li>Инкремента/декремента: ++, --</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Примеры операторов
int a = 10, b = 3;
int sum = a + b;       // 13
bool isEqual = a == b;  // false
a++;                   // 11</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Создайте программу для вычисления площади круга</li>
                        <li>Реализуйте конвертер температур (Цельсий ↔ Фаренгейт)</li>
                        <li>Напишите программу для решения квадратного уравнения</li>
                        <li>Добавьте обработку ввода пользователя</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay1_4Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Условные конструкции</h3>
                <div class="theory-content">
                    <p>Условные конструкции позволяют выполнять разные блоки кода в зависимости от условий.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Основные условные конструкции</h4>
                        <ul>
                            <li>if-else - выполнение кода при выполнении условия</li>
                            <li>switch - выбор из нескольких вариантов</li>
                            <li>тернарный оператор - компактная форма if-else</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Примеры условных конструкций
int age = 18;

// if-else
if (age >= 18) {
    Console.WriteLine("Доступ разрешен");
} else {
    Console.WriteLine("Доступ запрещен");
}

// switch
switch (age) {
    case 16: Console.WriteLine("Можно учиться водить"); break;
    case 18: Console.WriteLine("Можно голосовать"); break;
    default: Console.WriteLine("Нет специальных прав"); break;
}</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Напишите программу проверки четности числа</li>
                        <li>Создайте калькулятор с выбором операции (+, -, *, /)</li>
                        <li>Реализуйте систему оценок (A-F) по баллам</li>
                        <li>Добавьте обработку неверного ввода</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay1_5Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Циклы</h3>
                <div class="theory-content">
                    <p>Циклы позволяют повторять выполнение блока кода несколько раз.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Типы циклов в C#</h4>
                        <ul>
                            <li>for - когда известно количество итераций</li>
                            <li>while - пока условие истинно</li>
                            <li>do-while - выполнить хотя бы один раз, затем проверка условия</li>
                            <li>foreach - для перебора элементов коллекции</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Примеры циклов
// for
for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);
}

// while
int j = 0;
while (j < 5) {
    Console.WriteLine(j);
    j++;
}

// foreach
string[] names = {"Анна", "Борис", "Вера"};
foreach (string name in names) {
    Console.WriteLine(name);
}</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Напишите программу для вывода таблицы умножения</li>
                        <li>Реализуйте подсчет факториала числа</li>
                        <li>Создайте программу для угадывания числа</li>
                        <li>Выведите все простые числа до N</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay1_6Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Массивы и строки</h3>
                <div class="theory-content">
                    <p>Массивы позволяют хранить наборы данных одного типа. Строки - это последовательности символов.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Работа с массивами и строками</h4>
                        <ul>
                            <li>Массивы имеют фиксированный размер</li>
                            <li>Индексация начинается с 0</li>
                            <li>Строки неизменяемы (immutable)</li>
                            <li>StringBuilder для эффективной работы со строками</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Примеры работы с массивами и строками
// Массивы
int[] numbers = new int[5] {1, 2, 3, 4, 5};
Console.WriteLine(numbers[0]); // 1

// Строки
string greeting = "Hello";
string name = "World";
string message = greeting + " " + name;
Console.WriteLine(message.Length); // 11
Console.WriteLine(message.ToUpper()); // HELLO WORLD</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Напишите программу для поиска максимального элемента в массиве</li>
                        <li>Реализуйте реверс строки (без использования Reverse)</li>
                        <li>Создайте программу для подсчета слов в предложении</li>
                        <li>Напишите программу для проверки палиндрома</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay1_7Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Практика основ C#</h3>
                <div class="theory-content">
                    <p>Сегодня мы закрепим все изученные концепции, создав несколько небольших программ.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Основные концепции для повторения</h4>
                        <ul>
                            <li>Переменные и типы данных</li>
                            <li>Операторы и выражения</li>
                            <li>Условные конструкции</li>
                            <li>Циклы</li>
                            <li>Массивы и строки</li>
                        </ul>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Создайте программу "Калькулятор" с меню операций</li>
                        <li>Реализуйте программу для работы с массивом чисел:
                            <ul>
                                <li>Добавление/удаление элементов</li>
                                <li>Поиск по значению</li>
                                <li>Сортировка</li>
                            </ul>
                        </li>
                        <li>Напишите программу для анализа текста:
                            <ul>
                                <li>Подсчет символов и слов</li>
                                <li>Поиск наиболее частого слова</li>
                                <li>Замена подстрок</li>
                            </ul>
                        </li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    // Неделя 2: Основы ООП
    function generateDay2_1Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Классы и объекты</h3>
                <div class="theory-content">
                    <p>Классы - это шаблоны для создания объектов. Объекты - экземпляры классов.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Основные понятия ООП</h4>
                        <ul>
                            <li>Класс - описание структуры и поведения</li>
                            <li>Объект - конкретный экземпляр класса</li>
                            <li>Поля - данные объекта</li>
                            <li>Методы - функции объекта</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Пример класса и объекта
class Person
{
    // Поля
    public string Name;
    public int Age;
    
    // Метод
    public void Greet() {
        Console.WriteLine($"Привет, меня зовут {Name}, мне {Age} лет");
    }
}

// Создание объекта
Person person = new Person();
person.Name = "Иван";
person.Age = 30;
person.Greet(); // Привет, меня зовут Иван, мне 30 лет</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Создайте класс "Книга" с полями: название, автор, год издания</li>
                        <li>Добавьте метод для вывода информации о книге</li>
                        <li>Создайте несколько объектов этого класса</li>
                        <li>Реализуйте массив книг и вывод информации о них</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay2_2Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Методы и свойства</h3>
                <div class="theory-content">
                    <p>Методы определяют поведение объектов. Свойства обеспечивают контролируемый доступ к полям.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Особенности методов и свойств</h4>
                        <ul>
                            <li>Методы могут принимать параметры и возвращать значения</li>
                            <li>Свойства могут иметь get и set аксессоры</li>
                            <li>Модификаторы доступа: public, private, protected</li>
                            <li>Статические методы принадлежат классу, а не объекту</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Пример методов и свойств
class BankAccount
{
    private decimal balance;
    
    // Свойство
    public decimal Balance {
        get { return balance; }
        set { if (value >= 0) balance = value; }
    }
    
    // Метод
    public void Deposit(decimal amount) {
        if (amount > 0) Balance += amount;
    }
    
    public bool Withdraw(decimal amount) {
        if (amount > 0 && Balance >= amount) {
            Balance -= amount;
            return true;
        }
        return false;
    }
}</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Расширьте класс "Книга" из предыдущего задания:
                            <ul>
                                <li>Добавьте свойство для проверки, является ли книга антикварной (>50 лет)</li>
                                <li>Добавьте метод для изменения года издания с проверкой</li>
                            </ul>
                        </li>
                        <li>Создайте класс "Прямоугольник" с методами для вычисления площади и периметра</li>
                        <li>Реализуйте класс "Счетчик" с методами увеличения, уменьшения и сброса</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay2_3Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Конструкторы</h3>
                <div class="theory-content">
                    <p>Конструкторы - специальные методы, вызываемые при создании объекта. Они инициализируют поля объекта.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Типы конструкторов</h4>
                        <ul>
                            <li>Конструктор по умолчанию (без параметров)</li>
                            <li>Параметризованный конструктор</li>
                            <li>Конструктор копирования</li>
                            <li>Статический конструктор (для инициализации класса)</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Примеры конструкторов
class Car
{
    public string Model { get; }
    public int Year { get; }
    
    // Конструктор по умолчанию
    public Car() {
        Model = "Unknown";
        Year = DateTime.Now.Year;
    }
    
    // Параметризованный конструктор
    public Car(string model, int year) {
        Model = model;
        Year = year;
    }
    
    // Конструктор копирования
    public Car(Car other) {
        Model = other.Model;
        Year = other.Year;
    }
}

// Использование
Car defaultCar = new Car();
Car myCar = new Car("Toyota", 2020);
Car copiedCar = new Car(myCar);</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Добавьте конструкторы в класс "Книга":
                            <ul>
                                <li>По умолчанию (с значениями "Без названия", "Неизвестен", текущий год)</li>
                                <li>С параметрами для всех полей</li>
                                <li>Копирования</li>
                            </ul>
                        </li>
                        <li>Создайте класс "Треугольник" с конструкторами:
                            <ul>
                                <li>Принимающий длины трех сторон</li>
                                <li>Принимающий координаты трех точек</li>
                            </ul>
                        </li>
                        <li>Реализуйте проверку на возможность существования треугольника</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay2_4Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Наследование</h3>
                <div class="theory-content">
                    <p>Наследование позволяет создавать новые классы на основе существующих, переиспользуя их функциональность.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Основы наследования</h4>
                        <ul>
                            <li>Базовый (родительский) класс - общая функциональность</li>
                            <li>Производный (дочерний) класс - расширяет базовый</li>
                            <li>Ключевое слово <code>base</code> для доступа к членам базового класса</li>
                            <li>Все классы неявно наследуются от Object</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Пример наследования
class Animal
{
    public string Name { get; set; }
    
    public virtual void MakeSound() {
        Console.WriteLine("Some sound");
    }
}

class Dog : Animal
{
    public string Breed { get; set; }
    
    public override void MakeSound() {
        Console.WriteLine("Woof!");
    }
    
    public void Fetch() {
        Console.WriteLine($"{Name} is fetching");
    }
}

// Использование
Animal animal = new Animal();
animal.MakeSound(); // Some sound

Dog dog = new Dog { Name = "Buddy", Breed = "Labrador" };
dog.MakeSound(); // Woof!
dog.Fetch(); // Buddy is fetching</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Создайте иерархию классов для транспортных средств:
                            <ul>
                                <li>Базовый класс Vehicle с полями: скорость, вместимость</li>
                                <li>Производные классы: Car, Bus, Train</li>
                                <li>Добавьте уникальные свойства и методы для каждого типа</li>
                            </ul>
                        </li>
                        <li>Реализуйте класс "Человек" и производные "Студент", "Преподаватель"</li>
                        <li>Создайте массив транспортных средств и выведите информацию о них</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay2_5Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Полиморфизм</h3>
                <div class="theory-content">
                    <p>Полиморфизм позволяет использовать объекты разных классов через общий интерфейс.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Виды полиморфизма</h4>
                        <ul>
                            <li>Переопределение методов (override)</li>
                            <li>Перегрузка методов (overload)</li>
                            <li>Абстрактные классы и методы</li>
                            <li>Виртуальные методы</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Пример полиморфизма
abstract class Shape
{
    public abstract double Area();
    
    public virtual void PrintInfo() {
        Console.WriteLine("This is a shape");
    }
}

class Circle : Shape
{
    public double Radius { get; set; }
    
    public override double Area() {
        return Math.PI * Radius * Radius;
    }
    
    public override void PrintInfo() {
        Console.WriteLine($"Circle with radius {Radius}");
    }
}

class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }
    
    public override double Area() {
        return Width * Height;
    }
    
    // Перегрузка метода
    public void Resize(double factor) {
        Width *= factor;
        Height *= factor;
    }
    
    public void Resize(double widthFactor, double heightFactor) {
        Width *= widthFactor;
        Height *= heightFactor;
    }
}

// Использование
Shape[] shapes = new Shape[] {
    new Circle { Radius = 5 },
    new Rectangle { Width = 3, Height = 4 }
};

foreach (Shape shape in shapes) {
    shape.PrintInfo();
    Console.WriteLine($"Area: {shape.Area()}");
}</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Расширьте иерархию транспортных средств:
                            <ul>
                                <li>Добавьте абстрактный метод "Расход топлива"</li>
                                <li>Реализуйте его в каждом производном классе</li>
                                <li>Добавьте виртуальный метод "Общая информация"</li>
                            </ul>
                        </li>
                        <li>Создайте массив фигур (круг, прямоугольник, треугольник) и вычислите их общую площадь</li>
                        <li>Реализуйте перегрузку методов в одном из классов</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay2_6Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Интерфейсы</h3>
                <div class="theory-content">
                    <p>Интерфейсы определяют контракты, которые должны реализовывать классы.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Особенности интерфейсов</h4>
                        <ul>
                            <li>Содержат только сигнатуры методов, свойств, событий</li>
                            <li>Класс может реализовывать несколько интерфейсов</li>
                            <li>Позволяют достичь полиморфизма без наследования</li>
                            <li>Новые версии C# поддерживают реализации по умолчанию</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Пример интерфейсов
interface ILogger
{
    void Log(string message);
}

interface IRepository
{
    void Save(object data);
}

class DatabaseLogger : ILogger
{
    public void Log(string message) {
        Console.WriteLine($"DB Log: {message}");
    }
}

class FileRepository : IRepository, ILogger
{
    public void Save(object data) {
        Console.WriteLine("Data saved to file");
    }
    
    public void Log(string message) {
        Console.WriteLine($"File Log: {message}");
    }
}

// Использование
ILogger logger = new DatabaseLogger();
logger.Log("System started");

FileRepository repo = new FileRepository();
repo.Save(new object());
repo.Log("Data saved");

// Интерфейс как параметр метода
void ProcessWithLogging(ILogger logger, string message) {
    // ... some processing
    logger.Log(message);
}</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Создайте интерфейсы:
                            <ul>
                                <li>IDrawable с методом Draw()</li>
                                <li>IMovable с методами MoveTo(), Rotate()</li>
                            </ul>
                        </li>
                        <li>Реализуйте эти интерфейсы в классах Circle и Rectangle</li>
                        <li>Создайте класс "Сцена" который может содержать любые IDrawable объекты</li>
                        <li>Добавьте метод Render() который вызывает Draw() для всех объектов</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay2_7Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Практика ООП</h3>
                <div class="theory-content">
                    <p>Сегодня мы закрепим все концепции ООП, создав более сложную программу.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Концепции ООП для повторения</h4>
                        <ul>
                            <li>Классы и объекты</li>
                            <li>Наследование и полиморфизм</li>
                            <li>Интерфейсы и абстрактные классы</li>
                            <li>Инкапсуляция данных</li>
                        </ul>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Реализуйте систему для библиотеки:
                            <ul>
                                <li>Классы: Книга, Читатель, Библио��екарь</li>
                                <li>Интерфейсы: IPrintable, IBorrowable</li>
                                <li>Абстрактный класс LibraryItem</li>
                            </ul>
                        </li>
                        <li>Добавьте функциональность:
                            <ul>
                                <li>Выдача и возврат книг</li>
                                <li>Поиск по автору/названию</li>
                                <li>Учет просроченных книг</li>
                            </ul>
                        </li>
                        <li>Создайте консольный интерфейс для работы с библиотекой</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    // Неделя 3: Продвинутые темы C#
    function generateDay3_1Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Коллекции</h3>
                <div class="theory-content">
                    <p>Коллекции позволяют работать с наборами объектов более гибко, чем массивы.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Основные типы коллекций</h4>
                        <ul>
                            <li>List<T> - динамический массив</li>
                            <li>Dictionary<TKey, TValue> - коллекция ключ-значение</li>
                            <li>Queue<T> - очередь (FIFO)</li>
                            <li>Stack<T> - стек (LIFO)</li>
                            <li>HashSet<T> - множество уникальных элементов</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Примеры коллекций
// List
List<string> names = new List<string> { "Alice", "Bob" };
names.Add("Charlie");
names.Remove("Bob");

// Dictionary
Dictionary<string, int> ages = new Dictionary<string, int>();
ages["Alice"] = 25;
ages["Bob"] = 30;

// Queue
Queue<int> numbers = new Queue<int>();
numbers.Enqueue(1);
numbers.Enqueue(2);
int first = numbers.Dequeue(); // 1

// LINQ для работы с коллекциями
var adults = from person in ages 
             where person.Value >= 18 
             select person.Key;</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Создайте программу для учета продуктов:
                            <ul>
                                <li>Используйте Dictionary для хранения цены по названию</li>
                                <li>Реализуйте добавление, удаление, поиск продуктов</li>
                            </ul>
                        </li>
                        <li>Напишите программу для обработки очереди заказов (Queue)</li>
                        <li>Реализуйте проверку на уникальность элементов с помощью HashSet</li>
                        <li>Добавьте сортировку и фильтрацию коллекций</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay3_2Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Делегаты и события</h3>
                <div class="theory-content">
                    <p>Делегаты - это типы, представляющие ссылки на методы. События - механизм для оповещения о происшествиях.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Основные концепции</h4>
                        <ul>
                            <li>Делегаты похожи на указатели на функции в C++</li>
                            <li>Action и Func - стандартные обобщенные делегаты</li>
                            <li>События строятся на основе делегатов</li>
                            <li>Лямбда-выражения для создания анонимных методов</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Примеры делегатов и событий
// Объявление делегата
delegate void MessageHandler(string message);

class Publisher
{
    // Объявление события
    public event MessageHandler MessageReceived;
    
    public void SendMessage(string message) {
        Console.WriteLine($"Sending: {message}");
        MessageReceived?.Invoke(message);
    }
}

class Subscriber
{
    public void OnMessageReceived(string message) {
        Console.WriteLine($"Received: {message}");
    }
}

// Использование
Publisher publisher = new Publisher();
Subscriber subscriber = new Subscriber();

// Подписка на событие
publisher.MessageReceived += subscriber.OnMessageReceived;
publisher.MessageReceived += m => Console.WriteLine($"Lambda: {m}");

publisher.SendMessage("Hello!");

// Стандартные делегаты
Action<string> action = Console.WriteLine;
Func<int, int, int> adder = (a, b) => a + b;</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Создайте систему оповещения:
                            <ul>
                                <li>Класс "Температурный датчик" с событием "Температура изменилась"</li>
                                <li>Несколько подписчиков (логгер, аварийная система)</li>
                            </ul>
                        </li>
                        <li>Реализуйте калькулятор с использованием делегатов</li>
                        <li>Создайте систему обработки заказов с событиями "Заказ создан", "Заказ выполнен"</li>
                        <li>Используйте лямбда-выражения для обработки событий</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay3_3Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">LINQ</h3>
                <div class="theory-content">
                    <p>LINQ (Language Integrated Query) - технология для запросов к данным прямо в коде C#.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Основы LINQ</h4>
                        <ul>
                            <li>Работает с коллекциями, базами данных, XML</li>
                            <li>Два синтаксиса: метод расширения и query-синтаксис</li>
                            <li>Отложенное выполнение (deferred execution)</li>
                            <li>Основные операции: Where, Select, OrderBy, GroupBy, Join</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Примеры LINQ
class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string City { get; set; }
}

List<Person> people = new List<Person> {
    new Person { Name = "Alice", Age = 25, City = "New York" },
    new Person { Name = "Bob", Age = 30, City = "London" },
    new Person { Name = "Charlie", Age = 20, City = "New York" }
};

// Query-синтаксис
var query = from p in people
            where p.City == "New York"
            orderby p.Age
            select p.Name;

// Методы расширения
var method = people
    .Where(p => p.City == "New York")
    .OrderBy(p => p.Age)
    .Select(p => p.Name);

// Группировка
var groups = from p in people
             group p by p.City into cityGroup
             select new {
                 City = cityGroup.Key,
                 Count = cityGroup.Count(),
                 AvgAge = cityGroup.Average(p => p.Age)
             };</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Создайте коллекцию продуктов (название, цена, категория)</li>
                        <li>Напишите LINQ-запросы для:
                            <ul>
                                <li>Фильтрации по категории</li>
                                <li>Сортировки по цене</li>
                                <li>Группировки по категории</li>
                                <li>Вычисления средней цены</li>
                            </ul>
                        </li>
                        <li>Реализуйте поиск по названию (с учетом регистра/без)</li>
                        <li>Создайте запрос с соединением (join) двух коллекций</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay3_4Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Исключения</h3>
                <div class="theory-content">
                    <p>Исключения - механизм обработки ошибок и нестандартных ситуаций в программе.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Обработка исключений</h4>
                        <ul>
                            <li>try-catch-finally - блоки для обработки исключений</li>
                            <li>Exception - базовый класс всех исключений</li>
                            <li>throw - генерация исключения</li>
                            <li>Пользовательские исключения (наследование от Exception)</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Примеры обработки исключений
try {
    Console.Write("Введите число: ");
    string input = Console.ReadLine();
    int number = int.Parse(input);
    
    if (number < 0) {
        throw new ArgumentException("Число не может быть отрицательным");
    }
    
    Console.WriteLine($"Квадратный корень: {Math.Sqrt(number)}");
}
catch (FormatException) {
    Console.WriteLine("Ошибка: введено не число");
}
catch (ArgumentException ex) {
    Console.WriteLine($"Ошибка: {ex.Message}");
}
catch (Exception ex) {
    Console.WriteLine($"Неизвестная ошибка: {ex.Message}");
}
finally {
    Console.WriteLine("Блок finally выполняется всегда");
}

// Пользовательское исключение
class NegativeNumberException : Exception
{
    public NegativeNumberException() : base("Число не может быть отрицательным") {}
}</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Создайте калькулятор с обработкой исключений:
                            <ul>
                                <li>Деление на ноль</li>
                                <li>Неверный формат числа</li>
                                <li>Переполнение</li>
                            </ul>
                        </li>
                        <li>Реализуйте пользовательское исключение для слишком больших чисел</li>
                        <li>Напишите код для чтения файла с обработкой возможных ошибок</li>
                        <li>Создайте систему проверки пароля с генерацией исключений при несоответствии требованиям</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay3_5Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Асинхронность</h3>
                <div class="theory-content">
                    <p>Асинхронное программирование позволяет выполнять длительные операции без блокировки основного потока.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Ключевые концепции</h4>
                        <ul>
                            <li>async/await - ключевые слова для асинхронного кода</li>
                            <li>Task - представляет асинхронную операцию</li>
                            <li>Потоки (Thread) vs асинхронность (async)</li>
                            <li>ConfigureAwait для управления контекстом синхронизации</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Примеры асинхронного кода
async Task DownloadDataAsync()
{
    Console.WriteLine("Начало загрузки...");
    
    using (HttpClient client = new HttpClient())
    {
        try {
            string result = await client.GetStringAsync("https://example.com");
            Console.WriteLine($"Загружено {result.Length} символов");
        }
        catch (HttpRequestException ex) {
            Console.WriteLine($"Ошибка загрузки: {ex.Message}");
        }
    }
    
    Console.WriteLine("Загрузка завершена");
}

// Вызов асинхронного метода
async Task Main()
{
    Task downloadTask = DownloadDataAsync();
    Console.WriteLine("Пока данные загружаются, можно делать что-то еще...");
    await downloadTask;
}

// Параллельные задачи
async Task ProcessMultipleRequests()
{
    Task<string> task1 = GetDataAsync("url1");
    Task<string> task2 = GetDataAsync("url2");
    
    await Task.WhenAll(task1, task2);
    
    Console.WriteLine($"Результат 1: {task1.Result}");
    Console.WriteLine($"Результат 2: {task2.Result}");
}</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Создайте асинхронный метод для вычисления факториала с задержкой</li>
                        <li>Реализуйте параллельную загрузку нескольких веб-страниц</li>
                        <li>Напишите асинхронный файловый менеджер:
                            <ul>
                                <li>Чтение/запись файлов</li>
                                <li>Копирование файлов с прогрессом</li>
                            </ul>
                        </li>
                        <li>Добавьте отмену операции с помощью CancellationToken</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay3_6Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Работа с файлами</h3>
                <div class="theory-content">
                    <p>.NET предоставляет богатые возможности для работы с файловой системой и потоками данных.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Основные классы</h4>
                        <ul>
                            <li>File, Directory - статические методы для работы с файлами и папками</li>
                            <li>FileInfo, DirectoryInfo - объектно-ориентирован��ый подход</li>
                            <li>StreamReader/StreamWriter - для текстовых файлов</li>
                            <li>FileStream - для бинарных данных</li>
                            <li>Path - работа с путями</li>
                        </ul>
                    </div>
                    
                    <div class="code-block">
                        <pre>// Примеры работы с файлами
// Чтение/запись текстового файла
string filePath = "data.txt";

// Запись
File.WriteAllText(filePath, "Hello, File!");
File.AppendAllText(filePath, "\nAnother line");

// Чтение
string content = File.ReadAllText(filePath);
Console.WriteLine(content);

// Построчное чтение
string[] lines = File.ReadAllLines(filePath);
foreach (string line in lines) {
    Console.WriteLine(line);
}

// Работа с директориями
string dirPath = "MyFiles";
if (!Directory.Exists(dirPath)) {
    Directory.CreateDirectory(dirPath);
}

// Получение списка файлов
var files = Directory.GetFiles(dirPath, "*.txt");
foreach (var file in files) {
    FileInfo fi = new FileInfo(file);
    Console.WriteLine($"{fi.Name} - {fi.Length} bytes");
}

// Использование StreamWriter
using (StreamWriter writer = new StreamWriter("log.txt", true)) {
    await writer.WriteLineAsync($"{DateTime.Now}: Application started");
}</pre>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Создайте программу для ведения журнала (логгера):
                            <ul>
                                <li>Запись сообщений с временем в файл</li>
                                <li>Ротация логов по датам</li>
                            </ul>
                        </li>
                        <li>Реализуйте резервное копирование папки:
                            <ul>
                                <li>Копирование всех файлов</li>
                                <li>Сравнение версий</li>
                            </ul>
                        </li>
                        <li>Напишите программу для поиска дубликатов файлов</li>
                        <li>Создайте простую базу данных в текстовом файле с возможностью CRUD</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    function generateDay3_7Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Практика продвинутого C#</h3>
                <div class="theory-content">
                    <p>Сегодня мы закрепим все продвинутые концепции C#, создав комплексное приложение.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Концепции для повторения</h4>
                        <ul>
                            <li>Коллекции и LINQ</li>
                            <li>Делегаты и события</li>
                            <li>Асинхронное программирование</li>
                            <li>Работа с файлами</li>
                            <li>Обработка исключений</li>
                        </ul>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Создайте приложение "Менеджер задач":
                            <ul>
                                <li>Хранение задач в файле (JSON/XML)</li>
                                <li>Фильтрация и сортировка (LINQ)</li>
                                <li>Асинхронное сохранение</li>
                                <li>События для изменения состояния задач</li>
                            </ul>
                        </li>
                        <li>Реализуйте:
                            <ul>
                                <li>Добавление/удаление/редактирование задач</li>
                                <li>Поиск по названию/дате/статусу</li>
                                <li>Статистику по задачам</li>
                            </ul>
                        </li>
                        <li>Добавьте обработку всех возможных исключений</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    // Неделя 4: Введение в Unity
    function generateDay4_1Content() {
        return `
            <div class="lesson-content active">
                <h3 class="theory-title">Интерфейс Unity</h3>
                <div class="theory-content">
                    <p>Unity - мощный движок для разработки 2D и 3D игр и приложений.</p>
                    
                    <div class="term-card">
                        <h4 class="term-title">Основные компоненты интерфейса</h4>
                        <ul>
                            <li>Scene View - редактирование сцены</li>
                            <li>Game View - предпросмотр игры</li>
                            <li>Hierarchy - список объектов на сцене</li>
                            <li>Project - файлы проекта</li>
                            <li>Inspector - свойства выбранного объекта</li>
                            <li>Console - вывод сообщений и ошибок</li>
                        </ul>
                    </div>
                    
                    <div class="unity-tip">
                        <h4>Совет по Unity</h4>
                        <p>Используйте горячие клавиши для быстрой навигации:
                        <br>F - сфокусироваться на выделенном объекте
                        <br>Q, W, E, R - инструменты перемещения
                        <br>Ctrl+S - часто сохраняйтесь!</p>
                    </div>
                </div>
                
                <div class="practice-task">
                    <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                    <ol class="practice-steps">
                        <li>Установите Unity Hub и создайте новый 3D проект</li>
                        <li>Изучите интерфейс:
                            <ul>
                                <li>Попробуйте все основные окна</li>
                                <li>Измените layout интерфейса</li>
                            </ul>
                        </li>
                        <li>Создайте простую сцену:
                            <ul>
                                <li>Добавьте Plane (пол)</li>
                                <li>Добавьте Cube (объект)</li>
                                <li>Добавьте Directional Light (освещение)</li>
                            </ul>
                        </li>
                        <li>Сохраните сцену и проект</li>
                    </ol>
                    <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
                </div>
            </div>
        `;
    }

    // Остальные дни недели 4-8 следуют аналогичному шаблону, но для краткости я их опущу.
    function generateDay4_2Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Игровые объекты</h3>
            <div class="theory-content">
                <p>GameObject - фундаментальный строительный блок в Unity, представляющий любой объект в сцене.</p>
                
                <div class="term-card">
                    <h4 class="term-title">Характеристики GameObject</h4>
                    <ul>
                        <li>Имеет Transform компонент по умолчанию</li>
                        <li>Может быть пустым или содержать меш, свет, камеру и т.д.</li>
                        <li>Может быть включен/выключен</li>
                        <li>Имеет тег (tag) и слой (layer)</li>
                    </ul>
                </div>
                
                <div class="code-block">
                    <pre>// Создание GameObject через код
void Start() {
    // Создаем новый пустой объект
    GameObject newObj = new GameObject("MyObject");
    
    // Добавляем компонент
    newObj.AddComponent<Rigidbody>();
    
    // Устанавливаем позицию
    newObj.transform.position = new Vector3(0, 5, 0);
}</pre>
                </div>
            </div>
            
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol class="practice-steps">
                    <li>Создайте новую сцену</li>
                    <li>Добавьте несколько примитивов (куб, сфера, капсула)</li>
                    <li>Измените их свойства в Inspector:
                        <ul>
                            <li>Позиция, поворот, масштаб</li>
                            <li>Названия объектов</li>
                            <li>Цвета материалов</li>
                        </ul>
                    </li>
                    <li>Создайте пустой GameObject и сделайте его родителем для примитивов</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay4_3Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Компоненты</h3>
            <div class="theory-content">
                <p>Компоненты добавляют функциональность GameObject'ам. Каждый GameObject - это контейнер для компонентов.</p>
                
                <div class="term-card">
                    <h4 class="term-title">Основные компоненты</h4>
                    <ul>
                        <li>Transform - позиция, поворот, масштаб</li>
                        <li>Mesh Filter/Renderer - отображение 3D объекта</li>
                        <li>Colliders - обработка столкновений</li>
                        <li>Rigidbody - физическое поведение</li>
                        <li>Scripts - пользовательская логика</li>
                    </ul>
                </div>
                
                <div class="code-block">
                    <pre>// Работа с компонентами в коде
void Start() {
    // Получение компонента
    Rigidbody rb = GetComponent<Rigidbody>();
    
    // Проверка наличия компонента
    if (TryGetComponent(out Renderer renderer)) {
        renderer.material.color = Color.red;
    }
    
    // Добавление компонента
    gameObject.AddComponent<BoxCollider>();
}</pre>
                </div>
            </div>
            
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol class="practice-steps">
                    <li>Создайте новый GameObject с примитивом</li>
                    <li>Добавьте и настройте компоненты:
                        <ul>
                            <li>Rigidbody - гравитация, масса</li>
                            <li>Collider - размер, форма</li>
                            <li>Light - цвет, интенсивность</li>
                        </ul>
                    </li>
                    <li>Напишите простой скрипт, который меняет цвет объекта при клике</li>
                    <li>Создайте составной объект из нескольких компонентов</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay4_4Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Префабы</h3>
            <div class="theory-content">
                <p>Префабы (Prefabs) - это шаблоны GameObject'ов, которые можно повторно использовать в проекте.</p>
                
                <div class="term-card">
                    <h4 class="term-title">Преимущества префабов</h4>
                    <ul>
                        <li>Повторное использование объектов</li>
                        <li>Централизованное управление изменениями</li>
                        <li>Экземпляры сохраняют связь с оригиналом</li>
                        <li>Можно переопределять свойства экземпляров</li>
                    </ul>
                </div>
                
                <div class="code-block">
                    <pre>// Работа с префабами в коде
public GameObject prefab;

void Start() {
    // Создание экземпляра префаба
    Instantiate(prefab, new Vector3(0, 0, 0), Quaternion.identity);
    
    // Создание с родителем
    Instantiate(prefab, transform);
}</pre>
                </div>
            </div>
            
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol class="practice-steps">
                    <li>Создайте сложный GameObject (например, дверь с ручкой)</li>
                    <li>Сделайте из него префаб, перетащив в папку Prefabs</li>
                    <li>Создайте несколько экземпляров префаба в сцене</li>
                    <li>Измените оригинальный префаб и убедитесь, что изменения применились ко всем экземплярам</li>
                    <li>Переопределите некоторые свойства у отдельных экземпляров</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay4_5Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Физика</h3>
            <div class="theory-content">
                <p>Unity имеет мощную физическую систему, основанную на компонентах Rigidbody и Collider.</p>
                
                <div class="term-card">
                    <h4 class="term-title">Основы физики в Unity</h4>
                    <ul>
                        <li>Rigidbody - делает объект подверженным физике</li>
                        <li>Collider - определяет форму для столкновений</li>
                        <li>Physic Material - настройка трения и отскока</li>
                        <li>Слои физики - управление взаимодействиями</li>
                    </ul>
                </div>
                
                <div class="code-block">
                    <pre>// Пример работы с физикой
void Start() {
    // Применение силы
    Rigidbody rb = GetComponent<Rigidbody>();
    rb.AddForce(Vector3.up * 10, ForceMode.Impulse);
}

// Обработка столкновений
void OnCollisionEnter(Collision collision) {
    Debug.Log($"Collided with {collision.gameObject.name}");
}</pre>
                </div>
            </div>
            
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol class="practice-steps">
                    <li>Создайте сцену с физическими объектами:
                        <ul>
                            <li>Плоскость (статический коллайдер)</li>
                            <li>Несколько падающих кубов (Rigidbody)</li>
                            <li>Шары с разной массой</li>
                        </ul>
                    </li>
                    <li>Настройте Physic Material с разным трением и отскоком</li>
                    <li>Напишите скрипт, который при клике на объект придает ему силу</li>
                    <li>Создайте цепь падающих домино</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay4_6Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Сцены</h3>
            <div class="theory-content">
                <p>Сцены в Unity позволяют разделять игровые уровни, меню и другие части игры.</p>
                
                <div class="term-card">
                    <h4 class="term-title">Работа со сценами</h4>
                    <ul>
                        <li>Каждая сцена - отдельный файл .unity</li>
                        <li>Можно загружать аддитивно или заменять текущую</li>
                        <li>SceneManager управляет загрузкой сцен</li>
                        <li>DontDestroyOnLoad для объектов между сценами</li>
                    </ul>
                </div>
                
                <div class="code-block">
                    <pre>// Пример работы со сценами
using UnityEngine.SceneManagement;

void LoadGameScene() {
    // Загрузка сцены по имени
    SceneManager.LoadScene("GameScene");
    
    // Аддитивная загрузка
    SceneManager.LoadScene("UI", LoadSceneMode.Additive);
}

void RestartCurrentScene() {
    // Перезагрузка текущей сцены
    SceneManager.LoadScene(SceneManager.GetActiveScene().name);
}</pre>
                </div>
            </div>
            
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol class="practice-steps">
                    <li>Создайте несколько сцен:
                        <ul>
                            <li>Меню</li>
                            <li>Игровой уровень</li>
                            <li>Экран победы</li>
                        </ul>
                    </li>
                    <li>Настройте переходы между сценами:
                        <ul>
                            <li>Кнопка "Start" в меню загружает уровень</li>
                            <li>При завершении уровня - экран победы</li>
                            <li>Кнопка "Menu" возвращает в меню</li>
                        </ul>
                    </li>
                    <li>Создайте GameObject, который сохраняется между сценами (DontDestroyOnLoad)</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay4_7Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Первый проект Unity</h3>
            <div class="theory-content">
                <p>Сегодня мы создадим простую игру, используя все изученные концепции Unity.</p>
                
                <div class="term-card">
                    <h4 class="term-title">Концепции для проекта</h4>
                    <ul>
                        <li>GameObjects и компоненты</li>
                        <li>Префабы для повторного использования</li>
                        <li>Физика и коллайдеры</li>
                        <li>Управление сценами</li>
                        <li>Простые скрипты на C#</li>
                    </ul>
                </div>
            </div>
            
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol class="practice-steps">
                    <li>Создайте простую 3D игру "Собери монеты":
                        <ul>
                            <li>Игрок (куб или капсула) управляется с клавиатуры</li>
                            <li>Разбросайте монеты (сферы) по сцене</li>
                            <li>При столкновении с монетой она исчезает, счет увеличивается</li>
                            <li>При сборе всех монет - переход на сцену победы</li>
                        </ul>
                    </li>
                    <li>Дополнительные задания:
                        <ul>
                            <li>Добавьте препятствия с физикой</li>
                            <li>Сделайте таймер</li>
                            <li>Добавьте звуки сбора монет</li>
                        </ul>
                    </li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay5_1Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">MonoBehaviour</h3>
            <div class="theory-content">
                <p>Базовый класс для всех скриптов Unity с основными методами жизненного цикла.</p>
                <div class="code-block">
                    <pre>using UnityEngine;

public class Example : MonoBehaviour {
    void Awake() { /* Инициализация */ }
    void Start() { /* Первый кадр */ }
    void Update() { /* Каждый кадр */ }
    void FixedUpdate() { /* Физика */ }
}</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте скрипт с выводом в лог при вызове каждого метода</li>
                    <li>Сравните частоту вызова Update и FixedUpdate</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay5_2Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Transform</h3>
            <div class="theory-content">
                <p>Компонент для управления положением, поворотом и масштабом объекта.</p>
                <div class="code-block">
                    <pre>// Перемещение
transform.position = new Vector3(1, 0, 0);

// Поворот
transform.eulerAngles = new Vector3(0, 45, 0);

// Масштаб
transform.localScale = Vector3.one * 2;</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте анимацию вращения куба</li>
                    <li>Реализуйте плавное перемещение между точками</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay5_3Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Input система</h3>
            <div class="theory-content">
                <p>Обработка ввода с клавиатуры, мыши и сенсорных устройств.</p>
                <div class="code-block">
                    <pre>// Клавиатура
float move = Input.GetAxis("Horizontal");

// Мышь
if (Input.GetMouseButtonDown(0)) {
    // ЛКМ
}

// Тач
if (Input.touchCount > 0) {
    Touch touch = Input.GetTouch(0);
}</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте управление персонажем с клавиатуры</li>
                    <li>Добавьте стрельбу по клику мыши</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay5_4Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Rigidbody</h3>
            <div class="theory-content">
                <p>Компонент для физического моделирования объектов.</p>
                <div class="code-block">
                    <pre>public Rigidbody rb;

void Start() {
    rb = GetComponent<Rigidbody>();
    rb.AddForce(Vector3.up * 10, ForceMode.Impulse);
}

void FixedUpdate() {
    rb.AddForce(Vector3.forward * 2);
}</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте сцену с падающими физическими объектами</li>
                    <li>Реализуйте подбрасывание объекта пробелом</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay5_5Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Коллизии</h3>
            <div class="theory-content">
                <p>Обнаружение и обработка столкновений между объектами.</p>
                <div class="code-block">
                    <pre>void OnCollisionEnter(Collision collision) {
    if (collision.gameObject.tag == "Enemy") {
        Destroy(collision.gameObject);
    }
}

void OnCollisionStay(Collision collision) {
    // Во время столкновения
}

void OnCollisionExit(Collision collision) {
    // После столкновения
}</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте сцену с шариками, которые уничтожаются при столкновении</li>
                    <li>Добавьте счетчик уничтоженных объектов</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay5_6Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Триггеры</h3>
            <div class="theory-content">
                <p>Области для обнаружения пересечений без физического взаимодействия.</p>
                <div class="code-block">
                    <pre>void OnTriggerEnter(Collider other) {
    if (other.CompareTag("Pickup")) {
        Destroy(other.gameObject);
        score++;
    }
}

void OnTriggerExit(Collider other) {
    // При выходе из триггера
}</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте зону, которая меняет цвет объекта при входе</li>
                    <li>Реализуйте сбор монет с триггерами</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay5_7Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Практика скриптинга</h3>
            <div class="theory-content">
                <p>Закрепление навыков работы с Unity скриптами.</p>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте персонажа с управлением от клавиатуры</li>
                    <li>Добавьте сбор предметов с подсчетом очков</li>
                    <li>Реализуйте врагов с простым ИИ</li>
                    <li>Сделайте систему здоровья и Game Over</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}
function generateDay6_1Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Canvas</h3>
            <div class="theory-content">
                <p>Основной компонент для создания пользовательского интерфейса.</p>
                <div class="code-block">
                    <pre>// Создание Canvas программно
GameObject canvasGO = new GameObject("Canvas");
Canvas canvas = canvasGO.AddComponent<Canvas>();
canvas.renderMode = RenderMode.ScreenSpaceOverlay;
canvasGO.AddComponent<CanvasScaler>();
canvasGO.AddComponent<GraphicRaycaster>();</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте Canvas с текстовым полем</li>
                    <li>Настройте разные режимы рендеринга</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay6_2Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">UI компоненты</h3>
            <div class="theory-content">
                <p>Основные элементы интерфейса: Button, Text, Image, Slider.</p>
                <div class="code-block">
                    <pre>public Text scoreText;
public Button restartButton;

void Start() {
    restartButton.onClick.AddListener(RestartGame);
}

void UpdateScore() {
    scoreText.text = "Score: " + score;
}</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте HUD с отображением здоровья</li>
                    <li>Добавьте меню паузы с кнопками</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay6_3Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Анимации</h3>
            <div class="theory-content">
                <p>Создание и управление анимациями через Animator.</p>
                <div class="code-block">
                    <pre>public Animator animator;

void Update() {
    if (Input.GetKeyDown(KeyCode.Space)) {
        animator.SetTrigger("Jump");
    }
    
    float speed = Input.GetAxis("Horizontal");
    animator.SetFloat("Speed", speed);
}</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте анимацию ходьбы персонажа</li>
                    <li>Добавьте переход между анимациями</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay6_4Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Particle Systems</h3>
            <div class="theory-content">
                <p>Системы частиц для создания эффектов.</p>
                <div class="code-block">
                    <pre>public ParticleSystem explosionEffect;

void OnCollisionEnter(Collision collision) {
    Instantiate(explosionEffect, transform.position, Quaternion.identity);
    Destroy(gameObject);
}</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте эффект взрыва при уничтожении объекта</li>
                    <li>Добавьте след от движения</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay6_5Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Timeline</h3>
            <div class="theory-content">
                <p>Инструмент для создания кат-сцен и сложных анимаций.</p>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте простую кат-сцену с Timeline</li>
                    <li>Добавьте анимацию камеры</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay6_6Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Scriptable Objects</h3>
            <div class="theory-content">
                <p>Ресурсы для хранения данных и настроек.</p>
                <div class="code-block">
                    <pre>[CreateAssetMenu]
public class ItemData : ScriptableObject {
    public string itemName;
    public Sprite icon;
    public int value;
}

// Использование
public ItemData healthPotion;</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте ScriptableObject для предметов инвентаря</li>
                    <li>Реализуйте систему крафта на их основе</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay6_7Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">UI проект</h3>
            <div class="theory-content">
                <p>Создание полноценного интерфейса.</p>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте меню с настройками</li>
                    <li>Реализуйте систему диалогов</li>
                    <li>Добавьте инвентарь с drag-and-drop</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}
function generateDay7_1Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Профилирование</h3>
            <div class="theory-content">
                <p>Анализ производительности с помощью Profiler.</p>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Проанализируйте свою игру в Profiler</li>
                    <li>Найдите 3 узких места</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay7_2Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Оптимизация рендеринга</h3>
            <div class="theory-content">
                <p>Методы оптимизации графики.</p>
                <div class="code-block">
                    <pre>// Включение статического батчинга
GameObject.isStatic = true;

// Настройка LOD
LODGroup group = gameObject.AddComponent<LODGroup>();</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Настройте статический батчинг</li>
                    <li>Добавьте LOD для сложных моделей</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay7_3Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Пулы объектов</h3>
            <div class="theory-content">
                <p>Повторное использование объектов вместо Instantiate/Destroy.</p>
                <div class="code-block">
                    <pre>public class ObjectPool : MonoBehaviour {
    public GameObject prefab;
    public int poolSize;
    private Queue<GameObject> pool;

    void Start() {
        pool = new Queue<GameObject>();
        for (int i = 0; i < poolSize; i++) {
            GameObject obj = Instantiate(prefab);
            obj.SetActive(false);
            pool.Enqueue(obj);
        }
    }

    public GameObject GetObject() {
        GameObject obj = pool.Dequeue();
        obj.SetActive(true);
        return obj;
    }
}</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Реализуйте пул для пуль</li>
                    <li>Сравните производительность с обычным спавном</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay7_4Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Адресабельные ассеты</h3>
            <div class="theory-content">
                <p>Система загрузки ресурсов по ссылкам.</p>
                <div class="code-block">
                    <pre>// Загрузка ассета
var loadOperation = Addressables.LoadAssetAsync<GameObject>("enemyPrefab");
yield return loadOperation;

// Использование
Instantiate(loadOperation.Result);</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Перенесите ресурсы на Addressables</li>
                    <li>Реализуйте асинхронную загрузку сцены</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay7_5Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Шейдеры</h3>
            <div class="theory-content">
                <p>Основы написания шейдеров в Unity.</p>
                <div class="code-block">
                    <pre>Shader "Custom/SimpleShader" {
    Properties {
        _Color ("Color", Color) = (1,1,1,1)
    }
    SubShader {
        Pass {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            
            fixed4 _Color;
            
            float4 vert(float4 pos : POSITION) : SV_POSITION {
                return UnityObjectToClipPos(pos);
            }
            
            fixed4 frag() : SV_Target {
                return _Color;
            }
            ENDCG
        }
    }
}</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте простой шейдер с изменением цвета</li>
                    <li>Добавьте эффект свечения</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay7_6Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">DOTS</h3>
            <div class="theory-content">
                <p>Data-Oriented Technology Stack для высокопроизводительных вычислений.</p>
                <div class="code-block">
                    <pre>using Unity.Entities;
using Unity.Mathematics;

public struct MovementData : IComponentData {
    public float3 direction;
    public float speed;
}

public class MovementSystem : SystemBase {
    protected override void OnUpdate() {
        float deltaTime = Time.DeltaTime;
        
        Entities.ForEach((ref MovementData move, ref Translation trans) => {
            trans.Value += move.direction * move.speed * deltaTime;
        }).Schedule();
    }
}</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте систему движения 10 000 объектов через DOTS</li>
                    <li>Сравните производительность с GameObject</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay7_7Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Оптимизированный проект</h3>
            <div class="theory-content">
                <p>Применение всех техник оптимизации.</p>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Оптимизируйте свою игру</li>
                    <li>Добейтесь стабильных 60 FPS</li>
                    <li>Сократите потребление памяти</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}
function generateDay8_1Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Планирование</h3>
            <div class="theory-content">
                <p>Этапы планирования игрового проекта.</p>
                <ol>
                    <li>Определение концепции</li>
                    <li>Проектирование механик</li>
                    <li>Создание дорожной карты</li>
                </ol>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Составьте документ с описанием игры</li>
                    <li>Создайте прототип основной механики</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay8_2Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Архитектура</h3>
            <div class="theory-content">
                <p>Построение структуры проекта.</p>
                <ul>
                    <li>Система управления сценами</li>
                    <li>Менеджеры игровых систем</li>
                    <li>Event система</li>
                </ul>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте базовую архитектуру проекта</li>
                    <li>Реализуйте систему событий</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay8_3Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Game Manager</h3>
            <div class="theory-content">
                <p>Центральный управляющий класс игры.</p>
                <div class="code-block">
                    <pre>public class GameManager : MonoBehaviour {
    public static GameManager Instance;
    
    public int score;
    public int lives;
    
    void Awake() {
        if (Instance == null) {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        } else {
            Destroy(gameObject);
        }
    }
    
    public void AddScore(int points) {
        score += points;
        // Обновление UI и т.д.
    }
}</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте GameManager</li>
                    <li>Реализуйте систему состояний игры</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay8_4Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Сохранение данных</h3>
            <div class="theory-content">
                <p>Методы сохранения прогресса игры.</p>
                <div class="code-block">
                    <pre>using System.IO;
using UnityEngine;

public static class SaveSystem {
    public static void SaveGame(GameData data) {
        string json = JsonUtility.ToJson(data);
        File.WriteAllText(Application.persistentDataPath + "/save.json", json);
    }
    
    public static GameData LoadGame() {
        string path = Application.persistentDataPath + "/save.json";
        if (File.Exists(path)) {
            string json = File.ReadAllText(path);
            return JsonUtility.FromJson<GameData>(json);
        }
        return null;
    }
}</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Реализуйте сохранение настроек</li>
                    <li>Добавьте систему сохранения прогресса</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay8_5Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">ИИ противников</h3>
            <div class="theory-content">
                <p>Реализация искусственного интеллекта.</p>
                <div class="code-block">
                    <pre>public class EnemyAI : MonoBehaviour {
    public Transform player;
    public float speed;
    public float chaseDistance;
    
    void Update() {
        float distance = Vector3.Distance(transform.position, player.position);
        
        if (distance < chaseDistance) {
            Vector3 direction = (player.position - transform.position).normalized;
            transform.position += direction * speed * Time.deltaTime;
        }
    }
}</pre>
                </div>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Создайте ИИ патрулирования</li>
                    <li>Добавьте состояния "Преследование" и "Атака"</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay8_6Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Публикация</h3>
            <div class="theory-content">
                <p>Подготовка игры к выпуску.</p>
                <ul>
                    <li>Настройки Player Settings</li>
                    <li>Создание билда</li>
                    <li>Публикация на платформах</li>
                </ul>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Настройте все параметры для публикации</li>
                    <li>Создайте билд для Windows/Android</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}

function generateDay8_7Content() {
    return `
        <div class="lesson-content active">
            <h3 class="theory-title">Итоговый проект</h3>
            <div class="theory-content">
                <p>Завершение работы над игрой.</p>
            </div>
            <div class="practice-task">
                <h3 class="practice-title"><i class="fas fa-tasks"></i> Практическое задание</h3>
                <ol>
                    <li>Завершите разработку игры</li>
                    <li>Исправьте все баги</li>
                    <li>Подготовьте финальный билд</li>
                </ol>
                <button class="complete-btn"><i class="fas fa-check"></i> Задание выполнено</button>
            </div>
        </div>
    `;
}
    // Каждая функция generateDayX_YContent() будет возвращать HTML-контент для соответствующего дня

    function markDayAsCompleted(dayId) {
        // В реальном приложении нужно сохранять в localStorage или БД
        console.log(`День ${dayId} завершен`);
        alert('День успешно завершен!');
        updateProgress();
    }

    function updateProgress() {
        // Логика обновления прогресса
        const progress = calculateProgress();
        document.querySelector('.progress-percent').textContent = `${progress}%`;
        document.getElementById('level-progress').style.width = `${progress}%`;
        
        const circle = document.querySelector('.progress-ring-circle');
        const circumference = 2 * Math.PI * 52;
        circle.style.strokeDashoffset = circumference - (progress / 100) * circumference;
    }

    function calculateProgress() {
        // В реальном приложении нужно считать завершенные дни
        return 0;
    }

    function addEventListeners() {
        // Обработчики для навигации
        document.querySelectorAll('.week-header').forEach(header => {
            header.addEventListener('click', function() {
                const weekItem = this.parentElement;
                const daysList = weekItem.querySelector('.week-days-list');
                
                document.querySelectorAll('.week-days-list').forEach(list => {
                    if (list !== daysList) list.classList.remove('open');
                });
                
                document.querySelectorAll('.week-header').forEach(h => {
                    if (h !== this) h.classList.remove('active');
                });
                
                daysList.classList.toggle('open');
                this.classList.toggle('active');
            });
        });
        
        document.querySelectorAll('.day-item').forEach(day => {
            day.addEventListener('click', function() {
                const dayId = this.dataset.dayId;
                document.querySelectorAll('.day-item').forEach(d => d.classList.remove('active'));
                this.classList.add('active');
                loadDayContent(dayId);
            });
        });
        
        document.querySelectorAll('.day-pill').forEach(pill => {
            pill.addEventListener('click', function() {
                const dayId = this.dataset.dayId;
                document.querySelectorAll('.day-pill').forEach(p => p.classList.remove('active'));
                this.classList.add('active');
                loadDayContent(dayId);
            });
        });
    }

    function getDayTitle(dayId) {
        const weekNum = dayId.split('-')[0].replace('day', '');
        const dayNum = dayId.split('-')[1];
        return `Неделя ${weekNum}, День ${dayNum}`;
    }
});