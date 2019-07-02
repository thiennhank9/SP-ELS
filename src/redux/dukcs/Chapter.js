import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { SherpathConstants } from '../../constants/SherpathConstants';

const { CHAPTER_STATE } = SherpathConstants.reduxResources;

const initialState = fromJS({
  chapterNumber: 7,
  sectionNumber: 0,
  chapterIntroduction: {
    id: 0,
    number: 0,
    name: '',
    totalCards: 0,
    bookPages: '0',
    sections: []
  },
  chapterSections: [],
  hello: ''
});

const actions = {
  fetchChapterIntroduction: createAction('CHAPTER/FETCH_CHAPTER_INTRODUCTION'),
  setChapterIntroduction: createAction('CHAPTER/SET_CHAPTER_INTRODUCTION'),
  fetchChapterSectionDetail: createAction('CHAPTER/FETCH_CHAPTER_SECTION_DETAIL'),
  appendChapterSectionDetail: createAction('CHAPTER/APPEND_CHAPTER_SECTION_DETAIL'),
  printHello: createAction('CHAPTER/PRINT_HELLO')
};

const reducer = handleActions(
  {
    [actions.setChapterIntroduction]: (state, { payload }) => state.set('chapterIntroduction', fromJS(payload)),
    [actions.appendChapterSectionDetail]: (state, { payload }) => {
      return state.updateIn(['chapterSections'], (chapterSections) => chapterSections.push(fromJS(payload)));
    },
    [actions.printHello]: (state, { payload }) => state.set('hello', fromJS(payload))
  },
  initialState
);

const getChapterState = (state) => state.get(CHAPTER_STATE);

const selectors = {
  getChapterNumber: createSelector(
    getChapterState,
    (state) => state.get('chapterNumber')
  ),
  getSectionNumber: createSelector(
    getChapterState,
    (state) => state.get('sectionNumber')
  ),
  getChapterIntroduction: createSelector(
    getChapterState,
    (state) => state.get('chapterIntroduction')
  ),
  getChapterSection: createSelector(
    getChapterState,
    (state) => state.get('chapterSections').get(state.get('sectionNumber'))
  )
};

export { actions as chapterActions, reducer as chapterReducer, selectors as chapterSelectors };
