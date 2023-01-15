import styled from "styled-components";
import LogoImage from "app/assets/LogoIcon";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  max-height: 55px;
  background-color: #fff;
  margin-bottom: 55px;
  box-shadow: 0 0 12px rgba(172, 181, 212, 0.254999);
`;

export const UserLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
  height: 55px;
  border-left: 2px solid #eff3fa;
`;

export const CompanyLogo = styled(LogoImage)`
  margin-left: 24px;
  width: 102px;
  height: 21px;
`;

export const UserLogo = styled.img`
  width: 36px;
  height: 36px;
`;
