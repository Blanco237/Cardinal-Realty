module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        menuIn: {
          '0%' : { left: '-999px'},
          '100%' : { left: '0'}
        },
        menuOut: {
          '0%' : { left: '0'},
          '100%' : { left: '-999px'}
        },
        rotate : {
          '0%' : { transform: 'rotate(0deg)'},
          '100%' : { transform: 'rotate(90deg)'}
        }
      },
      animation: {
        menuIn: 'menuIn 0.5s ease-in-out',
        menuOut: 'menuOut 0.5s ease-in-out',
        rotate: 'rotate 0.5s ease-in-out',
        rotateReverse: 'rotate 1.5s ease-in-out reverse'
      }
    },
    colors: {
      "dark-blue": "#1e293e",
      "purple":"#887880",
      "grey-blue":"#88a096",
      "pink-blush":"#fdecef",
      "army-green":"#474b24",
      'white': '#ffffff',
      'black': '#000000',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'dark-faded' : 'rgb(0,0,0,0.3)',
      'blue' : '#74c0fc',
      'pink' : '#6741d9',
      'bubble-gum-faded': 'rgba(255,119,233,0.3)',
      'bermuda-faded': 'rgba(255,119,233,0.6)',
    }
  },
  plugins: [],
}
