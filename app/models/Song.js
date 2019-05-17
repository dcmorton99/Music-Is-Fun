export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    get Template() {
        //html goes here
        return `
<ul>
    <li>
        <img src="${this.albumArt}" alt="">
        <h2>${this.artist}</h2>
        <h5>${this.price}</h5>
        <audio controls>
            <source src="${this.preview}" type="audio/mp3">
        </audio>
    </li>
</ul>
`
    }
}