import { extendTheme } from "@chakra-ui/react"

// Global style overrides
import styles from "../styles"

// Foundational style overrides
import borders from "../foundations/borders"

// Component style overrides
import Button from "../components/button"

const theme = extendTheme({
    styles,
    borders,
    components: {
      Button,
    },
    fonts: {
      heading: "'Playfair Display', Cambria, 'Hoefler Text', Utopia, 'Liberation Serif', 'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif",
      body: "system, -apple-system, '.SFNSText-Regular', 'San Francisco', 'Roboto', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
    },
});

export default theme;