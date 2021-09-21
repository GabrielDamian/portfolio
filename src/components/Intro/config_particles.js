//-2 -1
const config = {
  "background": {
    "color": {
      "value": "transparent"
    }
  },
  "fullScreen": {
    "enable": true,
    "zIndex": 1
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onHover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  },
  "particles": {
    "color": {
      "value": "#e753d7",
      "animation": {
        "h": {
          "speed": 20
        }
      }
    },
    "links": {
      "color": {
        "value": "#ffffff"
      },
      "enable": true,
      "opacity": 0.4
    },
    "move": {
      "enable": true,
      "path": {},
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "speed": 6,
      "spin": {}
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 90
    },
    "opacity": {
      "value": 0.5,
      "animation": {}
    },
    "size": {
      "value": {
        "min": 0.4,
        "max": 3
      },
      "animation": {}
    }
  }
}
export default config;
