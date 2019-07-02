import React from 'react';
import { Route } from 'react-router-dom';
import RetrievalPracticeComponent from '../components/features/retrieval-practice/RetrievalPracticeComponent';
import KnowledgeCardComponent from '../components/features/knowledge-cards/KnowledgeCardsComponent';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { configStore } from '../redux/AppStore';

const history = createBrowserHistory();

const AppRouter = () => (
  <Provider store={configStore(history)}>
    <ConnectedRouter history={history}>
      <Route path="/knowledge-cards" component={KnowledgeCardComponent} />
      <Route path="/retrieval-practice" component={RetrievalPracticeComponent} />
      {/* <Route exact component={KnowledgeCardComponent} /> */}
    </ConnectedRouter>
  </Provider>
);

export default AppRouter;
