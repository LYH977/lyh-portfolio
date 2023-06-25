import { Color } from 'three/src/math/Color.js'

const isProduction = process.env.NODE_ENV === 'production'

export const FLOOR_WIDTH = 8
export const FLOOR_HEIGHT = 8

export const Y_OFFSET = -1

export const FLOOR_COLOR = new Color(0x021036)
export const NEON_COLOR = new Color(0xf3ffff)

const REMOTE_MODEL_PATH = {
  PRIMARY:
    'https://firebasestorage.googleapis.com/v0/b/lyh-portfolio.appspot.com/o/glb%2Fprimary.glb?alt=media&token=ec1c9626-f443-453d-b7bb-6af4028ff8be',
  AOT: 'https://firebasestorage.googleapis.com/v0/b/lyh-portfolio.appspot.com/o/glb%2Faot.glb?alt=media&token=f26e0daf-17d0-4df6-9bc4-7e47e76ee8ae',
  NARUTO:
    'https://firebasestorage.googleapis.com/v0/b/lyh-portfolio.appspot.com/o/glb%2Fnaruto.glb?alt=media&token=fa33e072-8d10-4c17-b758-d5441bd3f75f',
  MALAYSIA:
    'https://firebasestorage.googleapis.com/v0/b/lyh-portfolio.appspot.com/o/glb%2Fmalaysia.glb?alt=media&token=6c3f0a5c-341e-4929-8032-611338cc3138',
  SYDNEY:
    'https://firebasestorage.googleapis.com/v0/b/lyh-portfolio.appspot.com/o/glb%2Fsydney.glb?alt=media&token=558c7f08-6a06-4e60-9239-b55bd00cc82f',
}
const LOCAL_MODEL_PATH = {
  PRIMARY: '/glb/primary.glb',
  AOT: '/glb/aot.glb',
  NARUTO: '/glb/naruto.glb',
  MALAYSIA: '/glb/malaysia.glb',
  SYDNEY: '/glb/sydney.glb',
}

export const MODEL_PATH = isProduction ? REMOTE_MODEL_PATH : LOCAL_MODEL_PATH

export const DEFAUL_AZIMUTHAL_ANGLE = -0.02729855431768572

export const CEILING_PATTERNS = {
  '0': [3, 2, 2, 4, 2, 2, 3, 4, 2, 4, 2, 2, 3, 4, 2, 3, 4, 3, 3, 4],
  '-3.15': [4, 4, 4, 4, 2, 4, 3, 4, 2, 2, 3, 3, 3, 3, 3, 3, 4, 2, 2, 2],
  '-2.1': [4, 3, 4, 2, 3, 3, 3, 4, 4, 2, 4, 2, 3, 3, 2, 4, 2, 2, 4, 3],
  '-1.05': [4, 2, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 2, 3, 2, 2, 4, 2, 4, 3],
  '1.05': [3, 4, 2, 3, 4, 2, 4, 4, 3, 4, 2, 4, 2, 2, 3, 3, 4, 4, 4, 3],
  '2.1': [2, 3, 2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 2, 4, 2, 3, 2, 2, 2, 2],
  '3.15': [4, 3, 2, 3, 2, 4, 4, 4, 4, 3, 2, 3, 4, 2, 2, 4, 4, 4, 4, 3],
}

