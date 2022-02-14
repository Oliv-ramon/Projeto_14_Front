import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";

import { Container, Form, Input, Button, StyledLink } from "../../components/FormComponents";

import api from "../../services/api";

export default function SignIn() {
  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    }
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const passwordDontMatch = formData.password !== formData.passwordConfirm;
    if(passwordDontMatch) {
      setLoading(false);
      return alert("as senhas não coincidem")
    }
    
    try {
      await api.signUp(formData);
      setLoading(false);
      navigate("/sign-in")
    } catch {
      setLoading(false);
      alert("Erro, tente novamente");
    }
  }

  return (
    <Container>
      <h1>Project Name</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          value={formData.name}
          placeholder="Nome"
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          value={formData.email}
          placeholder="E-mail"
          onChange={handleChange}
          required
        />
        <Input
          name="password"
          type="password"
          value={formData.password}
          placeholder="Senha"
          onChange={handleChange}
          required
        />
        <Input
          name="passwordConfirm"
          type="password"
          value={formData.passwordConfirm}
          placeholder="Confirme a senha"
          onChange={handleChange}
          required
        />
        <Button disabled={loading}>Cadastrar</Button>
      </Form>
      <StyledLink to="/sign-in">
        Já tem uma conta? Faça login
      </StyledLink>
    </Container>
  )
}