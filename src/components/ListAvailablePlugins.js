import React from 'react';
import Avatar from "boring-avatars";

export default function ListAvailablePlugins(){

  const [availablePlugins, setAvailablePlugins] = React.useState([])


  React.useEffect(() => {
    const abortController = new AbortController();

    async function getData() {
      const response = await fetch(
        "https://raw.githubusercontent.com/Pioreactor/list-of-plugins/main/plugins.json",
        {signal: abortController.signal},
      );
      const plugins = await response.json();

      const pluginsWithDownloads = await Promise.all(
        plugins.map(async (plugin) => {
          const pypiProjectUrl = `https://pypi.org/project/${encodeURIComponent(plugin.name)}/#files`;

          try {
            const metadataResponse = await fetch(
              `https://pypi.org/pypi/${encodeURIComponent(plugin.name)}/json`,
              {signal: abortController.signal},
            );

            if (!metadataResponse.ok) {
              return {...plugin, pypiProjectUrl};
            }

            const metadata = await metadataResponse.json();
            const universalWheels = metadata.urls.filter(
              (file) =>
                file.packagetype === "bdist_wheel" &&
                !file.yanked &&
                file.python_version !== "py2" &&
                file.filename.endsWith("-none-any.whl"),
            );

            if (universalWheels.length !== 1) {
              return {...plugin, pypiProjectUrl};
            }

            return {
              ...plugin,
              pypiProjectUrl,
              wheelFilename: universalWheels[0].filename,
              wheelUrl: universalWheels[0].url,
              wheelVersion: metadata.info.version,
            };
          } catch (error) {
            if (error.name === "AbortError") {
              throw error;
            }

            return {...plugin, pypiProjectUrl};
          }
        }),
      );

      setAvailablePlugins(pluginsWithDownloads);
    }

    getData().catch((error) => {
      if (error.name !== "AbortError") {
        setAvailablePlugins([]);
      }
    });

    return () => abortController.abort();
  }, [])

  return (
    <div>
     <ul>
        {availablePlugins
            .map(plugin =>
              <li key={plugin.name} style={{listStyle: "none", marginBottom: "25px"}}>
                  <div>
                    <div style={{display: "flex", alignItems: "center"}}>
                      <Avatar  name={plugin.name + "seed1"} size={40} colors={["#5332ca", "#856edb", "#94ccc1", "#d8535e", "#f0b250"]} variant="bauhaus"  />
                      <h3 style={{marginBottom: "5px", marginLeft: "10px"}}>{plugin.name}</h3>
                    </div>
                    <div style={{display: "flex", columnGap: "16px", flexWrap: "wrap"}}>
                      <a href={plugin.homepage} target="_blank" rel="noopener noreferrer">View homepage ↗</a>
                      {plugin.wheelUrl ? (
                        <a href={plugin.wheelUrl} title={plugin.wheelFilename}>
                          Download .whl (v{plugin.wheelVersion}) ⤓
                        </a>
                      ) : (
                        <a href={plugin.pypiProjectUrl} target="_blank" rel="noopener noreferrer">
                          View downloads on PyPI ↗
                        </a>
                      )}
                    </div>
                    <p>{plugin.description}</p>
                  </div>
              </li>
        )}
      </ul>
    </div>
  )
}
