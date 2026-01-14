import React, { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function resetForm() {
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <h2>Регистрационна форма</h2>
      <form>
        <label>
          Име: <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Въведете вашето име"
          />
        </label>
        <br />

        <label>
          Имейл: <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Въведете вашия имейл"
          />
        </label>
        <br />

        <label>
          Парола: <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Въведете вашата парола"
          />
        </label>
        <br />

        <button type="button" onClick={resetForm}>
          Изчисти
        </button>
      </form>

      <h3>Въведени данни в реално време:</h3>
      <p>Име: {name}</p>
      <p>Имейл: {email}</p>
      <p>Парола: {password}</p>
    </>
  );
}

export default RegistrationForm;
