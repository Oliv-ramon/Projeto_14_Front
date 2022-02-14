import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";

import { Container, Form, Input, Button, StyledLink } from "../../components/FormComponents";

import AuthContext from "../../contexts/AuthContext";
import api from "../../services/api";

export default function SignIn() {
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
    }
  );
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    
    try {
      const { data } = await api.signIn(formData);
      login(data);
      setLoading(false);
      navigate("/home")
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
        <Button disabled={loading}>Entrar</Button>
      </Form>
      <StyledLink to="/sign-up">
        Primeira vez? Cadastre-se!
      </StyledLink>
    </Container>
  )
}