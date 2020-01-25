import * as React from 'react';
import Head from 'next/head';

export default (): JSX.Element => {
  return (
    <Head>
      <title>my title</title>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <link rel="stylesheet" href="https://use.typekit.net/jdw4aor.css"/>
      <link rel="stylesheet" href="/Carousel.css"/>
    </Head>
  )
}
