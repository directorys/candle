export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__content">
        <h2 className="contact__title">У вас остались вопросы? Оставьте заявку для подробной консультации.</h2>
        <form className="contact__form">
          <h3 className="contact__legend">Наш специалист свяжется с вами в ближайшее время</h3>
          <div className="contact__inputs">
            <input
              className="contact__input"
              name="name"
              type="text"
              placeholder="Имя" 
              required
            />
            <input
              className="contact__input"
              name="email"
              type="email"
              placeholder="Почта" 
              required
            />
            <input
              className="contact__input"
              name="tel"
              type="tel"
              placeholder="Номер телефона"
              required
            />
          </div>
          <button className="contact__button" type="submit">Отправить</button>
        </form>
      </div>
    </section>
  )
}