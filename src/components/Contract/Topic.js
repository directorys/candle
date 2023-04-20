import {useEffect, useState} from "react";

export default function Topic() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    setTopics([
      'Натуральные ингредиенты высокой степени очистки',
      'Создание эксклюзивной ароматической композиции',
      'Современный дизайн упаковки и этикеток',
      'Быстрые сроки выполнения заказа'
    ])
  }, []);

  return (
    <section className="topic">
      <div className="topic__content">
        <div className="topic__info">
          <h2 className="topic__title">Почему&nbsp;мы?</h2>
          <div className="topic__line"></div>
        </div>
        <ul className="topic__punkts">
          {topics.map((topic, i) =>
          <li key={i} className="topic__punkt">{topic}</li>
          )}
        </ul>
      </div>
    </section>
  )
}