
import "./styles.css";
import React, { useState } from 'react';

export default function App() {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('банан');
  const [todos, setTodos] = useState(['Изучить хуки']);

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>

      <p>Вам {age} лет</p>
      <button onClick={() => setAge(age + 1)}>
        Больше!
      </button>
      <button onClick={() => setAge(age - 1)}>
        Меньше!
      </button>

      <p>Ваш любимый фрукт - {fruit}</p>
      <button onClick={() => setFruit("apple")}>
        NOOOOOOOOOO
      </button>

      <p>Планы на вечер - {todos}</p>
      <button onClick={() => setTodos("Больше дел нет!")}>
        Done
      </button>
    </div>
  );
}
