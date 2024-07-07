import React, { useEffect, useState } from 'react'

const ApiMusic = (prop) => {
    const [token, setToken] = useState("");
    const [track, setTrack] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [prevaudio, setPrevaudio] = useState(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const x = Math.ceil(Math.random() * 50);
        setOffset(x);
       console.log(offset);
    }, [prop.value2])

    useEffect(() => {
        //Api access token
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=d6ed58fe717d41d3a0e1cadf1e592140&client_secret=fe48dd7dcd7b450b82a2212e00442adb'
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setToken(data.access_token))
    }, [])

    //calling getMusic
    useEffect(() => {
        if (token && prop.value) {
            getMusic();
        }
    }, [token, prop.value]);

    //function which returns music
    async function getMusic() {
        // console.log("search For " + prop.value);
        const musicParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        };
        try {
            const response = await fetch('https://api.spotify.com/v1/search?q=' + prop.value + '&type=track&limit=50&offset=' + offset, musicParameters)
            const data = await response.json();
            console.log(data.tracks.items);
            setTrack(data.tracks.items);
        } catch (error) {
            console.error("error found");
        }
    };

    const playMusic = (elem) => {
        if (isPlaying) {
            prevaudio.pause();
        }
        const audio = new Audio(elem);
        audio.play();
        setIsPlaying(true);
        setPrevaudio(audio);
    }
    return (
        <>
            <div className='m-auto w-[48rem] min-w-[22rem] h-[28.5rem] overflow-y-scroll glassCard p-4 flex-wrap justify-center flex mt-6'>
                {track.map((element) => {
                    if (element.preview_url != null) {
                        return (<div key={element.id} className="w-[20rem] min-w-[20rem] h-24 p-4 bg-transparent border border-gray-300 rounded-lg shadow-md items-center cursor-pointer flex m-5 hover:bg-gray-400" onClick={() => playMusic(element.preview_url)}>
                            <img src={element.album.images[1].url} alt="no image" className="w-28 h-20 rounded-md object-cover" />
                            <div className='ml-5  overflow-y-auto h-20'>
                                <h3 className="text-lg font-semibold">{element.album.name}</h3>
                                <h3 className="text-gray-600 font-semibold">{element.album.artists[0].name}</h3>
                            </div>
                        </div>)
                    }
                })}
            </div>
        </>
    );
}
export default ApiMusic



