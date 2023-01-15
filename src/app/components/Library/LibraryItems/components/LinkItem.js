import LinkLibraryItemIcon from "app/assets/LinkLibraryItemIcon";
import Grid from "@mui/material/Grid";

export const LinkItem = ({ href, props }) => {
  return (
    <Grid sx={{ display: "block", width: "226px", height: "113px" }}>
      <a {...props} href={href} target="_blank" rel="noreferrer">
        <LinkLibraryItemIcon />
      </a>
    </Grid>
  );
};
