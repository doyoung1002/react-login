import { styled } from "styled-components";

const Icon = styled.label`
  font-size: 0.825rem;
  padding: 1.2rem;
  background: #363b41;
  color: gray;
`;

const StyledIcon = ({ children }) => <Icon>{children}</Icon>;

export default StyledIcon;
