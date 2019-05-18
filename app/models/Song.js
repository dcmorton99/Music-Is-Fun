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
<div class="col">
    <div class="card bg-secondary text-light p-2 m-3">
        <img src="${this.albumArt}">
        <div class="card-body">
            <h2>${this.artist}</h2>
            <h3>${this.title}</h3>
            <h5>$${this.price}</h5>
            <audio controls>
                <source src="${this.preview}" type="audio/mp3">
            </audio>
        </div>
    </div>
</div>
`
    }
}