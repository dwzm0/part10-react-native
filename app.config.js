import 'dotenv/config';

export default {
    "name": "reactnative-studyapp",
    "slug": "reactnative-studyapp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.anonymous.reactnativestudyapp"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      env: process.env.ENV,
      apolloUri: process.env.APOLLO_URI,
    },
  }

