import appApi from '../api/AppAPI';

export const chapterService = {
  getChapterIntroduction: (chapterNumber) => appApi.get(`/chapters/${chapterNumber}`),
  getChapterSectionDetail: (chapterNumber, sectionNumber) => appApi.get(`/chapterSections/${sectionNumber}`)
};
