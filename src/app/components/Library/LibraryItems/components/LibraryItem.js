import React from "react";
import {
  AuthorName,
  Item,
  ItemControl,
  Name,
  TextContainer,
  Thumbnail,
  Type,
  UserImage,
} from "../styles";
import LinkControlButtonIcon from "app/assets/SmallLinkIcon";
import EditButtonIcon from "app/assets/EditIcon";
import DeleteButtonIcon from "app/assets/DeleteIcon";
import { ITEM_TYPES } from "app/constants";
import ReactPlayer from "react-player";
import TestPersonCircleImg from "app/assets/PersonCircle.png";

const LibraryItem = ({
  name,
  type,
  youtubeId,
  url,
  _id,
  setHoveredItemId,
  hoveredItemId,
  onEdit,
  onDelete,
}) => (
  <Item
    key={_id}
    xs={1}
    item
    onFocus={() => setHoveredItemId(_id)}
    onMouseEnter={() => setHoveredItemId(_id)}
    onBlur={() => setHoveredItemId(undefined)}
    onMouseLeave={() => setHoveredItemId(undefined)}
  >
    <ItemControl show={_id === hoveredItemId}>
      <LinkControlButtonIcon href={url} />
      <EditButtonIcon onClick={() => onEdit(_id)} />
      <DeleteButtonIcon onClick={() => onDelete(_id)} />
    </ItemControl>
    {type === ITEM_TYPES.youtube ? (
      <ReactPlayer
        controls
        width="100%"
        height="100%"
        url={[`https://www.youtube.com/embed/${youtubeId}`]}
        style={{ maxWidth: "226px", maxHeight: "113px" }}
      />
    ) : (
      <Thumbnail href={url} />
    )}
    <TextContainer>
      <Name>{name}</Name>
      <UserImage src={TestPersonCircleImg} />
    </TextContainer>
    <TextContainer>
      <AuthorName>Case Studies</AuthorName>
      <Type>{type}</Type>
    </TextContainer>
  </Item>
);

export default LibraryItem;
