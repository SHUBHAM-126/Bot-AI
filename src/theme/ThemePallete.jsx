export const getThemePallete = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: '#D7C7F4',
                    light: '#fff'
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
                contained: {
                    fontFamily: 'Ubuntu, sans-serif',
                    textTransform: 'none',
                    '&:hover': {
                        background: 'rgba(151, 133, 186, 1)',
                        color: '#fff'
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