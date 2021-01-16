import React from 'react';
import { makeStyles, Theme, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useLanguage from '../utils/hooks/useLanguage';
import workclassLogo from '../assets/images/logo.png';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';

const styles = makeStyles((theme: Theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  logoContainer: {
    cursor: 'pointer',
    marginRight: 16,
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    color: theme.palette.common.white,
  },
  linkContainer: {
    cursor: 'pointer',
    marginLeft: 20,
  },
}));

const links = [
  {
    key: 'jobs',
    route: '/jobs',
  },
  {
    key: 'companies',
    route: '/companies',
  },
];

function AppHeaderBar() {
  const classes = styles();
  const { t } = useLanguage();
  const history = useHistory();

  function onLogoPressed() {
    history.push('/');
  }

  function onLinkPressed(route: string) {
    history.push(route);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <div onClick={onLogoPressed} className={classes.logoContainer}>
            <img src={workclassLogo} width={60} height={60} />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${t('search_for_jobs')}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Hidden xsDown>
            <div className={classes.grow} />
            {links.map((item) => (
              <div key={item.key} className={classes.linkContainer}>
                <Link
                  onClick={() => onLinkPressed(item.route)}
                  className={classes.link}
                >
                  {t(`navigation.${item.key}`)}
                </Link>
              </div>
            ))}
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppHeaderBar;
