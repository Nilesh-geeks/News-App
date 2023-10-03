import React, { Component } from 'react'

  
export default class NewsItem extends Component {

    render() {
        // let {title,desc} =this.props; 
        return (
            <div>
                <div className="card my-3" >
                    <div style={{display:'flex', justifyContent :'flex-end' ,right:'0',position:'absolute'}}>
                        <span class="badge rounded-pill bg-danger" >{this.props.source}  </span></div>
                    <img src={this.props.ImageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body my-3">
                            <h5  className="card-title center my-4" >
                                 {this.props.title.length<20 ?this.props.title : this.props.title.slice(0,80)}</h5>

                            <p className="card-text">{this.props.desc.length<130?this.props.desc : this.props.desc.slice(0,130)}</p>
                            <p class="card-text"><small class="text-body-secondary">By {this.props.author ?this.props.author :'Unknown'}  on {new Date(this.props.publishedAt).toGMTString()}</small></p>

                            <a href={this.props.newsurl} target="_blank" without rel="noopener noreferrer" className="btn btn-sm btn-dark" style={{width:"100%"}}>Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
