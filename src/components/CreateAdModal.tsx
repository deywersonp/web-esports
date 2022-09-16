import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';

import { Input } from '../components/Form/input';

export function CreateAdModal() {
  return (

    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>

        <form className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="game"
              className="font-semibold">
              Qual o game?
            </label>
            <Input
              id="game"
              placeholder="Selecione o game que deseja jogar"
              type="text"
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="font-semibold"
              htmlFor="name"
            >
              Seu nome (ou nickname)
            </label>
            <Input
              id="name"
              placeholder="Como te chamam dentro do game?"
              type="text"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                className="font-semibold"
                htmlFor="yearsPlaying"
              >
                Joga há quantos anos?
              </label>
              <Input
                id="yearsPlaying"
                placeholder="Tudo bem ser ZERO"
                type="number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="font-semibold"
                htmlFor="discord"
              >
                Qual seu discord?
              </label>
              <Input
                id="discord"
                placeholder="Usuario#0000"
                type="text"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label
                className="font-semibold"
                htmlFor="weekDays"
              >
                Quando costuma jogar?
              </label>

              <div className="grid grid-cols-4 gap-2">
                <button
                  title="Domingo"
                  type="button"
                  className="w-8 h-8 rounded bg-zinc-900"
                >
                  D
                </button>
                <button
                  title="Segunda"
                  type="button"
                  className="w-8 h-8 rounded bg-zinc-900"
                >
                  S
                </button>
                <button
                  title="Terça"
                  type="button"
                  className="w-8 h-8 rounded bg-zinc-900"
                >
                  T
                </button>
                <button
                  title="Quarta"
                  type="button"
                  className="w-8 h-8 rounded bg-zinc-900"
                >
                  Q
                </button>
                <button
                  title="Quinta"
                  type="button"
                  className="w-8 h-8 rounded bg-zinc-900"
                >
                  Q
                </button>
                <button
                  title="Sexta"
                  type="button"
                  className="w-8 h-8 rounded bg-zinc-900"
                >
                  S
                </button>
                <button
                  title="Sábado"
                  type="button"
                  className="w-8 h-8 rounded bg-zinc-900"
                >
                  S
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label
                className="font-semibold"
                htmlFor="hourStart"
              >
                Qual horário do dia
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Input type="time" id="hourStart" placeholder="De" />
                <Input type="time" id="hourEnd" placeholder="Até" />
              </div>
            </div>
          </div>

          <div className="mt-2 flex gap-2 text-sm ">
            <Input type="checkbox" />
            Costumo me conectar ao chat de voz
          </div>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
            >
              Cancelar
            </Dialog.Close>
            <button
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3  hover:bg-violet-600"
              type="submit"
            >
              <GameController className="w-6 h-6" />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
};