import styled from "styled-components";
import Button from "@mui/material/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 700px;
  height: 100%;
  box-sizing: border-box;
  @media (max-width: 700px) {
    width: 100vw;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 22px;
  line-height: 24px;
  color: #3e4867;
`;

export const SelectType = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const YoutubeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const LinkItemContainer = styled(YoutubeItemContainer)`
  margin-left: 45px;
`;

export const SelectName = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin-top: 10px;
  color: ${({ selected }) => (selected ? "#000000" : "#7C8DC1")};
`;

export const UrlInput = styled.div`
  margin-top: 48px;
`;

export const NameInput = styled.div`
  margin-top: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 9px;
  font-size: 16px;
  line-height: 22px;
  color: #576694;
`;

export const ControlButtons = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

export const SaveButton = styled(Button)`
  width: 104px;
  height: 42px;
  border-radius: 6px;
`;

export const BackButton = styled(SaveButton)``;
