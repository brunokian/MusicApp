import { useEffect, useState, useRef } from "react";

function MusicaCard(props) {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2; // Definir o volume como 20%
        }
    }, []);

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
        </div>
    )
}

export default MusicaCard;
