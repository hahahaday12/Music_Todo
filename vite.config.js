import react from '@vitejs/plugin-react'
import sassDts from 'vite-plugin-sass-dts'
import path from 'path';
const __dirname = path.resolve();

export default () => ({
  plugins: [react(), sassDts()],
  resolve: {
    
    alias: [{ find: '@', replacement: `${__dirname}/src` }]
  },
  
})