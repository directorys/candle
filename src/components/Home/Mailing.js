import {MailingButtonSvg} from "../pictures/MailingButtonSvg";

export default function Mailing({modifier, classInput}) {
  return (
    <form className={`mailing ${modifier}`}>
      <div className="mailing__info">
        <h3 className="mailing__head">Рассылка новостей, скидок</h3>
        <button className="mailing__button" type="submit">
          <MailingButtonSvg className="mailing__image" />
        </button> 
      </div>
      <input
        className={`mailing__email ${classInput}`}
        placeholder="Ведите свою почту"
        type="email"
        maxLength="50"
        required
      />
    </form>
  )
}