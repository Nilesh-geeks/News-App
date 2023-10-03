import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'



export class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 6,
        category: 'business',
    }
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalize = (s) =>{
        return s[0].toUpperCase() + s.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("Hello , I am in constructor")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
    }
    async updateNews() {
        this.setState({ loading: true });
        this.props.Setprogress(10);
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a280743a2fa641e1bb81b6b0b66294dd&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a280743a2fa641e1bb81b6b0b66294dd";

        let data = await fetch(url);
        this.props.Setprogress(30);
        let parseddata = await data.json();
        this.props.Setprogress(50);
        this.setState({ loading: false });
        console.log(parseddata);
        this.props.Setprogress(70);
        this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults });
        this.props.Setprogress(100);
    }
    async componentDidMount() {
        this.updateNews();
    }
    handlenext = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }
    handleprev = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }
    render() {
        return (

            <div className="container my-3">
                <h2 className='text-center' style={{ margin: "30px 0px" }}>News-Monkey Top {this.capitalize(this.props.category)} Headlines</h2>
                {this.state.loading && < Spinner />}
                <div className="row" >
                    {!this.state.loading && this.state.articles && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} desc={element.description ? element.description : ""} ImageUrl={element.urlToImage ? element.urlToImage : "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} newsurl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                        </div>
                    })
                    }

                </div>
                <div className="container  my-3 d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} class="btn btn-dark" onClick={this.handleprev}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} class="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>

                </div>
            </div>

        )
    }
}

export default News
