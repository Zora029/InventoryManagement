import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ClearIcon from '@mui/icons-material/Clear';

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<ClearIcon />} label="Delete" variant="outlined" />
    </Stack>
  );
}