//1. Create XHR object/constructor
var request=new XMLHttpRequest();
//2. Open a connection
request.open("GET","https://restcountries.com/v2/all",true);
//3. Initiate the connection
request.send();
//4. Once the data loaded from the server successfully
request.onload=function(){
//Here we are converting "string" to array of object json
var result=JSON.parse(request.response); 
for (i=0;i<result.length;i++)
{
try{
var name=result[i].name;
// var lat=result[i].latlng[0];
// var lng=result[i].latlng[1];
var latlon=result[i].latlng;
if (latlon.length === 0)
{
    throw new Error("Invalid coordinates for the conntry");
}
wheatherData(name,...latlon);
}catch(e){
console.log("Invalid country"+name+e.message);
}
}
}

function wheatherData(name,lat,lang)
{
var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&units=metric&appid=4b7b1fa4e53cbf22f77660c073f5636e`;
var request=new XMLHttpRequest();
request.open('GET',url,true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response); 
console.log(`${name}:${data.main.temp}`);

}

}