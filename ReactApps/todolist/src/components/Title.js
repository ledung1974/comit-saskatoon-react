import React from 'react';

function Title() {
        return(
          <div className="page-header">  
             <div className="row rown">
                <div className="col-sm-2n">   
                   <img src="dungle.jpg" className="img-rounded float-left" alt="DungLe's avatar"></img>
                </div>  
                <div className="col-sm-9n">  
                   <h1 className="text-right"> ToDo List by Le Dung <small>ReactJS</small></h1>
                     <h2 className="text-right"><small>The project in ComIT Saskatoon 2020 Class</small></h2>
                </div>
             </div>
          </div>   
        )
}

export default Title;