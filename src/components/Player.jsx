import { PlayerControlButtonBar } from '@/components/PlayerControlButtonBar'
import { PlayerCurrentSong } from '@/components/PlayerCurrentSong'
import { PlayerSoundControl } from '@/components/PlayerSoundControl'
import { PlayerVolumeControl } from '@/components/PlayerVolumeControl'
import { useCurrentMusic } from '@/hooks/useCurrentMusic'
import { useEffect, useRef, useState } from 'react'
import { usePlayerStore } from '@/store/playerStore'

export function Player() {

  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const downloadedSongs = useRef({}); // Objeto para almacenar varias canciones descargadas

  const { currentMusic, isPlaying, volume, setCurrentMusic } = usePlayerStore(
    state => state
  )
  const audioRef = useRef()
  const { getNextSong } = useCurrentMusic(currentMusic)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Llama a la función al cargar la página y al cambiar el tamaño
    handleResize();
    window.addEventListener('resize', handleResize);

    // Limpia el evento de redimensionamiento al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    if (!currentMusic.song) {
      return
    }
    isPlaying ? play() : audioRef.current.pause()
  }, [isPlaying])

  useEffect(() => {
    audioRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    const { song } = currentMusic;
    
    if (song) {
      const songId = song.id;
      if (downloadedSongs.current[songId]) {
        audioRef.current.src = downloadedSongs.current[songId];
        play();
      } else {
        setIsLoading(true);
        fetch(song.url)
          .then(response => response.blob())
          .then(blob => {
            const url = URL.createObjectURL(blob);
            downloadedSongs.current[songId] = url;
            audioRef.current.src = url;
            play();
            setIsLoading(false)
          })
          .catch(error => console.error("Error al descargar el archivo mp3:", error))
          .finally();  // Set loading to false after fetching
      }
    }
  }, [currentMusic]);  
  
  const play = () => {
    audioRef.current.play().catch(e => console.log('error playing: ', e))
  }

  function onNextSong() {
    const nextSong = getNextSong()
    if (nextSong) {
      setCurrentMusic({ ...currentMusic, song: nextSong })
    }
  }

  return isMobile ? (
    <div className='flex flex-col'>      
      <PlayerControlButtonBar isLoading={isLoading} />
      <PlayerSoundControl audio={audioRef} />
      <audio ref={audioRef} onEnded={onNextSong} />
    </div>
  ) : (
    <div className='flex flex-row justify-between w-full px-1 py-3 z-50'>
      <div className='flex-[2]'>
        <PlayerCurrentSong {...currentMusic.song} />
      </div>

      <div className='grid place-content-center gap-4 flex-[1]'>
        <div className='flex justify-center flex-col items-center'>
          <PlayerControlButtonBar isLoading={isLoading} />
          <PlayerSoundControl audio={audioRef} />
          <audio ref={audioRef} onEnded={onNextSong} />
        </div>
      </div>

      <div className='flex justify-end items-center flex-[2]'>
        <PlayerVolumeControl />
      </div>
    </div>
  )
}
