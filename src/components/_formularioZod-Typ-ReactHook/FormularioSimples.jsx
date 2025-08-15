import "./formularioSimples.css";
import { useState } from "react";

function FormulariSimples() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });

  const validate = () => {
    let isValid = true;
    const errors = { name: "", email: "" };

    if (!name) {
      errors.name = "O nome é obrigatório.";
      isValid = false;
    } else if (name.length < 3) {
      errors.name = "O nome deve ter mais de 3 caracteres.";
      isValid = false;
    }

    if (!email) {
      errors.email = "O email é obrigatório.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email inválido.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Lógica de submissão do formulário
      console.log("Formulário submetido:", { name, email });
    }
  };

  return (
    <div className="formularioSimples">
      <form onSubmit={handleSubmit}>
        <h2>Formulário Simples</h2>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* Outros campos e botão de submit */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormulariSimples;
