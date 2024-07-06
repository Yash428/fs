const getTemp = async ()=>{
    let time  = new Date()
    let month = time.getMonth()+1
    let date =  time.getFullYear()+ '-'+month+ '-'+time.getDate()
    let temp = 0;
    const json = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vadodara/${date}?unitGroup=metric&key=BRNNBFNJLBEKKFKCNALN7JHYC&contentType=json`)
                        .then(res=>res.json())
    //console.log(json);

    return json.days[0].temp
}
