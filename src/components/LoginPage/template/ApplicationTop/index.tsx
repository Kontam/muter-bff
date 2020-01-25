import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../../redux/reducers';

import PageHeader from '../../auganisms/PageHeader';
import LoginSection from '../../auganisms/LoginSection';
import ReadMore from '../../molecules/ReadMore';
import Carousel from '../../auganisms/Carousel';
import SwitchSection from '../../auganisms/SwitchSection';
import SNSAdSection from '../../auganisms/SNSAdSection';
import PageFooter from '../../auganisms/PageFooter';

interface AppicationTopProps {
  basePath :string;
}

const ApplicationTop = ({ basePath }: AppicationTopProps) :JSX.Element => {

  return (
    <>
      <PageHeader />
      <LoginSection
        basePath={basePath}
      />
      <ReadMore />
      <Carousel />
      <SwitchSection />
      <SNSAdSection />
      <PageFooter />
    </>
  );
};

export default connect(
  (state :RootState) => ({
    basePath: state.basePath,
  }),
)(ApplicationTop);
