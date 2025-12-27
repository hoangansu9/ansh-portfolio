/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import { AppProps } from 'next/app';
import '../styles/global.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../shared/components/loader';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });
  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren'
  };

  return (
    <div>
      <Head>
        <title>Ansh | Software Developer</title>
        <meta name="title" content="Ansh | Software Developer" />
        <meta
          name="description"
          content="Ansh is a full stack developer who crafts beautiful web-apps, chrome extensions and apps."
        />
        <meta
          name="keywords"
          content="Ansh is a full stack developer who crafts beautiful web-apps, chrome extensions and apps."
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Ansh" />
        <meta httpEquiv="content-language" content="en" />

        {/* Open Graph / Facebook
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harshgoel.me/" />
        <meta property="og:title" content="Ansh | Software Developer" />
        <meta
          property="og:description"
          content="Harsh is a full stack developer who crafts beautiful web-apps, chrome extensions and apps."
        />
        <meta
          property="og:image"
          content="https://billboard.srmkzilla.net/api/blog?title=Harsh%20Goel&subtitle=Software%20Developer&fileType=jpeg&theme=dark&fontSize=180px"
        /> */}

        {/* Use Billboard to get an OG Image */}
        <meta
          property="twitter:image"
          content="https://billboard.srmkzilla.net/api/blog?title=Harsh%20Goel&subtitle=Software%20Developer&fileType=jpeg&theme=dark&fontSize=180px"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <AnimatePresence>
          <div className="page-transition-wrapper overflow-x-hidden min-h-screen">
            <motion.div
              transition={spring}
              key={router.pathname}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              id="page-transition-container">
              <Component {...pageProps} key={router.pathname} />
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default MyApp;
