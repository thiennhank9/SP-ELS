import React, { Component } from 'react';
import { connect } from 'react-redux';
import KnowledgeCardsView from './KnowledgeCardsView';
import { chapterActions, chapterSelectors } from '../../../redux/dukcs/Chapter';

const chapterNumber = 7;

class KnowledgeCardsComponent extends Component {
  componentDidMount() {
    this.props.fetchChapterIntroduction(chapterNumber);
  }

  render() {
    const viewProps = {
      chapter: this.props.chapterIntroduction
    };

    return <KnowledgeCardsView {...viewProps} />;
  }
}

const mapStateToProps = (state) => ({
  chapterIntroduction: chapterSelectors.getChapterIntroduction(state).toJS()
});

const mapDispatchToProps = (dispatch) => ({
  fetchChapterIntroduction: (chapterId) => dispatch(chapterActions.fetchChapterIntroduction(chapterId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KnowledgeCardsComponent);
