import { defineConfig } from '@umijs/max'
import path from 'path'
import { theme } from '../../uikit/src/theme'

export default defineConfig({
  antd: {
    theme,
  },
  model: {},
  initialState: {},
  request: {},
  svgr: {
    icon: false,
    exportType: 'named',
    ref: true,
    svgo: false,
    titleProp: true,
  },
  npmClient: 'pnpm',
  define: {
    'process.env.BROADCASTER_CODE_ROOM': process.env.BROADCASTER_Code_ROOM,
    'process.env.COBROADCASTER_CODE_ROOM': process.env.COBROADCASTER_CODE_ROOM,
    'process.env.DATABASE_NAME': process.env.DATABASE_NAME,
  },
  alias: {
    '@/apps': path.resolve(__dirname, '../../../'),
  },
  vite: {
    optimizeDeps: {
      include: ['@powersync/web > js-logger'],
      exclude: ['@journeyapps/wa-sqlite', '@powersync/web', '@powersync/react'],
    },
    esbuild: {
      target: 'esnext',
      supported: {
        'top-level-await': true,
      },
    },
    build: {
      target: 'esnext',
    },
    worker: {
      format: 'es',
    },
  },
})
