import { Next, Pause, Play, Prev, LoadingIcon } from '@/icons/PlayerIcons' // Suponiendo que tienes un icono de carga
import { useCurrentMusic } from '@/hooks/useCurrentMusic'
import { usePlayerStore } from '@/store/playerStore'

interface PlayerControlButtonBarProps {
  isLoading: boolean;
}

export function PlayerControlButtonBar({ isLoading }: PlayerControlButtonBarProps) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore(state => state)
  const { getNextSong, getPreviousSong } = useCurrentMusic(currentMusic)

  const onPlayPause = () => {
    if (currentMusic.song === null || isLoading) return; // Evita acción mientras carga
    setIsPlaying(!isPlaying)
  }

  const onNextSong = () => {
    if (isLoading) return; // Evita cambiar canción mientras carga
    const nextSong = getNextSong()
    if (nextSong) {
      setCurrentMusic({ ...currentMusic, song: nextSong })
    }
  }

  const onPrevSong = () => {
    if (isLoading) return; // Evita cambiar canción mientras carga
    const prevSong = getPreviousSong()
    if (prevSong) {
      setCurrentMusic({ ...currentMusic, song: prevSong })
    }
  }

  return (
    <div className='flex justify-center flex-row flex-nowrap items-center gap-4'>
      <button
        className='opacity-60 hover:scale-105 hover:opacity-100'
        onClick={onPrevSong}
        title='Previous'
        disabled={isLoading}
      >
        <Prev />
      </button>
      <button
        className='bg-white text-black rounded-full p-2 hover:scale-110'
        onClick={onPlayPause}
        disabled={isLoading}
        title={isLoading ? 'Loading' : isPlaying ? 'Pause' : 'Play'}
      >
        {isLoading ? <LoadingIcon /> : isPlaying ? <Pause className={''} /> : <Play className={''} />}
      </button>
      <button
        className='opacity-60 hover:scale-105 hover:opacity-100'
        onClick={onNextSong}
        title='Next'
        disabled={isLoading}
      >
        <Next />
      </button>
    </div>
  );
}
