import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            maeginLeft: drawerWidth,
        },
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
    },
    image: {
        marginRight: '10px',

    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', //16.9

    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',

    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',

    },
}));