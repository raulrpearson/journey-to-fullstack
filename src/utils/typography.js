import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  bodyFontFamily: ['Avenir Next', 'serif'],
  googleFonts: [
    {
      name: 'Inconsolata',
      styles: ['400']
    }
  ]
});

export default typography;
