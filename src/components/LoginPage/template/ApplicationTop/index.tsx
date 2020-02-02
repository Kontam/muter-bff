import React from 'react';
import { connect, useSelector } from 'react-redux';

import { RootState } from '../../../../redux/reducers';

import PageHeader from '../../auganisms/PageHeader';
import LoginSection from '../../auganisms/LoginSection';
import ReadMore from '../../molecules/ReadMore';
import Carousel from '../../auganisms/Carousel';
import SwitchSection from '../../auganisms/SwitchSection';
import SNSAdSection from '../../auganisms/SNSAdSection';
import PageFooter from '../../auganisms/PageFooter';

const basePathSelector = (state: RootState) => state.basePath;

const ApplicationTop = () :JSX.Element => {
  const basePath = useSelector(basePathSelector);

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

export default ApplicationTop;
