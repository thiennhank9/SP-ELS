import React from 'react';
import { connect } from 'react-redux';
import { ELSButton, ELSIcon } from '../../common';
import { push } from 'connected-react-router';

function ButtonStart(props) {
  return (
    <ELSButton
      id="startAssessment"
      // size="large"
      // cssModifiers={['c-els-button--small@mobile']}
      onClick={() => props.navigateNextSection()}
      // isDisabled={!props.readyForStart}
    >
      Start
      <ELSIcon name="chevron-right" size="1x" customClass="u-els-margin-left-1o2" align="middle" />
    </ELSButton>
  );
}

const mapDispatchToProps = (dispatch) => ({
  navigateNextSection: () => dispatch(push('/retrieval-practice'))
});

export default connect(
  null,
  mapDispatchToProps
)(ButtonStart);
