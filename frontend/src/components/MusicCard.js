import { useEffect, useState, useRef, useContext } from "react";
import Context from "../context/Context";

function MusicaCard(props) {

    const [favorite, setFavorite] = useState(false)
    const {favotireList, setFavoriteList} = useContext(Context)

    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2; // Definir o volume como 20%
        }
    }, []);

    const handleClickFavorite = () => {
        setFavorite(!favorite)
        if (favorite) {
            setFavoriteList(...favotireList, props.songInfo.previewUrl)
        }
    }

    return (
        <div>
            <h2>{props.songInfo.trackName}</h2>
            <audio
                key={props.songInfo.trackName}
                data-testid="audio-component"
                src={props.songInfo.previewUrl}
                ref={audioRef} // passamos a apontar o <audio> como referencia ao "audioRef"
                controls
            >
                Browser doesn't support audio the element<code>audio</code>.
            </audio>
            <button className='favorite-button' onClick={handleClickFavorite}>
                <span className={favorite ? 'heart-filled' : 'heart-not-filled'}></span>
            </button>
        </div>
    )
}

export default MusicaCard;
