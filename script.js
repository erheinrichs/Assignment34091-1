require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "4357011f500c47d4a3fe88b85006ff6d"
          }
        });  
  const view = new MapView({
          map: webmap,
          container: "viewDiv"
        });
      });

var webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "4357011f500c47d4a3fe88b85006ff6d"
        }
      });
