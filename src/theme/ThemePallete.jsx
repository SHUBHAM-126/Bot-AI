import { BorderColor } from "@mui/icons-material";

export const getThemePallete = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: '#D7C7F4',
                    light: '#fff',
                    dark: '#9785BA',
                    bglight: '#fafafa',
                    bgtheme: '#FAF7FF'
                },
                text: {
                    primary: '#000000',
                    secondary: 'rgba(0,0,0,0.5)',
                }
            }
            : {
                primary: {
                    main: '#333'
                },
                text: {
                    primary: '#ffffff',
                    secondary: 'rgba(255,255,255,0.5)'
                }
            }
        )
    },
    typography: {
        body1: {
            fontFamily: 'Open Sans, sans-serif'
        },
        h1: {
            fontFamily: 'Ubuntu, sans-serif',
            color: '#9785BA',
            fontSize: 28,
            fontWeight: 700,
        },
        h2: {
            fontFamily: 'Ubuntu, sans-serif',
            color: 'text.primary',
            fontSize: 28,
            fontWeight: 500,
        },
        heading: {
            fontFamily: 'Ubuntu, sans-serif',
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                size: 'large'
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontFamily: 'Ubuntu, sans-serif',
                },
                contained: {
                    border: 1,
                    '&:hover': {
                        color: '#fff'
                    }
                },
                outlined: {
                    color: '#000',
                    borderColor: '#9785BA',
                    '&:hover': {
                        background: '#9785BA',
                        color: '#fff',
                    }
                }
            }
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
})