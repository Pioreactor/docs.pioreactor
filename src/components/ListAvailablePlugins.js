import React from 'react';
import clsx from 'clsx';
import Avatar from "boring-avatars";

export default function ListAvailablePlugins(){

  const [availablePlugins, setAvailablePlugins] = React.useState([])


  React.useEffect(() => {
    async function getData() {
         await fetch("https://raw.githubusercontent.com/Pioreactor/list-of-plugins/main/plugins.json")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setAvailablePlugins(json)
        });
      }
      getData()
  }, [])

  return (
    <div>
     <ul>
        {availablePlugins
            .map(plugin =>
              <li style={{listStyle: "none", marginBottom: "25px"}}>
                  <div>
                    <div style={{display: "flex", alignItems: "center"}}>
                      <Avatar  name={plugin.name + "seed1"} size={40} colors={["#5332ca", "#856edb", "#94ccc1", "#d8535e", "#f0b250"]} variant="bauhaus"  />
                      <h3 style={{marginBottom: "5px", marginLeft: "10px"}}>{plugin.name}</h3>
                    </div>
                    <a href={plugin.homepage} target="_blank">View homepage ↗</a>
                    <p>{plugin.description}</p>
                  </div>
              </li>
        )}
      </ul>
    </div>
  )
}
