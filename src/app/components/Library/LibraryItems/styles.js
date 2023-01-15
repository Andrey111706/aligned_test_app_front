import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { LinkItem } from "./components/LinkItem";

export const Container = styled(Grid)`
  display: flex;
  gap: 15px;
  min-width: 100%;
`;

export const Item = styled(Grid)`
  overflow: hidden;
  position: relative;
  max-width: 228px;
  min-width: 228px;
  height: 174px;
  min-height: 174px;
  border: 1px solid #a9b5db;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #eff3fa;
  &:hover {
    box-shadow: 0 0 16px 5px rgb(172 181 212 / 30%);
  }
`;

export const Name = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #3e4867;
`;

export const AuthorName = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: #7c8dc1;
`;

export const Type = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: #3e4867;
`;

export const TextContainer = styled.div`
  display: flex;
  padding: 0 12px;
  justify-content: space-between;
  margin-top: 7px;
`;

export const UserImage = styled.img`
  width: 22px;
  height: 22px;
`;

export const Thumbnail = styled(LinkItem)`
  height: 113px;
  width: 226px;
  box-sizing: content-box;
  display: block;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

export const ItemControl = styled.div`
  position: absolute;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  top: 4px;
  right: 4px;
  width: 80px;
  height: 27px;
  background: #eff3fa;
  border: 1px solid #7c8dc1;
  border-radius: 4px;

  & svg {
    cursor: pointer;
  }
  & svg:hover {
    transition: 0.5s;
    transform: scale(1.2);
  }
`;
