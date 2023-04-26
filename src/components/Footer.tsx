import Image from 'next/image';

import Listening from './player/Listening';
import Player from './player/Player';
import PlayerControls from './player/PlayerControls';


export default function Footer() {
    return (
        <footer 
            className="
            bg-zinc-800 border-t 
            border-zinc-700
            px-6 py-4 flex items-center justify-between
            "
        >
            <Listening />

            <Player />

            <PlayerControls />
        </footer>
    );
}