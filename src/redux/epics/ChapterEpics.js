import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { awaitEpic } from '../helpers/EpicAjaxHelper';
import { chapterService } from '../../services/ChapterServices';
import { chapterActions, chapterSelectors } from '../dukcs/Chapter';

const fetchChapterIntroduction$ = (state$, chapterNumber) =>
  from(chapterService.getChapterIntroduction(chapterNumber)).pipe(
    map((response) => {
      const chapterIntroduction = response.data;
      return chapterActions.setChapterIntroduction(chapterIntroduction);
    })
  );

const fetchChapterSectionDetail$ = (state$, sectionNumber ) => {
  const chapterNumber = chapterSelectors.getChapterNumber(state$.value);

  return from(chapterService.getChapterSectionDetail(chapterNumber, sectionNumber)).pipe(
    map((response) => {
      const chapterSectionDetail = response.data;
      return chapterActions.appendChapterSectionDetail(chapterSectionDetail);
    })
  );
};

export const chapterEpics = {
  chapterFetchChapterIntroduction: (action$, state$) =>
    awaitEpic(action$, state$, chapterActions.fetchChapterIntroduction().type, fetchChapterIntroduction$),
  chapterFetchChapterSectionDetail: (action$, state$) =>
    awaitEpic(action$, state$, chapterActions.fetchChapterSectionDetail().type, fetchChapterSectionDetail$)
};
