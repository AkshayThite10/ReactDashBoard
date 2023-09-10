import React, { Component } from 'react'
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';
import Header from './components/Header';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Id: "bitcoin",
      Data: {}
    }
  }
  fetchData = async () => {
    let data = await fetch('https://api.coingecko.com/api/v3/coins/'+ this.state.Id)
    let JsonData = await data.json()
    this.setState({ Id: this.state.Id, Data: JsonData })
  }

  handleSubmit = async (event)=>{
    console.log(event.target.value)
    await this.setState({Id: event.target.value, Data:this.state.Data})
    this.fetchData()
  }

  componentDidMount() {
    this.fetchData()
    this.interval = setInterval(() => this.fetchData(), 2000);

  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Header handle_Submit = {this.handleSubmit} />
        <CardSection />
          <ChartSection Id={this.state.Id} priceChange24={this.state.Data.market_data ? this.state.Data.market_data.price_change_24h_in_currency.usd : ""} 
        MarketCap={this.state.Data.market_data ? this.state.Data.market_data.market_cap.usd  : ""}
        TotVol={this.state.Data.market_data ? this.state.Data.market_data.total_volume.usd  : ""}
        Circulating= {this.state.Data.market_data ? this.state.Data.market_data["circulating_supply"] : ""}
        twitterF = {this.state.Data.community_data ? this.state.Data.community_data.twitter_followers : ""}
        />
      </div>
    )
  }
}
