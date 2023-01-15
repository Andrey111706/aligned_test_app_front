import userAvatar from "app/assets/UserAvatar.png";
import { Container, CompanyLogo, UserLogo, UserLogoContainer } from "./styles";

const Header = () => {
  return (
    <Container>
      <CompanyLogo />
      <UserLogoContainer>
        <UserLogo src={userAvatar} alt="userLogo" />
      </UserLogoContainer>
    </Container>
  );
};

export default Header;
