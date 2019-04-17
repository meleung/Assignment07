/*eslint-env browser*/

var Jukebox = function () {
    "use strict";
    var albums = [], self;
    
    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        playAlbum: function (label) {
            albums.find(function (album) {
                return album.getLabel() === label;
            }).play();
        },
        favoriteAlbum: function () {
            var max = -1, fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};
var jukebox = new Jukebox();

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            this.played += 1;
        },
        getLabel: function () {
            return artist + " : " + title;
        },
        display: function () {
            return this.getLabel() + ". The album has been played " + this.played + " time" + (this.played === 1 ? "." : "s.");
        }
    };
    return self;
};

function playHandler() {
    "use strict";
    var menu = window.document.getElementById("dropDown");
    jukebox.playAlbum(menu.options[menu.selectedIndex].text);
}

function showFavoriteHandler() {
    "use strict";
    window.document.getElementById("favoriteAlbum").innerHTML = jukebox.favoriteAlbum();
}

function main() {
    "use strict";
    var albums, dropDown, i, album, option;
    
    albums = [["Operation Ivy",   "Energy"],
              ["Blink 182",       "Dude Ranch"],
              ["New Found Glory", "Sticks and Stones"]];
    dropDown = window.document.getElementById("dropDown");
    
    for (i = 0; i < albums.length; i += 1) {
        // Create and add album to jukebox.
        album = new Album(albums[i][0], albums[i][1]);
        jukebox.addAlbum(album);
        
        // Add album to dropdown menu.
        option = new Option(album.getLabel(), i);
        dropDown.appendChild(option);
    }
    
    window.document.getElementById("play").addEventListener("click", playHandler);
    window.document.getElementById("showFavorite").addEventListener("click", showFavoriteHandler);
}

window.addEventListener("load", main);