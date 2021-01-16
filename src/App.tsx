import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { lightTheme } from './config/theme';
import { routes } from './config/routes';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppContainer from './components/AppContainer';
import { loadTranslations } from './services/translation';
import AppHeaderBar from './components/AppHeaderBar';

loadTranslations();

const styles = makeStyles(() => ({
  app: {
    whiteSpace: 'pre-line',
  },
}));

function App() {
  const classes = styles();

  return (
    <div className={classes.app}>
      <ThemeProvider theme={lightTheme()}>
        <AppContainer>
          <HashRouter>
            <AppHeaderBar />
            <Switch>
              {routes.map((options) => (
                <Route
                  key={options.key}
                  exact={!!options.exact}
                  path={options.path || options.link}
                  component={options.component}
                />
              ))}
            </Switch>
          </HashRouter>
        </AppContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
