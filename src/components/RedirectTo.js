import React, {useEffect} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

function getRedirectTarget(to) {
  if (typeof window === 'undefined' || to.includes('#')) {
    return to;
  }

  return `${to}${window.location.hash}`;
}

export default function RedirectTo({to}) {
  const href = getRedirectTarget(to);

  useEffect(() => {
    window.location.replace(getRedirectTarget(to));
  }, [to]);

  return (
    <Layout title="Redirecting">
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${href}`} />
      </Head>
      <main className="container margin-vert--xl">
        <p>
          This page has moved to <Link to={href}>{href}</Link>.
        </p>
      </main>
    </Layout>
  );
}
