var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.36000715375503844,
        "pitch": -0.08656508166545862,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": -0.0467520073042742,
          "pitch": -0.3507819265702814,
          "rotation": 1.5707963267948966,
          "target": "1-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6984196532791795,
          "pitch": -0.0712882319194641,
          "title": "Faculty of Engineering",
          "text": "Welcome!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.957682648868756,
        "pitch": -0.6451159657450525,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": 3.003601655398702,
          "pitch": -0.6107427737516353,
          "rotation": 3.141592653589793,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.485571318693454,
          "pitch": -0.3261240684183857,
          "title": "Auditorium",
          "text": "Chill here!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.2446431377407858,
        "pitch": -0.23247961936305117,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": -1.2446431377407858,
          "pitch": -0.23247961936305117,
          "rotation": 0.7853981633974483,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0193845548341969,
          "pitch": -0.4481764535704631,
          "title": "End of tour",
          "text": "Come back soon!"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
