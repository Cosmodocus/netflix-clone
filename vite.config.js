import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import envCompatible from 'vite-plugin-env-compatible';


// dotenv.config({ path: `.env.${process.env.TMDB_API_KEY}` });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    envCompatible(),
  ],
  // to test if file is development or production
  // build: {
  //   minify: mode === 'production',
  // }
});
