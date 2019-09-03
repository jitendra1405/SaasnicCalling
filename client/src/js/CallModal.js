import React from 'react';
import PropTypes from 'proptypes';
import classnames from 'classnames';
import CallWindow from './CallWindow';



function CallModal({ status, callFrom, startCall, rejectCall }) {
  console.log('theriiii',status,rejectCall);
 var audio = new Audio('http://hipehome.com/nokia-ringtone-2019-256k-46684.mp3');
  if(status == " "){
     audio.pause();
    
  }
  else if(status == 'active'){
    audio.play();
  }
  
 
  const acceptWithVideo = (video) => {
     
    const config = { audio: true, video };
    return () => startCall(false, callFrom, config, audio.pause());
         
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
        onClick={acceptWithVideo(false)}
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
