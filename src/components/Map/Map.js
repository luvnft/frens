import React, { useEffect, useState } from "react";
// ES6
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYmxrbHV2IiwiYSI6ImNscTQ1M25xYTAzaWIyaWxrY3V2N3Q1N3oifQ.2EBlTUdWQdnxZLvVYdntqQ",
});

export default function Map({ userCoord }) {
  const [viewport, setViewport] = useState({
    latitude: userCoord[0],
    longitude: userCoord[1],
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });
  const [layer, setLayer] = useState("2b1f5094-90fc-4cee-b5ea-0943e369c7b1");
  const [expandMarker, setExpandMarker] = useState(null);
  // const [addMarker, { loading }] = useMutation(ADD_MARKER, {
  //   update: updateMarkersCache,
  //   // onCompleted: () => {
  //   // },
  // });

  useEffect(() => {
    // console.log("TEST userCoord", userCoord);
    setViewport({
      coord: [userCoord[1], userCoord[0]],
      zoom: 2,
      bearing: 0,
      pitch: 0,
    });
  }, [userCoord]);

  return (
    <Mapbox
      style="mapbox://styles/blkluv/ckjr77h9g1xdz19oasmm4u9u3"
      containerStyle={{
        height: "105vh",
        width: "100vw",
        position: "fixed",
        left: 0,
      }}
      center={viewport.coord}
    >
      {/* <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer> */}
    </Mapbox>
  );
}
