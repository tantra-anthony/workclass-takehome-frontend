import { ThemeOptions, createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    draggable: {
      default: string;
      active: string;
    };
    facilities: {
      wetmarket: string;
      supermarket: string;
      mall: string;
      singpost: string;
      park: string;
    };
    droppable: {
      default: string;
      active: string;
    };
  }
  interface ThemeOptions {
    draggable: {
      default: string;
      active: string;
    };
    facilities: {
      wetmarket: string;
      supermarket: string;
      mall: string;
      singpost: string;
      park: string;
    };
    droppable: {
      default: string;
      active: string;
    };
  }
}

function createAppTheme(options: ThemeOptions) {
  return createMuiTheme({
    ...options,
  });
}

export const lightTheme = () =>
  createAppTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#1565C0',
      },
      secondary: {
        main: '#D32F2F',
      },
      background: {
        default: '#eeeeee',
      },
    },
    draggable: {
      active: '#EEEEEE',
      default: '#fff',
    },
    facilities: {
      wetmarket: '#880E4F',
      supermarket: '#004D40',
      mall: '#4A148C',
      singpost: '#0D47A1',
      park: '#33691E',
    },
    droppable: {
      active: '#BDBDBD',
      default: '#E0E0E0',
    },
    typography: {
      fontFamily: "'Open Sans', 'Helvetica', 'Arial', sans-serif",
    },
  });
