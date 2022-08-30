import React from 'react';
import clsx from 'clsx';
import { Hashicon } from "@emeraldpay/hashicon-react";

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
                      <Hashicon  value={plugin.name} size={28} />
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
