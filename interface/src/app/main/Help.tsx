import { toast } from 'react-toastify';

import CommentIcon from '@mui/icons-material/CommentTwoTone';
import DownloadIcon from '@mui/icons-material/GetApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBookTwoTone';
import {
  Avatar,
  Box,
  Button,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material';

import { useRequest } from 'alova/client';
import { SectionContent, useLayoutTitle } from 'components';
import { useI18nContext } from 'i18n/i18n-react';

import { API } from '../../api/app';
import type { APIcall } from './types';

const Help = () => {
  const { LL } = useI18nContext();
  useLayoutTitle(LL.HELP());

  const { send: sendAPI } = useRequest((data: APIcall) => API(data), {
    immediate: false
  }).onSuccess((event) => {
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(
      new Blob([JSON.stringify(event.data, null, 2)], {
        type: 'text/plain'
      })
    );

    anchor.download =
      'emsesp_' + event.args[0].device + '_' + event.args[0].entity + '.txt';
    anchor.click();
    URL.revokeObjectURL(anchor.href);
    toast.info(LL.DOWNLOAD_SUCCESSFUL());
  });

  const callAPI = async (device: string, cmd: string) => {
    await sendAPI({ device, cmd, id: 0 }).catch((error: Error) => {
      toast.error(error.message);
    });
  };

  return (
    <>
      <SectionContent>
        <List sx={{ borderRadius: 3, border: '2px solid grey' }}>
          <ListItem>
            <ListItemButton component="a" href="https://emsesp.org">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#72caf9' }}>
                  <MenuBookIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={LL.HELP_INFORMATION_1()} />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton component="a" href="https://discord.gg/3J3GgnzpyT">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#72caf9' }}>
                  <CommentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={LL.HELP_INFORMATION_2()} />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              component="a"
              href="https://github.com/emsesp/EMS-ESP32/issues/new/choose"
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#72caf9' }}>
                  <GitHubIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={LL.HELP_INFORMATION_3()} />
            </ListItemButton>
          </ListItem>
        </List>

        <Box p={2} color="warning.main">
          <Typography mb={1} variant="body2">
            {LL.HELP_INFORMATION_4()}
          </Typography>
          <Button
            startIcon={<DownloadIcon />}
            variant="outlined"
            color="primary"
            onClick={() => callAPI('system', 'info')}
          >
            {LL.SUPPORT_INFORMATION(0)}
          </Button>
        </Box>

        <Button
          sx={{ ml: 2 }}
          startIcon={<DownloadIcon />}
          variant="outlined"
          color="primary"
          onClick={() => callAPI('system', 'allvalues')}
        >
          {LL.ALLVALUES()}
        </Button>

        <Box border={1} p={1} mt={4}>
          <Typography align="center" variant="subtitle1" color="orange">
            <b>{LL.HELP_INFORMATION_5()}</b>
          </Typography>
          <Typography align="center">
            <Link
              target="_blank"
              href="https://github.com/emsesp/EMS-ESP32"
              color="primary"
            >
              {'github.com/emsesp/EMS-ESP32'}
            </Link>
          </Typography>
          <Typography color="white" variant="subtitle2" align="center">
            @proddy @MichaelDvP
          </Typography>
        </Box>
      </SectionContent>
    </>
  );
};

export default Help;
