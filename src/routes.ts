import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  ARTICLE: 'article',
  USER: 'user',
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(
        DEFAULT_VIEW_PANELS.ARTICLE,
        `/${DEFAULT_VIEW_PANELS.ARTICLE}/:id`,
        [],
        ['id'] as const
      ),
      createPanel(DEFAULT_VIEW_PANELS.USER, `/${DEFAULT_VIEW_PANELS.USER}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
