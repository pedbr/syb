// Setup Colors
const PRIMARY = {
  dark: '#171738',
  light: '#F4F5FE',
  main: '#FFBF00',
}

const INFO = {
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
}
const SUCCESS = {
  light: '#C8FACD',
  main: '#00AB55',
  dark: '#005249',
}
const WARNING = {
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
}
const ERROR = {
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
}

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
}

const Palette = {
  // LIGHT
  light: {
    primary: {
      light: PRIMARY.light,
      dark: PRIMARY.dark,
      main: PRIMARY.main,
    },
    info: {
      light: INFO.light,
      main: INFO.main,
      dark: INFO.dark,
    },
    success: {
      light: SUCCESS.light,
      main: SUCCESS.main,
      dark: SUCCESS.dark,
    },
    warning: {
      light: WARNING.light,
      main: WARNING.main,
      dark: WARNING.dark,
    },
    error: {
      light: ERROR.light,
      main: ERROR.main,
      dark: ERROR.dark,
    },

    grey: GREY,

    text: {
      primary: PRIMARY.dark,
      secondary: GREY[600],
      disabled: GREY[500],
    },

    background: {
      paper: PRIMARY.light,
      default: '#FFFFFF',
    },
  },

  // DARK
  dark: {
    primary: {
      light: PRIMARY.dark,
      dark: PRIMARY.light,
      main: PRIMARY.main,
    },
    info: {
      light: INFO.light,
      main: INFO.main,
      dark: INFO.dark,
    },
    success: {
      light: SUCCESS.light,
      main: SUCCESS.main,
      dark: SUCCESS.dark,
    },
    warning: {
      light: WARNING.light,
      main: WARNING.main,
      dark: WARNING.dark,
    },
    error: {
      light: ERROR.light,
      main: ERROR.main,
      dark: ERROR.dark,
    },

    grey: GREY,

    text: {
      primary: PRIMARY.light,
      secondary: GREY[500],
      disabled: GREY[600],
    },

    background: {
      paper: PRIMARY.dark,
      default: '#000000',
    },
  },
}

export default Palette
