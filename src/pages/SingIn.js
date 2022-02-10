import { useState } from "react"
import { Container, Form, Input, Button, StyledLink } from "./../components/FormComponents"

export default function SingIn() {
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
    }
  );
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
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
        <StyledLink to="/sing-up">
          Já tem uma conta? Faça Login
        </StyledLink>
    </Container>
  )
}