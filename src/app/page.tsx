import { SettingsTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Input'
import { Mail } from 'lucide-react'

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

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid-cols-form grid gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Nome
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Vinicius" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Ribeiro" />
              </Input.Root>
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Endereço de Eamil
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="exemplo@exemplo"
              />
            </Input.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Sua foto
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Isso será exibido em seu perfil.
              </span>
            </label>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Cargo
            </label>

            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              País
            </label>
            <div></div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Fuso Horário
            </label>
            <div></div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Escreva uma breve introdução
              </span>
            </label>
            <div></div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Escreva uma breve introdução
              </span>
            </label>
            <div></div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Portfólio de projetos
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Compartilhe alguns dos seus trabalho.
              </span>
            </label>
            <div></div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              className="rounded-lg px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancelar
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
