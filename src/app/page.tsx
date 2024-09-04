import { SettingsTabs } from '@/components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Configurações</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">
              Informações pessoais
            </h2>
            <span className="text-sm text-zinc-500">
              Atualize suas foto e detalhes pessoais aqui.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="rounded-lg px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancelar
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
              form="settings"
            >
              Salvar
            </button>
          </div>
        </div>

        <form id="settings" className="mt-6 flex w-full flex-col"></form>
      </div>
    </>
  )
}
