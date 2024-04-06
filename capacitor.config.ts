import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mytodolist.bengchet.app',
  appName: 'My Todo List',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
