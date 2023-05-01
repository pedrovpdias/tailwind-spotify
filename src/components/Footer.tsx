import Listening from './player/Listening';
import Player from './player/Player';
import PlayerControls from './player/PlayerControls';


export default function Footer() {
    return (
        <footer 
            className="
            bg-neutral-900 border-t 
            border-neutral-700
            px-6 py-4 flex items-center justify-between
            fixed bottom-0 left-0 right-0 h-20
            "
        >
            <Listening />

            <Player />

            <PlayerControls />
        </footer>
    );
}