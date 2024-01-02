import PropTypes from "prop-types";
import {
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Badge,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useResponsive } from "src/hooks/use-responsive";
import { bgBlur } from "src/theme/css";
import Iconify from "src/components/iconify";
import Logo from "src/components/logo";
import { useNavigate } from "react-router-dom";
import { NAV, HEADER } from "./config-layout";
// import NotificationsPopover from "./common/notifications-popover";

export default function Header({ onOpenNav }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const lgUp = useResponsive("up", "lg");

  const renderContent = (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
    }}>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Logo />

      <Stack direction="row" alignItems="center" spacing={1}>
        {/* <NotificationsPopover /> */}
        <IconButton onClick={navigate("/cart")}>
          <Badge badgeContent={4} color="primary">
            <Iconify icon="eva:shopping-cart-fill" />
          </Badge>
        </IconButton>
      </Stack>
    </Box>
  );

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(["height"], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
