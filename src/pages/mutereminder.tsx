import { NextPage } from 'next';
import TwitterApps from '../components/TwApps/templates/TwitterApps';
import Head from '../components/Common/Header';
import TwAppsConst from '../components/TwApps/TwAppsConst';

const Page: NextPage = () => {

  const base_path = process.env.NODE_ENV === "production"
  ? process.env.BASE_URL
  : process.env.BASE_URL_DEV;

  return (
    <>
      <Head />
      <TwitterApps
        basePath={base_path}
        // appName={TwAppsConst.APPNAME_MUTER}
      />
    </>
  );
}

export default Page;
