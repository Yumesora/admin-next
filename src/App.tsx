import {
  darkTheme,
  dateZhCN,
  NConfigProvider,
  NDialogProvider,
  NMessageProvider,
  NNotificationProvider,
  useDialog,
  useMessage,
  useNotification,
  zhCN,
} from 'naive-ui'
import { RouteName } from 'router/name'
import { CategoryStore } from 'stores/category'
import { defineComponent, onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import {
  useInjector,
  useProvider,
  useProviders,
} from './hooks/use-deps-injection'
import { UIStore } from './stores/ui'
import { UserStore } from './stores/user'
const Root = defineComponent({
  name: 'Home',

  setup() {
    const { fetchUser } = useInjector(UserStore)
    const router = useRouter()
    onMounted(() => {
      const message = useMessage()
      const _error = message.error
      Object.assign(message, {
        error: (...rest: any[]) => {
          // @ts-ignore
          _error.apply(this, rest)
          throw rest[0]
        },
      })

      window.message = message
      window.notification = useNotification()
      window.dialog = useDialog()

      import('socket').then((mo) => {
        mo.socket.initIO()
      })

      fetchUser().then(() => {
        const toSetting = localStorage.getItem('to-setting')
        if (toSetting === 'true') {
          router.push({
            name: RouteName.Setting,
            params: {
              type: 'user',
            },
          })
          localStorage.removeItem('to-setting')
        }
      })
    })

    return () => {
      return <RouterView />
    }
  },
})

const App = defineComponent({
  setup() {
    useProviders(UIStore, UserStore, CategoryStore)
    const { isDark } = useProvider(UIStore)
    return () => (
      <NConfigProvider
        locale={zhCN}
        dateLocale={dateZhCN}
        theme={isDark.value ? darkTheme : null}
      >
        <NNotificationProvider>
          <NMessageProvider>
            <NDialogProvider>
              <Root />
            </NDialogProvider>
          </NMessageProvider>
        </NNotificationProvider>
      </NConfigProvider>
    )
  },
})

export default App
