import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = { articles: [], loading: false, page: 1 };
  }
  async componentDidMount() {
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-01-28&sortBy=publishedAt&apiKey=fb7a2c61cb1c4f99a504f432f138490d`;
    let data = await fetch(url);
    this.props.setProgress(30)

    let parseData = await data.json();
    this.props.setProgress(50)

    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
    this.props.setProgress(100)

  }
  // handleNext = async () => {
  //   if (
  //     this.state.page + 1 >
  //     Math.ceil(this.state.totalResults / this.props.pageSize)
  //   ) {
  //   } else {
  //     let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-01-28&sortBy=publishedAt&apiKey=5b58bb58e9684deca113a446afd2bc8c`;
  //     let data = await fetch(url);
  //     let parseData = await data.json();
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parseData.articles,
  //     });
  //   }
  // };
  // handlePrev = async () => {
  //   let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-01-28&sortBy=publishedAt&apiKey=5b58bb58e9684deca113a446afd2bc8c`;
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   console.log(parseData.articles.length);
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parseData.articles,
  //   });
  // };
  fetchData = async () => {
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-01-28&sortBy=publishedAt&apiKey=fb7a2c61cb1c4f99a504f432f138490d`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });
  };
  render() {
    return (
      <Container className="mt-2">
        <Container>
          <h1>Top headlines</h1>
        </Container>

        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Spinner />}
        >
          <Row className="d-flex justify-content-between">
            {this.state.articles.map((item) => {
              return (
                <Col className=" col-md-4 " key={item.url} style={{left:0,right:0}}>
                  <NewsItem
                    title={item.title ? item.title.slice(0, 45) : ""}
                    description={
                      item.description ? item.description.slice(0, 30) : ""
                    }
                    imageUrl={
                      item.urlToImage
                        ? item.urlToImage
                        : "https://thumbs.dreamstime.com/b/news-header-background-title-abstract-colorful-global-map-text-hightech-design-blue-colorful-template-90494676.jpg"
                    }
                    newsUrl={item.url}
                  />
                </Col>
              );
            })}
          </Row>
        </InfiniteScroll>

        <Container className="d-flex justify-content-between my-2">
          <Button disabled={this.state.page <= 1} onClick={this.handlePrev}>
            {" "}
            &larr; Previous
          </Button>
          <Button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNext}
          >
            Next &rarr;
          </Button>
        </Container>
      </Container>
    );
  }
}
