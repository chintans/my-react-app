import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left side: Search */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 1,
            px: 2,
          }}
        >
          <SearchIcon sx={{ color: "#666" }} />
          <InputBase
            placeholder="Search anything here..."
            sx={{ ml: 1, flex: 1, color: "#000" }}
          />
        </Box>

        {/* Right side: Settings, Avatar, etc. */}
        <Box>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          {/* You could add a user avatar or a smiley icon here */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
