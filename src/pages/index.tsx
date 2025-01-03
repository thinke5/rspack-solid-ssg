import { useNavigatePro } from '@fsr/router'
import { createSignal, onMount, Show } from 'solid-js'
import { isRDM } from '~/config'

/** demo页面 */
export default function Demo() {
  const [ok, setOk] = createSignal(false)
  const navp = useNavigatePro()
  onMount(() => {
    setOk(true)
  })

  return (
    <div class="min-h-100vh f-c/s flex-col bg-dark p-24px text-light">
      <h1 class="m-0 text-2xl">RSPACK + Solid + SSG</h1>
      <Show
        when={ok()}
        fallback={<p class="text-sm text-orange">基础环境准备中...长时间未完成，则环境有问题</p>}
      >
        <p class="text-sm text-green">基础环境准备完毕，可点击下方按钮前往查看示例</p>
        <button class="b-none bg-blue px-20px py-10px" onClick={() => navp('/demo/')}>
          查看示例
        </button>

      </Show>

    </div>
  )
}