export const CEILING_GRADIENT = [
  { scale: [1, 0.2, 1], position: [0, 0, -4.7495], rotate: false },
  { scale: [1, 0.2, 1], position: [0, 0, -5.2505], rotate: false },
  { scale: [0.5, 0.2, 1], position: [-0.5001, 0, -5], rotate: true },
  { scale: [0.5, 0.2, 1], position: [0.5001, 0, -5], rotate: true },
  { scale: [1, 0.2, 1], position: [0, 0, -3.2495], rotate: false },
  { scale: [1, 0.2, 1], position: [0, 0, -3.7505], rotate: false },
  { scale: [0.5, 0.2, 1], position: [-0.5001, 0, -3.5], rotate: true },
  { scale: [0.5, 0.2, 1], position: [0.5001, 0, -3.5], rotate: true },
  { scale: [1, 0.4, 1], position: [0, 0, -2.2495], rotate: false },
  { scale: [1, 0.4, 1], position: [0, 0, -2.7505], rotate: false },
  { scale: [0.5, 0.4, 1], position: [-0.5001, 0, -2.5], rotate: true },
  { scale: [0.5, 0.4, 1], position: [0.5001, 0, -2.5], rotate: true },
  { scale: [1, 0.2, 1], position: [0, 0, -0.7495], rotate: false },
  { scale: [1, 0.2, 1], position: [0, 0, -1.2505], rotate: false },
  { scale: [0.5, 0.2, 1], position: [-0.5001, 0, -1], rotate: true },
  { scale: [0.5, 0.2, 1], position: [0.5001, 0, -1], rotate: true },
  { scale: [1, 0.2, 1], position: [0, 0, -0.2495], rotate: false },
  { scale: [1, 0.2, 1], position: [0, 0, -0.7505], rotate: false },
  { scale: [0.5, 0.2, 1], position: [-0.5001, 0, -0.5], rotate: true },
  { scale: [0.5, 0.2, 1], position: [0.5001, 0, -0.5], rotate: true },
  { scale: [1, 0.4, 1], position: [0, 0, 0.7505], rotate: false },
  { scale: [1, 0.4, 1], position: [0, 0, 0.2495], rotate: false },
  { scale: [0.5, 0.4, 1], position: [-0.5001, 0, 0.5], rotate: true },
  { scale: [0.5, 0.4, 1], position: [0.5001, 0, 0.5], rotate: true },
  { scale: [1, 0.2, 1], position: [0, 0, 1.2505], rotate: false },
  { scale: [1, 0.2, 1], position: [0, 0, 0.7495], rotate: false },
  { scale: [0.5, 0.2, 1], position: [-0.5001, 0, 1], rotate: true },
  { scale: [0.5, 0.2, 1], position: [0.5001, 0, 1], rotate: true },
  { scale: [1, 0.4, 1], position: [0, 0, 2.2505], rotate: false },
  { scale: [1, 0.4, 1], position: [0, 0, 1.7495], rotate: false },
  { scale: [0.5, 0.4, 1], position: [-0.5001, 0, 2], rotate: true },
  { scale: [0.5, 0.4, 1], position: [0.5001, 0, 2], rotate: true },
  { scale: [1, 0.4, 1], position: [-3.15, 0, -4.2495], rotate: false },
  { scale: [1, 0.4, 1], position: [-3.15, 0, -4.7505], rotate: false },
  { scale: [0.5, 0.4, 1], position: [-3.6501, 0, -4.5], rotate: true },
  {
    scale: [0.5, 0.4, 1],
    position: [-2.6498999999999997, 0, -4.5],
    rotate: true,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-3.15, 0, -2.7495],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-3.15, 0, -3.2505],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-3.6501, 0, -3],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-2.6498999999999997, 0, -3],
    rotate: true,
  },
  { scale: [1, 0.4, 1], position: [-3.15, 0, -2.2495], rotate: false },
  { scale: [1, 0.4, 1], position: [-3.15, 0, -2.7505], rotate: false },
  { scale: [0.5, 0.4, 1], position: [-3.6501, 0, -2.5], rotate: true },
  {
    scale: [0.5, 0.4, 1],
    position: [-2.6498999999999997, 0, -2.5],
    rotate: true,
  },
  { scale: [1, 0.2, 1], position: [-3.15, 0, -1.2495], rotate: false },
  { scale: [1, 0.2, 1], position: [-3.15, 0, -1.7505], rotate: false },
  { scale: [0.5, 0.2, 1], position: [-3.6501, 0, -1.5], rotate: true },
  {
    scale: [0.5, 0.2, 1],
    position: [-2.6498999999999997, 0, -1.5],
    rotate: true,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-3.15, 0, -0.2495],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-3.15, 0, -0.7505],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-3.6501, 0, -0.5],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-2.6498999999999997, 0, -0.5],
    rotate: true,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-3.15, 0, 0.2505],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-3.15, 0, -0.2505],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-3.6501, 0, 0],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-2.6498999999999997, 0, 0],
    rotate: true,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-3.15, 0, 0.7505],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-3.15, 0, 0.2495],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-3.6501, 0, 0.5],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-2.6498999999999997, 0, 0.5],
    rotate: true,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-3.15, 0, 1.2505],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-3.15, 0, 0.7495],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-3.6501, 0, 1],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-2.6498999999999997, 0, 1],
    rotate: true,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-3.15, 0, 1.7505],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-3.15, 0, 1.2495],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-3.6501, 0, 1.5],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-2.6498999999999997, 0, 1.5],
    rotate: true,
  },
  { scale: [1, 0.4, 1], position: [-3.15, 0, 2.2505], rotate: false },
  { scale: [1, 0.4, 1], position: [-3.15, 0, 1.7495], rotate: false },
  { scale: [0.5, 0.4, 1], position: [-3.6501, 0, 2], rotate: true },
  { scale: [0.5, 0.4, 1], position: [-2.6498999999999997, 0, 2], rotate: true },
  { scale: [1, 0.2, 1], position: [-3.15, 0, 2.7505], rotate: false },
  { scale: [1, 0.2, 1], position: [-3.15, 0, 2.2495], rotate: false },
  { scale: [0.5, 0.2, 1], position: [-3.6501, 0, 2.5], rotate: true },
  {
    scale: [0.5, 0.2, 1],
    position: [-2.6498999999999997, 0, 2.5],
    rotate: true,
  },
  { scale: [1, 0.4, 1], position: [-2.1, 0, -5.7495], rotate: false },
  { scale: [1, 0.4, 1], position: [-2.1, 0, -6.2505], rotate: false },
  {
    scale: [0.5, 0.4, 1],
    position: [-2.6001000000000003, 0, -6],
    rotate: true,
  },
  { scale: [0.5, 0.4, 1], position: [-1.5999, 0, -6], rotate: true },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-2.1, 0, -5.2495],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-2.1, 0, -5.7505],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-2.6001000000000003, 0, -5.5],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-1.5999, 0, -5.5],
    rotate: true,
  },
  { scale: [1, 0.2, 1], position: [-2.1, 0, -4.2495], rotate: false },
  { scale: [1, 0.2, 1], position: [-2.1, 0, -4.7505], rotate: false },
  {
    scale: [0.5, 0.2, 1],
    position: [-2.6001000000000003, 0, -4.5],
    rotate: true,
  },
  { scale: [0.5, 0.2, 1], position: [-1.5999, 0, -4.5], rotate: true },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-2.1, 0, -3.7495],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-2.1, 0, -4.2505],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-2.6001000000000003, 0, -4],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-1.5999, 0, -4],
    rotate: true,
  },
  { scale: [1, 0.4, 1], position: [-2.1, 0, -1.7495], rotate: false },
  { scale: [1, 0.4, 1], position: [-2.1, 0, -2.2505], rotate: false },
  {
    scale: [0.5, 0.4, 1],
    position: [-2.6001000000000003, 0, -2],
    rotate: true,
  },
  { scale: [0.5, 0.4, 1], position: [-1.5999, 0, -2], rotate: true },
  { scale: [1, 0.2, 1], position: [-2.1, 0, 2.2505], rotate: false },
  { scale: [1, 0.2, 1], position: [-2.1, 0, 1.7495], rotate: false },
  { scale: [0.5, 0.2, 1], position: [-2.6001000000000003, 0, 2], rotate: true },
  { scale: [0.5, 0.2, 1], position: [-1.5999, 0, 2], rotate: true },
  { scale: [1, 0.2, 1], position: [-2.1, 0, 2.7505], rotate: false },
  { scale: [1, 0.2, 1], position: [-2.1, 0, 2.2495], rotate: false },
  {
    scale: [0.5, 0.2, 1],
    position: [-2.6001000000000003, 0, 2.5],
    rotate: true,
  },
  { scale: [0.5, 0.2, 1], position: [-1.5999, 0, 2.5], rotate: true },
  { scale: [1, 0.4, 1], position: [-2.1, 0, 3.2505], rotate: false },
  { scale: [1, 0.4, 1], position: [-2.1, 0, 2.7495], rotate: false },
  { scale: [0.5, 0.4, 1], position: [-2.6001000000000003, 0, 3], rotate: true },
  { scale: [0.5, 0.4, 1], position: [-1.5999, 0, 3], rotate: true },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-1.05, 0, -4.7495],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-1.05, 0, -5.2505],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-1.5501, 0, -5],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-0.5499, 0, -5],
    rotate: true,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-1.05, 0, -3.7495],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-1.05, 0, -4.2505],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-1.5501, 0, -4],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-0.5499, 0, -4],
    rotate: true,
  },
  { scale: [1, 0.2, 1], position: [-1.05, 0, -2.2495], rotate: false },
  { scale: [1, 0.2, 1], position: [-1.05, 0, -2.7505], rotate: false },
  { scale: [0.5, 0.2, 1], position: [-1.5501, 0, -2.5], rotate: true },
  { scale: [0.5, 0.2, 1], position: [-0.5499, 0, -2.5], rotate: true },
  { scale: [1, 0.2, 1], position: [-1.05, 0, -1.7495], rotate: false },
  { scale: [1, 0.2, 1], position: [-1.05, 0, -2.2505], rotate: false },
  { scale: [0.5, 0.2, 1], position: [-1.5501, 0, -2], rotate: true },
  { scale: [0.5, 0.2, 1], position: [-0.5499, 0, -2], rotate: true },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-1.05, 0, -1.2495],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-1.05, 0, -1.7505],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-1.5501, 0, -1.5],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-0.5499, 0, -1.5],
    rotate: true,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-1.05, 0, -0.2495],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-1.05, 0, -0.7505],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-1.5501, 0, -0.5],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-0.5499, 0, -0.5],
    rotate: true,
  },
  { scale: [1, 0.4, 1], position: [-1.05, 0, 2.2505], rotate: false },
  { scale: [1, 0.4, 1], position: [-1.05, 0, 1.7495], rotate: false },
  { scale: [0.5, 0.4, 1], position: [-1.5501, 0, 2], rotate: true },
  { scale: [0.5, 0.4, 1], position: [-0.5499, 0, 2], rotate: true },
  { scale: [1, 0.2, 1], position: [-1.05, 0, 2.7505], rotate: false },
  { scale: [1, 0.2, 1], position: [-1.05, 0, 2.2495], rotate: false },
  { scale: [0.5, 0.2, 1], position: [-1.5501, 0, 2.5], rotate: true },
  { scale: [0.5, 0.2, 1], position: [-0.5499, 0, 2.5], rotate: true },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-1.05, 0, 3.7505],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [-1.05, 0, 3.2495],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-1.5501, 0, 3.5],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [-0.5499, 0, 3.5],
    rotate: true,
  },
  { scale: [1, 0.4, 1], position: [1.05, 0, -5.2495], rotate: false },
  { scale: [1, 0.4, 1], position: [1.05, 0, -5.7505], rotate: false },
  { scale: [0.5, 0.4, 1], position: [0.5499, 0, -5.5], rotate: true },
  { scale: [0.5, 0.4, 1], position: [1.5501, 0, -5.5], rotate: true },
  { scale: [1, 0.4, 1], position: [1.05, 0, -3.7495], rotate: false },
  { scale: [1, 0.4, 1], position: [1.05, 0, -4.2505], rotate: false },
  { scale: [0.5, 0.4, 1], position: [0.5499, 0, -4], rotate: true },
  { scale: [0.5, 0.4, 1], position: [1.5501, 0, -4], rotate: true },
  { scale: [1, 0.2, 1], position: [1.05, 0, -3.2495], rotate: false },
  { scale: [1, 0.2, 1], position: [1.05, 0, -3.7505], rotate: false },
  { scale: [0.5, 0.2, 1], position: [0.5499, 0, -3.5], rotate: true },
  { scale: [0.5, 0.2, 1], position: [1.5501, 0, -3.5], rotate: true },
  { scale: [1, 0.4, 1], position: [1.05, 0, -2.7495], rotate: false },
  { scale: [1, 0.4, 1], position: [1.05, 0, -3.2505], rotate: false },
  { scale: [0.5, 0.4, 1], position: [0.5499, 0, -3], rotate: true },
  { scale: [0.5, 0.4, 1], position: [1.5501, 0, -3], rotate: true },
  { scale: [1, 0.2, 1], position: [1.05, 0, 0.2505], rotate: false },
  { scale: [1, 0.2, 1], position: [1.05, 0, -0.2505], rotate: false },
  { scale: [0.5, 0.2, 1], position: [0.5499, 0, 0], rotate: true },
  { scale: [0.5, 0.2, 1], position: [1.5501, 0, 0], rotate: true },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [1.05, 0, 1.2505],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [1.05, 0, 0.7495],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [0.5499, 0, 1],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [1.5501, 0, 1],
    rotate: true,
  },
  { scale: [1, 0.4, 1], position: [1.05, 0, 2.2505], rotate: false },
  { scale: [1, 0.4, 1], position: [1.05, 0, 1.7495], rotate: false },
  { scale: [0.5, 0.4, 1], position: [0.5499, 0, 2], rotate: true },
  { scale: [0.5, 0.4, 1], position: [1.5501, 0, 2], rotate: true },
  { scale: [1, 0.4, 1], position: [1.05, 0, 3.2505], rotate: false },
  { scale: [1, 0.4, 1], position: [1.05, 0, 2.7495], rotate: false },
  { scale: [0.5, 0.4, 1], position: [0.5499, 0, 3], rotate: true },
  { scale: [0.5, 0.4, 1], position: [1.5501, 0, 3], rotate: true },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [1.05, 0, 3.7505],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [1.05, 0, 3.2495],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [0.5499, 0, 3.5],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [1.5501, 0, 3.5],
    rotate: true,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [2.1, 0, -5.2495],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [2.1, 0, -5.7505],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [1.5999, 0, -5.5],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [2.6001000000000003, 0, -5.5],
    rotate: true,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [2.1, 0, -4.2495],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [2.1, 0, -4.7505],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [1.5999, 0, -4.5],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [2.6001000000000003, 0, -4.5],
    rotate: true,
  },
  { scale: [1, 0.2, 1], position: [2.1, 0, -1.7495], rotate: false },
  { scale: [1, 0.2, 1], position: [2.1, 0, -2.2505], rotate: false },
  { scale: [0.5, 0.2, 1], position: [1.5999, 0, -2], rotate: true },
  { scale: [0.5, 0.2, 1], position: [2.6001000000000003, 0, -2], rotate: true },
  { scale: [1, 0.2, 1], position: [2.1, 0, -1.2495], rotate: false },
  { scale: [1, 0.2, 1], position: [2.1, 0, -1.7505], rotate: false },
  { scale: [0.5, 0.2, 1], position: [1.5999, 0, -1.5], rotate: true },
  {
    scale: [0.5, 0.2, 1],
    position: [2.6001000000000003, 0, -1.5],
    rotate: true,
  },
  { scale: [1, 0.2, 1], position: [2.1, 0, 0.2505], rotate: false },
  { scale: [1, 0.2, 1], position: [2.1, 0, -0.2505], rotate: false },
  { scale: [0.5, 0.2, 1], position: [1.5999, 0, 0], rotate: true },
  { scale: [0.5, 0.2, 1], position: [2.6001000000000003, 0, 0], rotate: true },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [2.1, 0, 1.7505],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [2.1, 0, 1.2495],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [1.5999, 0, 1.5],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [2.6001000000000003, 0, 1.5],
    rotate: true,
  },
  { scale: [1, 0.2, 1], position: [2.1, 0, 2.7505], rotate: false },
  { scale: [1, 0.2, 1], position: [2.1, 0, 2.2495], rotate: false },
  { scale: [0.5, 0.2, 1], position: [1.5999, 0, 2.5], rotate: true },
  {
    scale: [0.5, 0.2, 1],
    position: [2.6001000000000003, 0, 2.5],
    rotate: true,
  },
  { scale: [1, 0.2, 1], position: [2.1, 0, 3.7505], rotate: false },
  { scale: [1, 0.2, 1], position: [2.1, 0, 3.2495], rotate: false },
  { scale: [0.5, 0.2, 1], position: [1.5999, 0, 3.5], rotate: true },
  {
    scale: [0.5, 0.2, 1],
    position: [2.6001000000000003, 0, 3.5],
    rotate: true,
  },
  { scale: [1, 0.4, 1], position: [3.15, 0, -5.7495], rotate: false },
  { scale: [1, 0.4, 1], position: [3.15, 0, -6.2505], rotate: false },
  { scale: [0.5, 0.4, 1], position: [2.6498999999999997, 0, -6], rotate: true },
  { scale: [0.5, 0.4, 1], position: [3.6501, 0, -6], rotate: true },
  { scale: [1, 0.4, 1], position: [3.15, 0, -3.2495], rotate: false },
  { scale: [1, 0.4, 1], position: [3.15, 0, -3.7505], rotate: false },
  {
    scale: [0.5, 0.4, 1],
    position: [2.6498999999999997, 0, -3.5],
    rotate: true,
  },
  { scale: [0.5, 0.4, 1], position: [3.6501, 0, -3.5], rotate: true },
  { scale: [1, 0.4, 1], position: [3.15, 0, -2.2495], rotate: false },
  { scale: [1, 0.4, 1], position: [3.15, 0, -2.7505], rotate: false },
  {
    scale: [0.5, 0.4, 1],
    position: [2.6498999999999997, 0, -2.5],
    rotate: true,
  },
  { scale: [0.5, 0.4, 1], position: [3.6501, 0, -2.5], rotate: true },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [3.15, 0, -0.2495],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [3.15, 0, -0.7505],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [2.6498999999999997, 0, -0.5],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [3.6501, 0, -0.5],
    rotate: true,
  },
  { scale: [1, 0.4, 1], position: [3.15, 0, 0.2505], rotate: false },
  { scale: [1, 0.4, 1], position: [3.15, 0, -0.2505], rotate: false },
  { scale: [0.5, 0.4, 1], position: [2.6498999999999997, 0, 0], rotate: true },
  { scale: [0.5, 0.4, 1], position: [3.6501, 0, 0], rotate: true },
  { scale: [1, 0.2, 1], position: [3.15, 0, 0.7505], rotate: false },
  { scale: [1, 0.2, 1], position: [3.15, 0, 0.2495], rotate: false },
  {
    scale: [0.5, 0.2, 1],
    position: [2.6498999999999997, 0, 0.5],
    rotate: true,
  },
  { scale: [0.5, 0.2, 1], position: [3.6501, 0, 0.5], rotate: true },
  { scale: [1, 0.2, 1], position: [3.15, 0, 1.2505], rotate: false },
  { scale: [1, 0.2, 1], position: [3.15, 0, 0.7495], rotate: false },
  { scale: [0.5, 0.2, 1], position: [2.6498999999999997, 0, 1], rotate: true },
  { scale: [0.5, 0.2, 1], position: [3.6501, 0, 1], rotate: true },
  { scale: [1, 0.4, 1], position: [3.15, 0, 1.7505], rotate: false },
  { scale: [1, 0.4, 1], position: [3.15, 0, 1.2495], rotate: false },
  {
    scale: [0.5, 0.4, 1],
    position: [2.6498999999999997, 0, 1.5],
    rotate: true,
  },
  { scale: [0.5, 0.4, 1], position: [3.6501, 0, 1.5], rotate: true },
  { scale: [1, 0.4, 1], position: [3.15, 0, 3.2505], rotate: false },
  { scale: [1, 0.4, 1], position: [3.15, 0, 2.7495], rotate: false },
  { scale: [0.5, 0.4, 1], position: [2.6498999999999997, 0, 3], rotate: true },
  { scale: [0.5, 0.4, 1], position: [3.6501, 0, 3], rotate: true },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [3.15, 0, 3.7505],
    rotate: false,
  },
  {
    scale: [1, 0.30000000000000004, 1],
    position: [3.15, 0, 3.2495],
    rotate: false,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [2.6498999999999997, 0, 3.5],
    rotate: true,
  },
  {
    scale: [0.5, 0.30000000000000004, 1],
    position: [3.6501, 0, 3.5],
    rotate: true,
  },
]
