import React, { Component } from 'react';
import { connect } from 'react-redux';
import RetrievalPracticeView from './RetrievalPracticeView';
import { chapterActions, chapterSelectors } from '../../../redux/dukcs/Chapter';

class RetrievalPracticeComponent extends Component {
  componentDidMount() {
    const { chapterNumber, sectionNumber } = this.props;

    this.props.fetchChapterIntroduction(chapterNumber);
    this.props.fetchChapterSectionDetail(sectionNumber);
  }

  render() {
    const { chapterIntroduction = {}, chapterSection = {} } = this.props;
    const viewProps = {
      chapter: chapterIntroduction,
      chapterSection
    };

    return <RetrievalPracticeView {...viewProps} />;
  }
}

const mapStateToProps = (state) => ({
  chapterNumber: chapterSelectors.getChapterNumber(state),
  sectionNumber: chapterSelectors.getSectionNumber(state),
  chapterIntroduction: chapterSelectors.getChapterIntroduction(state).toJS(),
  chapterSection: chapterSelectors.getChapterSection(state) ? chapterSelectors.getChapterSection(state).toJS() : {}
});

const mapDispatchToProps = (dispatch) => ({
  fetchChapterIntroduction: (chapterNumber) => dispatch(chapterActions.fetchChapterIntroduction(chapterNumber)),
  fetchChapterSectionDetail: (sectionNumber) => dispatch(chapterActions.fetchChapterSectionDetail(sectionNumber)),
  printHello: (text) => dispatch(chapterActions.printHello(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RetrievalPracticeComponent);
