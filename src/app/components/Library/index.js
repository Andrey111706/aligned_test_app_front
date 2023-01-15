import { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";

import { useGetState } from "app/context/state";
import PlusIcon from "app/assets/PlusIcon";
import RightDrawer from "../Drawer";
import SearchIcon from "../../assets/SearchIcon";
import LibraryItems from "./LibraryItems";
import {
  Container,
  MainPanel,
  Title,
  UploadButtonContainer,
  UploadButton,
  TextFieldContainer,
} from "./styles";

const Library = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const [, setFilteredItems] = useGetState().filteredItems;
  const [items] = useGetState().items;

  const onInputChange = (e) => {
    const searchValue = e.target.value.trim().toLowerCase();
    const filteredItems = items.filter(({ name }) =>
      name.toLowerCase().includes(searchValue)
    );
    setFilteredItems(filteredItems);
  };

  return (
    <Container>
      <MainPanel>
        <Title>Library</Title>
        <TextFieldContainer>
          <TextField
            onChange={onInputChange}
            size="small"
            placeholder="Search Item..."
            type="search"
            fullWidth
            InputProps={{
              startAdornment: (
                <Grid
                  item
                  container
                  direction="column"
                  width="auto"
                  justifyContent="center"
                  mr={2}
                >
                  <SearchIcon />
                </Grid>
              ),
            }}
          />
        </TextFieldContainer>
        <UploadButtonContainer>
          <UploadButton
            sx={{ boxShadow: 0 }}
            color="primary"
            variant="contained"
            startIcon={<PlusIcon />}
            onClick={() => setIsDrawerOpened(() => !isDrawerOpened)}
          >
            Upload
          </UploadButton>
        </UploadButtonContainer>
      </MainPanel>
      <LibraryItems />
      <Drawer
        anchor="right"
        open={isDrawerOpened}
        onClose={() => setIsDrawerOpened(() => !isDrawerOpened)}
      >
        <RightDrawer
          toggleDrawer={() => setIsDrawerOpened(() => !isDrawerOpened)}
        />
      </Drawer>
    </Container>
  );
};

export default Library;
