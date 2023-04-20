export default function Auth() {
  return (
    <div className="auth">
      <form className="auth__form">
        <div className="auth__info">
          <label className="auth__label">Email</label>
          <input
            className="auth__input"
            autoComplete="current-email"
            type="email"
            required
          />
        </div>
        <div className="auth__info">
          <label className="auth__label">Password</label>
          <input
            className="auth__input"
            autoComplete="current-password"
            type="password"
            required
          />
        </div>
        <button className="auth__button">Log in</button>
      </form>
    </div>
  )
}