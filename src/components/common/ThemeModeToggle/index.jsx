import React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps
} from "@chakra-ui/react";

import { Sun } from "./Sun";
import { Moon } from "./Moon";

export const ThemeModeToggler = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(Moon, Sun);

  return (
    <IconButton
      fontSize="3xl"
      variant="ghost"
      onClick={() => toggleColorMode()}
      icon={<SwitchIcon />}
      _hover={{ bg: "transparent" }}
      _active={{ bg: "transparent" }}
      style={{ boxShadow: "none" }}
      {...props}
    />
  );
};