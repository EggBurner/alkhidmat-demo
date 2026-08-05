'use client';
import type { Engine } from '@tsparticles/engine';

export const init = async (engine: Engine): Promise<void> => {
  const [{ loadSlim }, { loadThemesPlugin }] = await Promise.all([
    import('@tsparticles/slim'),
    import('@tsparticles/plugin-themes'),
  ]);
  await Promise.all([loadSlim(engine), loadThemesPlugin(engine)]);
};
