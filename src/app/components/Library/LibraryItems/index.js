import { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { useGetState } from "app/context/state";
import { itemsDB } from "api/methods";

import { Container } from "./styles";
import RightDrawer from "../../Drawer";
import LibraryItem from "./components/LibraryItem";

const LibraryItems = () => {
  const [, setItems] = useGetState().items;
  const [filteredItems, setFilteredItems] = useGetState().filteredItems;
  const [hoveredItemId, setHoveredItemId] = useState(undefined);
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const [updateItemWithID, setUpdateItemWithID] = useState(undefined);

  const onDelete = async (currentId) => {
    await itemsDB.delete(currentId);
    setItems((items) => {
      return items.filter(({ _id }) => _id !== currentId);
    });
    setFilteredItems((items) => {
      return items.filter(({ _id }) => _id !== currentId);
    });
  };

  const toggleDrawer = () => {
    setIsDrawerOpened(() => !isDrawerOpened);
  };

  const onEdit = (_id) => {
    setUpdateItemWithID(_id);
    toggleDrawer();
  };

  useEffect(() => {
    itemsDB.getAll().then(({ data }) => {
      setItems([...data].sort((a, b) => a.name.localeCompare(b.name)));
      setFilteredItems([...data].sort((a, b) => a.name.localeCompare(b.name)));
    });
  }, [setItems, setFilteredItems]);

  return (
    <>
      <Container container gap={2} item xs={6}>
        {filteredItems.map(({ name, type, youtubeId, url, _id }) => (
          <LibraryItem
            key={_id}
            name={name}
            type={type}
            youtubeId={youtubeId}
            url={url}
            _id={_id}
            onEdit={onEdit}
            onDelete={onDelete}
            hoveredItemId={hoveredItemId}
            setHoveredItemId={setHoveredItemId}
          />
        ))}
      </Container>
      <Drawer anchor="right" open={isDrawerOpened} onClose={toggleDrawer}>
        <RightDrawer
          updateItemWithID={updateItemWithID}
          toggleDrawer={toggleDrawer}
        />
      </Drawer>
    </>
  );
};

export default LibraryItems;
