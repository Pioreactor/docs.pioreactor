import React from 'react';
import Layout from '@theme/Layout';
import MarkdownView from 'react-showdown';


function Changelog() {
  const [changelog, setChangelog] = React.useState("")

  React.useEffect(() => {
    async function getData() {
         await fetch("https://raw.githubusercontent.com/Pioreactor/pioreactor/master/CHANGELOG.md")
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          setChangelog(data)
        });
      }
      getData()
  }, [])

  return (
    <Layout title="Changelog" description="The software changelog for the Pioreactor system">
      <header>
        <h1 style={{
          display: 'flex',
          justifyContent: 'center',
          padding: "0 50px 0"

        }}>
      Changelog </h1>
      </header>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: "0 200px 0"
        }}>
          <MarkdownView
            markdown={changelog}
          />
      </div>
    </Layout>
  );
}

export default Changelog;