import React, { Component } from 'react';
import PropTypes from 'proptypes';

let friendID;

class MainWindow extends Component {
  /**
   * Start the call with or without video
   * @param {Boolean} video
   */
  callWithVideo(video) {
    const { startCall } = this.props;
    const config = { audio: true, video};
    return () => startCall(true, friendID, config);
  }
  callWithVideo12(video) {
    const { startCall12 } = this.props;
    const config = { audio: true, video: false};
    return () => startCall12(true, friendID, config);
  }
  
  render() {
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'leeglxtkajgvtl',
  host: 'ec2-23-21-156-171.compute-1.amazonaws.com',
  database: 'daff54nelb3ps6',
  password: '76f29beea03eb3bd5b69672f0d292a01ae95d251957282df96e882864c969e50',
  port: 5432,
})
pool.query('SELECT email,lastname FROM webrtc.contact', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
    const  clientId  = 'Welcome';
    console.log(`${clientId}`);
    document.title = `${clientId} - VideoCall`;
    return (
      <div className="container main-window">
        <div>
          <h3>
            Hi, your ID is
            <input
              type="text"
              className="txt-clientId"
              defaultValue={clientId}
              readOnly
            />
          </h3>
          <h4>Get started by calling a friend below</h4>
        </div>
        <div>
          <input
            type="text"
            className="txt-clientId"
            spellCheck={false}
            placeholder="Your friend ID"
            onChange={event => friendID = event.target.value}
          />
           
          <div>
      
            <button
              type="button"
              className="btn-action fa fa-video-camera"
              onClick={this.callWithVideo(true)}
            />
            <button
              type="button"
              className="btn-action fa fa-phone"
              onClick={this.callWithVideo12(false)}
            />
          </div>
        </div>
      </div>
    );
  }
}

MainWindow.propTypes = {
  clientId: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired,
  startCall12: PropTypes.func.isRequired
};

export default MainWindow;
