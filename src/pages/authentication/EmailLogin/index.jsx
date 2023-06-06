import { Container } from "@mui/material";
import FormEmailLogin from "./FormEmailLogin";

const EmailLogin = () => {
  return (
    <Container sx={{ height: "100vh", alignItems: "center", display: "flex" }}>
      <FormEmailLogin />
    </Container>
  );
};

export default EmailLogin;
