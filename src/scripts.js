navigator.mediaDevices.getUserMedia({audio:true})
.then(stream => {handlerFunction(stream)})


  function handlerFunction(stream) {
    rec = new MediaRecorder(stream);
    rec.ondataavailable = e => {
      audioChunks.push(e.data);
      if (rec.state == "inactive"){
        let blob = new Blob(audioChunks,{type:'audio/mpeg-3'});
        recordedAudio.src = URL.createObjectURL(blob);
        recordedAudio.controls=true;
        recordedAudio.autoplay=true;
        sendData(blob)
      }
    }
  }
  function sendData(data) {}

  startBtn.onclick = e => {
    console.log('I was clicked')
    startBtn.disabled = true;
    // startBtn.style.backgroundColor = "blue"
    stopBtn.disabled=false;
    audioChunks = [];
    rec.start();
  }
  stopBtn.onclick = e => {
    console.log("I was clicked")
    startBtn.disabled = false;
    stop.disabled=true;
    // startBtn.style.backgroundColor = "red"
    rec.stop();
  }