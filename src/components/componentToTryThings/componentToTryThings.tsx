import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
  nickName: string;
}

interface FormErrors {
  [key: string]: string;
}

function ComponentToTryThings() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    nickName: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = (): boolean => {
    let newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "O nome é obrigatório";
    if (!formData.email.includes("@")) newErrors.email = "E-mail inválido";
    if (formData.password.length < 6)
      newErrors.password = "A senha deve conter pelo menos 6 dígitos";
    if (!formData.nickName.trim())
      newErrors.nickName = "Apelido é obrigatório";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Formulário enviado com sucesso:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <div>
        <label className="block">Nome</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block">E-mail</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block">Senha</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      <div>
        <label className="block">Apelido</label>
        <input
          type="text"
          name="nickName"
          value={formData.nickName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.nickName && (
          <p className="text-red-500 text-sm">{errors.nickName}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        Enviar
      </button>
    </form>
  );
}

export default ComponentToTryThings;