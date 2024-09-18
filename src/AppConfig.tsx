import vkBridge, {
  parseURLSearchParamsForGetLaunchParams,
} from '@vkontakte/vk-bridge';
import { useAdaptivity, useInsets } from '@vkontakte/vk-bridge-react';
import { AdaptivityProvider, ConfigProvider, AppRoot } from '@vkontakte/vkui';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import '@vkontakte/vkui/dist/components.css';

import { transformVKBridgeAdaptivity } from './utils';
import { router } from './routes';
import { App } from './App';

import '@/theme.css';

export const AppConfig = () => {
  const vkBridgeInsets = useInsets() || undefined;
  const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
  const { vk_platform } = parseURLSearchParamsForGetLaunchParams(
    window.location.search
  );

  return (
    <ConfigProvider
      appearance={'light'}
      platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
      isWebView={vkBridge.isWebView()}
      hasCustomPanelHeaderAfter={true}
      tokensClassNames={{
        light: 'vkui--custom--light',
      }}
    >
      <AdaptivityProvider {...adaptivity}>
        <AppRoot mode='full' safeAreaInsets={vkBridgeInsets}>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
