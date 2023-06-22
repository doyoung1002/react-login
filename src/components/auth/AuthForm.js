import styled from "styled-components";
import StyledInput from "../common/StyledInput";
import StyledButton from "../common/StyledButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import StyledIcon from "../common/StyledIcon";
const AuthFormBlock = styled.div`
  padding: 2rem;
  width: 370px;
  display: grid;
  gap: 1rem;
`;
const StyledInputBlock = styled.div`
  outline: none;
  border: none;
  border-radius: 5px;
  background: #3b4148;
  display: flex;
  align-items: center;
`;
const AuthForm = () => {
  return (
    <AuthFormBlock>
      <StyledInputBlock>
        <StyledIcon>
          <FontAwesomeIcon icon={faUser} />
        </StyledIcon>
        <StyledInput placeholder="Username" id="username" name="username" />
      </StyledInputBlock>
      <StyledInputBlock>
        <StyledIcon>
          <FontAwesomeIcon icon={faLock} />
        </StyledIcon>
        <StyledInput placeholder="Password" id="password" name="password" />
      </StyledInputBlock>
      <StyledButton>SIGN IN</StyledButton>
    </AuthFormBlock>
  );
};

export default AuthForm;
