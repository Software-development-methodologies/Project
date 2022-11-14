async function myFunction() {

    var x = document.getElementById("fname").value;
    city_name = x;
    //city_name = "budapest";
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=imperial&appid=60db43332ab5bf8e954f6254102765cf`
    let url = URL;
    let res = await fetch(url);
    //let C = (5/9) * (F - 32);
    if (res.ok) {

        let text = await res.text();
        let mainResult='';
        let temp = '';
        let i=0;
        let mainS = text.indexOf("main")+7;
        let mainF = text.indexOf("description")-1;

        let temp_minS = text.indexOf("temp")+5;
        let temp_minF = text.indexOf(`,"feels_like"`);
        
        for(i=mainS;i<text.length;i++){
            
            if(i<mainF-2){
                mainResult+=text.charAt(i);
            }
            
            if(i>temp_minS && i<temp_minF){
                temp += text.charAt(i);
            }
            
        }
        let C = (5/9) * (temp - 32);
        C = Math.floor( C );
        console.log(text)
        document.getElementById("response2").innerHTML = mainResult;
        document.getElementById("response").innerHTML = C+'°';
        return text;
    } else {
        console.log(res.status)
        document.getElementById("response2").innerHTML = text;
        return `HTTP error: ${res.status}`;
    }


}

myFunction().then(data => {
    console.log(data);
});

    
