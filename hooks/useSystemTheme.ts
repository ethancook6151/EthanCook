import { extendTheme } from "@chakra-ui/react";

export default function useSystemTheme() {
    return extendTheme({
        config: {
            useSystemColorMode: true,
        },
    });
}