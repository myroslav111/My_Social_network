import { Feed } from 'components/Feed';
import { Rightbar } from 'components/Rightbar';
import { Sidebar } from 'components/Sidebar';
import React from 'react';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import { Navbar } from 'components/Navbar';
import Add from 'components/Add';
import { useState } from 'react';

export const App = () => {
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

////////////////////////////////////////////////////////////////////////////////////////
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// export const App = () => {
//   return (
//     <div>
//       <Stack spacing={2} direction="row">
//         <Button variant="text">Text</Button>
//         <Button variant="contained" size="large" color="secondary">
//           Contained
//         </Button>
//         <Button variant="outlined" disabled>
//           Outlined
//         </Button>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: 'red',
//             color: '#888',
//             margin: 5,
//             '&:hover': {
//               backgroundColor: 'green',
//             },
//           }}
//         >
//           Contained
//         </Button>
//       </Stack>
//     </div>
//   );
// };
