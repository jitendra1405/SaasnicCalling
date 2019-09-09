import React from 'react';
import PropTypes from 'proptypes';
import classnames from 'classnames';
import CallWindow from './CallWindow';



function CallModal({ status, callFrom, startCall,startCall12, rejectCall }) {
  console.log('theriiii',status,rejectCall);
  var pg = require('pg');
   var connectionString = "postgres://*leeglxtkajgvtl*:*76f29beea03eb3bd5b69672f0d292a01ae95d251957282df96e882864c969e50*@*ec2-23-21-156-171.compute-1.amazonaws.com*:*5432*/*daff54nelb3ps6*";

pg.connect(connectionString, function(err, client, done) {
   client.query('SELECT email,lastname FROM webrtc.contact', function(err, result) {
      done();
      if(err) return console.error(err);
      console.log(result.rows);
   });
});
 var audio = new Audio('http://hipehome.com/nokia-ringtone-2019-256k-46684.mp3');
  if(status == " "){
     audio.pause();
    
  }
  else if(status == 'active'){
    audio.play();
  }
  
 
  const acceptWithVideo = (video) => {
     console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    const config = { audio: true, video };
    return () => startCall(false, callFrom, config, audio.pause());
         
  };
  const acceptWithVideo12 = (video) => {
     console.log('lllllllllllllllllllllllllllllllllllllllllllllllllllllllll');
    const config = { audio: true, video: false };
    return () => startCall12(false, callFrom, config, audio.pause());
         
  };
  
  
  
  const rejectCall11 = (video) => {
    
    return ()  => rejectCall(audio.pause());
  };

  return (
     
    <div className={classnames('call-modal', status)}>
      <p>
        <span className="caller">{`${callFrom} is calling`}</span>
   

      </p>
      <button
        type="button"
        className="btn-action fa fa-video-camera"
        onClick={acceptWithVideo(true)}
      />
     
     
      <button
        type="button"
        className="btn-action fa fa-phone"
        onClick={acceptWithVideo12(false)}
      />
      <button
        type="button"
        className="btn-action hangup fa fa-phone"
        onClick={rejectCall11(true)}
      />
    
    </div>
  );

}

CallModal.propTypes = {
 

  status: PropTypes.string.isRequired,
  callFrom: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired,
  rejectCall: PropTypes.func.isRequired
};

export default CallModal;
