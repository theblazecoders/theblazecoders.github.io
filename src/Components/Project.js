import React, { Component } from 'react';

class Project extends Component {
  render() {

    let projects;
    if(this.props.data){
      projects = this.props.data.projects.map(projects => {
        const projectImage = 'images/project/'+projects.image;

        return (
          <div key={projects.title} className="columns project-item">
              <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                  <img alt={projects.title} src={projectImage} /> {/* The image is not responsive. TODO: fix it */}
                  <div className="overlay">
                    <div className="project-item-meta">
                    <h5>{projects.title}</h5>
                      <p>{projects.category}</p>
                    </div>
                  </div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
              </a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="project">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of Our Works.</h1>

            <div id="project-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Project;
