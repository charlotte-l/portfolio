import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from '../styles';

// Foundational style overrides
import borders from '../foundations/borders';
import shadows from '../foundations/shadows';
import textStyles from '../foundations/textStyles';

// Component style overrides
import Button from '../components/button';
import Link from '../components/link';
import breakpoints from '../components/breakpoints';

const theme = extendTheme({
  styles,
  borders,
  shadows,
  components: {
    Button,
    Link,
  },
  fonts: {
    heading:
      "'Playfair Display', 'Times New Roman'",
    body: "system, -apple-system, '.SFNSText-Regular', 'San Francisco', 'Roboto', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
  },
  textStyles,
  breakpoints,
});

export default theme;
