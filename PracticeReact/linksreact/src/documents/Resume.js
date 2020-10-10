import React from 'react';
import photo from '../documents/photo.jpg';

function Resume() {
    return(
        <div className="div_main_content">
            <div className="div_profile">
              <img src={photo} className="photo-id" alt="Johnny Depp"></img>
              <div className="profile">
                  <h3>Personal Infor</h3>
                  <hr/>
                  <p><b>Fullname:</b> Johnny Depp</p>
                  <p><b>Address:</b> 3727 West Magnolia Ave. Burbank, CA 91505</p>
                  <p><b>Phone:</b> 911-119-9191</p>
                  
                  <h3>Experience</h3>
                  <hr />
                  <p><b>Programming:</b> from <i>1996</i> to <i>Present</i></p>
                  <p>HTML, CSS, Javascript, PHP, MySQL, Python</p>
              </div>
            </div>
            
            
        </div>
    )
}

export default Resume;
