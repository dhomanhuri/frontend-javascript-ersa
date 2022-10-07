const url = "http://127.0.0.1:5000"
const baseUrlImg = "http://localhost/backend-python-ersa/src/";
$(document).ready(function() {
    setInterval(function(){
      let temp="";
      let hum="";
      var formdata = new FormData();
      var requestOptions = {
        method: 'GET',
        // body: formdata,
        redirect: 'follow'
      };

      fetch(url+"/sensor", requestOptions)
        .then(response => response.text())
        .then(result => {
          var myObj = JSON.parse(result);
        //   console.log(myObj.data)
          var data = myObj.data;
          data.forEach(element => {
            temp = element['temp'];
            hum = element['hum'];
            // console.log(hum);
            $("h5.temp").html(temp+" C");
            $("h5.hum").html(hum+ " %");
            if (hum>40) {
              $("h5.statuss").html("off");                  
            }else{
              $("h5.statuss").html("on");
            }
          });
        })
        .catch(error => console.log('error', error));
        
      fetch(url+"/imageprocessing", requestOptions)
      .then(response => response.text())
      .then(result => {
        var myObj = JSON.parse(result);
        // console.log(myObj.data)
        var data = myObj.data.data;
        console.log(data);
        document.querySelector('#img-test').src = baseUrlImg + data
        // data.forEach(element => {
        //   console.log(element);
        // });
      })
      .catch(error => console.log('error', error));
      
    },5000)
});
