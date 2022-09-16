import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';
interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center mt-20 pb-10">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {
          games.map(game => (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              ads={game._count.ads}
            />
          ))
        }
      </div>

      <Dialog.Root>
        <CreateAdModal />
        <CreateAdBanner />
      </Dialog.Root>
    </div>
  )
}

export default App
