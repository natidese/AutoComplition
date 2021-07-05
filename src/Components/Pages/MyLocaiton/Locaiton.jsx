import { React, useState ,useEffect } from 'react'
// import useEffect from 'react'

// const WEATHER_BASIC_API = process.env.REACT_APP_WEATHER_BASIC_API;
// const API_KEY = process.env.REACT_APP_API_KEY;

export default function Locaiton() {

    // const [MyWeather, setMyWeather] = useState([]);
    // const [MyData, setMyData] = useState("");

    // useEffect(() => {
    //     fetch(`${WEATHER_BASIC_API}${MyData}&appid=${API_KEY}`)
    //         .then(response => { return response.json() })
    //         .then(data => { setMyWeather(data) })
    // }, [])

    //    console.log(MyWeather);

    //  }
    const [Mycity, setMycity] = useState();
    const [NewMycity, setNewMycity] = useState();
    
    
    
    const citysArray = [
        { name: "Rehovot" ,  id:1},
        { name: "Lod",  id:2 },
        { name: "London",  id:3 },
        { name: "Ramla",  id:4 },
        { name: "Haifa",  id:5 },
        { name: "Eilat" ,  id:6},
        { name: "Gedera" ,  id:7}
    ];


        useEffect(() => {
            setMycity(citysArray)
            
            

        }, [])

        
      
    // function GetCity(){
    //     citysArray.filter(citysArray => citysArray.startsWith('G')).map(filterdCitysArray => (
    //         {filterdCitysArray}
    //     ))


    function valueChange(text) {
        
        let k = Mycity.filter( city => city.name === text)
        // if (Mycity === "") {
        //     return city
        // }
        // else if (city.name.toLowerCase().includes(Mycity.toLowerCase())) {
        //         return city
        // }

        setNewMycity(k);
       
    }


    // function changeInput(e) {
    //     setMycity(e.target.value);
    // }


    return (
        <div>


            <label htmlFor="city">Enter city : </label>
            <input type="text" name="city" onChange={(e)=>{valueChange(e.target.value)}} placeholder="Sreach ..." />
            <ul >
                {
                NewMycity?.map((city , key) => { 
                return <li key={key}>{city.name}</li>
                })}
            </ul>
        </div>
    )
}
