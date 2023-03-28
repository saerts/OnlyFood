const StyleDictionaryPackage = require('style-dictionary');

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(brand) {
  return {
    "source": [
      `tokens/brands/${brand}/*.json`,
      "tokens/globals/**/*.json",
      `tokens/platforms/${platform}/*.json`
    ],
    "platforms": {
      "web": {
        "transformGroup": "web",
        "buildPath": `../src/assets/tokens-output/web/${brand}/`,
        "files": [{
          "destination": `tokens-${brand}.scss`,
          "format": "scss/variables"
        }]
      },
      "js": {
        "transformGroup": "js",
        "buildPath": `../src/assets/tokens-output/web/${brand}/`,
        "files": [{
          "destination": `variables-${brand}.js`,
          "format": "javascript/es6"
        }]
      },
      "json-flat": {
        "transformGroup": "web",
        "buildPath": `../src/assets/tokens-output/web/${brand}/`,
        "files": [
          {
            "destination": `variables-${brand}.json`,
            "format": "json/flat"
          }
        ]
      },
      "android": {
        "transformGroup": "android",
        "buildPath": `../src/assets/tokens-output/android/${brand}/`,
        "files": [{
          "destination": "tokens.colors.xml",
          "format": "android/colors"
        },{
          "destination": "tokens.dimens.xml",
          "format": "android/dimens"
        },{
          "destination": "tokens.font_dimens.xml",
          "format": "android/fontDimens"
        }]
      },
      "ios": {
        "transformGroup": "ios",
        "buildPath": `../src/assets/tokens-output/ios/${brand}/`,
        "files": [{
          "destination": "tokens.h",
          "format": "ios/macros"
        }]
      }
    }
  };
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

['brand-1', 'brand-2', 'brand-3', 'brand-1-dark', 'brand-2-dark', 'brand-3-dark'].map(function (brand) {
  ['web', 'ios', 'android', 'js', 'json-flat'].map(function (platform) {

    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand, platform));

    StyleDictionary.buildPlatform(platform);

    console.log('\nEnd processing');

  })
})

console.log('\n==============================================');
console.log('\nBuild completed!');
