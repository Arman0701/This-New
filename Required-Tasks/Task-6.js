'use strict'

function Song(name, author){
    this.name = name;
    this.author = author;
    this.isPlaying = false;
    this.stop = true;
}

function Playlist(){
    this.list = [];
    this.current = 0;

    this.add = function(...song){
        this.list.push(...song);
    }
    this.play = function(){
        this.list[this.current].isPlaying = true;
        this.list[this.current].stop = false;
        console.log(`${this.list[this.current].name} is playing.`);
    }
    this.stop = function(){
        this.list[this.current].isPlaying = false;
        this.list[this.current].stop = true;
        console.log(`${this.list[this.current].name} is stopped.`);
    }
    this.next = function(){
        this.stop();
        this.current += 1;
        console.log(this.current);
        if (this.current > this.list.length-1) this.current = 0;
        this.play();
    }
    this.prev = function(){
        this.stop();
        this.current -= 1;
        if (this.current < 0) this.current = this.list.length-1;
        this.play();
    }
}

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
const inDaClub = new Song("In Da Club", "50Cent");
const dancin = new Song("Dancin", "Aaron Smith");
playlist.add(heyJude, jaded, inDaClub, dancin);
console.log(playlist.list);

playlist.play();
playlist.next(); 
playlist.next(); 
playlist.stop();
playlist.play(); 