import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useGetState } from "app/context/state";
import CloseButtonIcon from "app/assets/CloseButtonIcon";
import YoutubeIcon from "app/assets/YoutubeIcon";
import LinkItemIcon from "app/assets/LinkItemIcon";
import ArrowToRight from "app/assets/ArrowToRight";
import ArrowToLeftIcon from "app/assets/ArrowToLeftIcon";
import { itemsDB } from "api/methods";
import { ITEM_TYPES } from "app/constants";

import {
  Container,
  SelectName,
  Title,
  Label,
  LinkItemContainer,
  Header,
  UrlInput,
  NameInput,
  BackButton,
  ControlButtons,
  SaveButton,
  YoutubeItemContainer,
  SelectType,
} from "./styles";
import { getYoutubeIDFromQuery, validateURL } from "./service";

const RightDrawer = ({ toggleDrawer, updateItemWithID }) => {
  const [items, setItems] = useGetState().items;
  const [, setFilteredItems] = useGetState().filteredItems;
  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [type, setType] = useState(ITEM_TYPES.youtube);

  useEffect(() => {
    if (updateItemWithID) {
      const editItem = items.find(({ _id }) => _id === updateItemWithID);
      setType(editItem.type);
      setName(editItem.name);
      setUrl(editItem.url);
    }
  }, [updateItemWithID, items]);

  const saveItem = (url, name, type, youtubeId) => {
    itemsDB
      .create(url, name, type, youtubeId)
      .then(({ data: { insertedId } }) => {
        if (insertedId) {
          const newItem = { url, name, type, _id: insertedId, youtubeId };
          setFilteredItems((filteredItems) => {
            return [...filteredItems, newItem].sort((a, b) =>
              a.name.localeCompare(b.name)
            );
          });
          setItems((items) => {
            return [...items, newItem].sort((a, b) =>
              a.name.localeCompare(b.name)
            );
          });
          toggleDrawer();
        }
      });
  };

  const updateItem = (url, name, type, youtubeId) => {
    itemsDB.update(url, name, type, youtubeId, updateItemWithID).then(() => {
      const editedItemData = {
        url,
        type,
        name,
        youtubeId,
        _id: updateItemWithID,
      };
      setFilteredItems((filteredItems) => {
        const filtered = [...filteredItems].filter(
          ({ _id }) => _id !== updateItemWithID
        );
        return [...filtered, editedItemData].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      });
      setItems((items) => {
        const notChanged = [...items].filter(
          ({ _id }) => _id !== updateItemWithID
        );
        return [...notChanged, editedItemData].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      });
      toggleDrawer();
    });
  };

  const onSaveButtonClick = () => {
    const { name: nameError, url: urlError } = validateURL(name, url, type);

    setNameError(nameError);
    setUrlError(urlError);
    if (nameError || urlError) return;

    let youtubeId = "";

    if (type === ITEM_TYPES.youtube) {
      youtubeId = getYoutubeIDFromQuery(url);
    }

    if (updateItemWithID) {
      updateItem(url, name, type, youtubeId);
    } else {
      saveItem(url, name, type, youtubeId);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Upload</Title>
        <CloseButtonIcon onClick={toggleDrawer} />
      </Header>
      <SelectType>
        <YoutubeItemContainer onClick={() => setType(ITEM_TYPES.youtube)}>
          <YoutubeIcon />
          <SelectName selected={type === ITEM_TYPES.youtube}>
            Youtube
          </SelectName>
        </YoutubeItemContainer>
        <LinkItemContainer onClick={() => setType(ITEM_TYPES.link)}>
          <LinkItemIcon />
          <SelectName selected={type === ITEM_TYPES.link}>Link</SelectName>
        </LinkItemContainer>
      </SelectType>
      <UrlInput>
        <Label htmlFor="link">URL</Label>
        <TextField
          onChange={({ target: { value } }) => setUrl(value)}
          value={url}
          size="small"
          fullWidth
          id="link"
          placeholder="e.g. docs.google.com/presentation"
          error={!!urlError}
          helperText={urlError}
        />
      </UrlInput>
      <NameInput>
        <Label htmlFor="name">Name</Label>
        <TextField
          onChange={({ target: { value } }) => setName(value)}
          value={name}
          size="small"
          fullWidth
          id="name"
          placeholder="e.g AMCE demo deck"
          error={!!nameError}
          helperText={nameError}
        />
      </NameInput>
      <ControlButtons>
        <BackButton
          sx={{ boxShadow: 0 }}
          color="grey"
          variant="outlined"
          startIcon={<ArrowToLeftIcon />}
          onClick={toggleDrawer}
        >
          Back
        </BackButton>
        <SaveButton
          sx={{ boxShadow: 0 }}
          color="primary"
          variant="contained"
          endIcon={<ArrowToRight />}
          onClick={onSaveButtonClick}
        >
          Save
        </SaveButton>
      </ControlButtons>
    </Container>
  );
};

export default RightDrawer;
