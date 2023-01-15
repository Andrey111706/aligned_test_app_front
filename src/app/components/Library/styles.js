import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export const Container = styled(({ ...props }) => (
  <Grid {...props} direction="column" container item xs={8.8} />
))`
  align-items: center;
  min-height: 80vh;
  margin-bottom: 55px;
  padding: 30px 40px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(172, 181, 212, 0.3);
`;

export const MainPanel = styled(({ ...props }) => (
  <Grid {...props} item container columns={6} mb={2.5} />
))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const UploadButton = styled(Button)`
  border-radius: 6px;
  width: 100%;
  max-width: 130px;
  flex-grow: 0;
`;

export const UploadButtonContainer = styled(({ ...props }) => (
  <Grid
    {...props}
    item
    xs={6}
    md={1}
    sx={{
      mb: { xs: 1, md: 0 },
    }}
  />
))`
  min-width: 90px;
`;
export const Title = styled(({ ...props }) => (
  <Grid
    {...props}
    item
    xs={6}
    md={1}
    sx={{
      mb: { xs: 1, md: 0 },
    }}
  />
))`
  font-size: 22px;
  line-height: 24px;
  color: #3e4867;
`;

export const TextFieldContainer = styled(({ ...props }) => (
  <Grid
    {...props}
    item
    xs={6}
    md={3}
    sx={{
      mb: { xs: 1, md: 0 },
    }}
  />
))``;
