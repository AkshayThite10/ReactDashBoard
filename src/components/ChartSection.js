import React, { Component } from 'react'
import Chart from "react-apexcharts";

export class ChartSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Price: {
                labels: ['A', 'B', 'C', 'D', 'E'],
                options: {
                    chart: {
                        id: 'area-datetime',
                    },
                    grid: {
                        show: false
                    }, title: {
                        text: "Market Price (USD)",
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: "#fcdf03"
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }, xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#fcdf03"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    }, selection: 365,
                },
                series: [
                    {
                        name: 'Market Price',
                        data: [[1645837250522, 39804.53519937617]]

                    }
                ]
            }
            ,Market_Cap: {
                options: {
                    grid: {
                        show: false
                    }, title: {
                        text: "Market Cap (USD)",
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: '#ff69f5'
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }, xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#ff69f5"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    }
                },
                series: [
                    {
                        name: 'Market Cap (USD)',
                        data: [[1645837250522, 39804.53519937617]]

                    }
                ]
            }
            ,
            Tot_Vol: {
                options: {
                    grid: {
                        show: false
                    }, title: {
                        text: "Market Volume",
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: "#00ffea"
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }, xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#00ffea"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    }, 
                },
                series: [
                    {
                        name: "Market Volume",
                        data: [[1645837250522, 39804.53519937617]]

                    }
                ]
            }
            
        };
        this.prevSelection = this.state.Price.options.selection
    }
    prevId = this.props.Id

    fetchData = async () => {
        let chartData = await fetch('https://api.coingecko.com/api/v3/coins/' + this.props.Id + '/market_chart?vs_currency=usd&days=' + this.state.Price.options.selection);
        let jsonChartData = await chartData.json()
        this.setState({ Price: { options: this.state.Price.options, series: [{ name: 'Market Price', data: jsonChartData.prices }] } })
        this.setState({ Market_Cap: { options: this.state.Market_Cap.options, series: [{ name: 'Market Price', data: jsonChartData.market_caps }] } })
        this.setState({ Tot_Vol: { options: this.state.Tot_Vol.options, series: [{ name: 'Market Price', data: jsonChartData.total_volumes }] } })

    }


    componentDidMount() {
        this.fetchData()
        this.interval = setInterval(() => this.fetchData(), 2000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
      }
    componentDidUpdate() {
        if (this.prevId !== this.props.Id) {
            this.prevId = this.props.Id
            this.fetchData()
        }
        if (this.prevSelection !== this.state.Price.options.selection) {
            this.prevSelection =this.state.Price.options.selection
            this.fetchData()
        }
    }

    render() {
        return (
            <div>
               <div className="container">
                    <div className="row">
                        <div className="col" style={{ maxWidth: '750px' }}>
                            <div id="chart">
                                <Chart
                                    options={{title: {
                                        text: "Pie-Chart"
                                    },
                                        labels: ['Class A', 'Class B', 'Class C', 'Class D', 'Class E']}}
                                    series={[66, 112, 80, 55, 25]}
                                    labels={['A', 'B', 'C', 'D', 'E']}
                                    type="donut"
                                    height='400'
                                    width='600' />
                            </div>
                        </div>
                        <div className="col" style={{ maxWidth: '850px' }}>
                            <div >
                                <Chart
                                    options={{title: {
                                        text: "Bar-Graph"
                                    },
                                        chart: {
                                        id: "basic-bar"
                                      },
                                      xaxis: {
                                        categories: ["Class A", "Class B", "Class C", "Class D", "Class E"]
                                      }}}
                                    series={[
                                        {
                                          name: "series-1",
                                          data: [66, 112, 80, 55, 25]
                                        }
                                      ]}
                                    type="bar"
                                    height='200'
                                    width='300' />
                            </div>
                            <div >
                                <Chart
                                    options={{title: {
                                        text: "Line-Graph"
                                    },
                                        chart: {
                                        id: "basic-bar"
                                      },
                                      xaxis: {
                                        categories: ["Class A", "Class B", "Class C", "Class D", "Class E"]
                                      }}}
                                    series={[
                                        {
                                          name: "series-1",
                                          data: [66, 112, 80, 55, 25]
                                        }
                                      ]}
                                    type="line"
                                    height='200'
                                    width='300' />
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        )
    }
}

export default ChartSection