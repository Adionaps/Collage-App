var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()
function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=content
    if((content=="take my selfie")||(content=="Take my selfie.")){
        speak()
    }
}
camera=document.getElementById("camera")
Webcam.set({
width: 360,
height: 250,
image_format: 'jpeg',
jpeg_quality: 90
})

function speak(){
    var synth=window.speechSynthesis
var utterThis=new SpeechSynthesisUtterance("taking your selfie in 5 seconds")
synth.speak(utterThis)
Webcam.attach(camera)
setTimeout(function()
{
    image_id="selfieone"
    take_snapshot()
    var utterThis=new SpeechSynthesisUtterance("taking your selfie in 10 seconds")
    synth.speak(utterThis)
    save()
},5000
)

setTimeout(function()
{
    image_id="selfietwo"
    take_snapshot()
    var utterThis=new SpeechSynthesisUtterance("taking your selfie in 15 seconds")
    synth.speak(utterThis)
    save()
},10000
)
}

setTimeout(function()
{
    image_id="selfiethree"
    take_snapshot()
    save()
},15000
)
function take_snapshot(){
Webcam.snap(function(data_uri)
{
    if(image_id=="selfieone"){
        document.getElementById('result1').innerHTML='<img id="selfie_image1" src="'+data_uri+'">'
    }

    if(image_id=="selfietwo"){
        document.getElementById('result2').innerHTML='<img id="selfie_image2" src="'+data_uri+'">'
    }

    if(image_id=="selfiethree"){
        document.getElementById('result3').innerHTML='<img id="selfie_image3" src="'+data_uri+'">'
    }
})
}

function save(){
link1=document.getElementById("link1")
link2=document.getElementById("link2")
link3=document.getElementById("link3")
image1=document.getElementById("selfie_image1").src 
image2=document.getElementById("selfie_image2").src 
image3=document.getElementById("selfie_image3").src 
link1.href=image1
link2.href=image2
link3.href=image3
link1.click()
link2.click()
link3.click()
}