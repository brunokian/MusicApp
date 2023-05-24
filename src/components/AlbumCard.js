import { Link } from "react-router-dom/cjs/react-router-dom.min";

function AlbumCard(props) {
    // const { albumImage, albumName, artistName, collectionId } = this.props
    return (
        <Link
            to={`/album/${props.albumId}`}
        >
            <div>
                <img src={ props.albumImage } alt={ props.artistName + props.albumName }/>
                <p>{ props.albumName }</p>
                <p>{ props.artistName }</p>
            </div>
        </Link>
    )
}

export default AlbumCard;
