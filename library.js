class Library {
    constructor(name, creator){
        this.name = name
        this.creator = creator
        this.playlists = [];
    }

    addPlaylist(playlist){
        this.playlists.push(playlist)
    }
}

class Playlist {
    constructor(name){
        this.name = name
        this.tracks = [];
    }

    addTrack(track){
        this.tracks.push(track)
    }

    overallRating(){
        let totalRating = 0;
        this.tracks.forEach((track) => {
            totalRating+=track.rating
        })
        const totalTracks = this.tracks.length
        const average = totalRating/totalTracks;
        return `Average rating: ${average}`
    }

    totalDuration(){
        let totalDuration = 0; 
        this.tracks.forEach((track) => {
            totalDuration += track.length
        })
        return `Total Duration: ${totalDuration} seconds`
    }

}

class Track {
    
    constructor(name, rating, length) {
        this.name= name,
        this.rating= rating,
        this.length= length
    }
}



