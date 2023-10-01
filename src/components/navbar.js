import IconMusicalNotes from "../assets/music"
import IconHeart from "../assets/heart"
import IconMusicCircle from "../assets/logo"
import IconSearchCircleSharp from "../assets/search"


export function Navbar() {

    return (
        <div className="navbar"> 
        <p className="logo">TTIFY
            <IconMusicCircle />L
        </p>
           <li>
            <a className="nav-link" href="/">
         <IconMusicalNotes />
         Music
           </a>
            <a className="nav-link" href="/favourites">
                <IconHeart />
                Favourites
                </a>
           </li>
        </div>
    )
}