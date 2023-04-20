import {useState} from "react"

export default function Forms() {
  const [inputs, setInputs] = useState([
    {value: '', type:'text', name: 'patronymic', text: 'Отчество'},
    {value: '', type:'text', name: 'name', text: 'Имя'},
    {value: '', type:'text', name: 'surname', text: 'Фамилия'},
    {value: '', type:'text', name: 'index', text: 'Почтовый индекс'},
    {value: '', type:'text', name: 'address', text: 'Ваш адрес'},
    {value: '', type:'text', name: 'phone', text: 'Ваш номер телефона'}
  ]);

  const handleInput = (evt, i) => {
    inputs[i].value = evt.target.value;
    setInputs([...inputs]);
  }

  return (
    <section className="forms">
      <form className="forms__content">
        <h3 className="forms__title">Ваши данные для отправки товара:</h3>
        <ul className="forms__items">
          {inputs.map((input, i) =>
          <li key={i} className="forms__item">
            <label className="forms__label">{input.text}</label>
            <input className="forms__input forms__input_type_text"
              onInput={evt => handleInput(evt, i)}
              type={input.type}
              name={input.name}
            />
          </li>
          )}
        </ul>
        <ul className="forms__infos">
          <li className="forms__info">
            <h3 className="forms__title">Чек</h3>
            <ul className="forms__punkts">
              {inputs.map((input, i) =>
              <li className="forms__input forms__input_type_place" key={i}>
                {input.value === '' ? 'Пусто' : input.value}
              </li>
              )}
            </ul>
          </li>
          <li className="forms__info">
            <h3 className="forms__title">Сумма к оплате:</h3>
            <ul className="forms__punkts">
              <li className="forms__input forms__input_type_place forms__input_type_buy">3.999₽x2</li>
            </ul>
          </li>
        </ul>
        <button className="forms__button" type="submit">Оплатить</button>
      </form>
    </section>
  )
}