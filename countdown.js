class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dateString: "00:00:00",
            days: "",
            endDate: new Date(2021, 3, 25, 8),
            done: false,
            beginning: new Date(2021, 3, 15, 6, 53),
            percent: 0
        };
        this.render = this.render.bind(this)
    };
    
    render() {
        setInterval(() => {
            date = new Date(new Date(this.state.endDate) - new Date());
            done = new Date(new Date(this.state.endDate).getMilliseconds() >= new Date()).getMilliseconds();
            beginning = new Date(new Date(this.state.beginning))
            percent = (new Date() - beginning) / (new Date(this.state.endDate) - beginning);
            this.setState({
                timeString: `${date.toTimeString().split(" ")[0]}`,
                days: `${date.getDate()}`,
                done: done,
                percent: percent
            });
        }, 1000);
        return (
            <div >
                {this.state.done ? 
                <div><iframe src="https://giphy.com/embed/hTfklxYUDhdvhBI485" width="480" height="384" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <h1>We did it! 😍</h1>
                </div> :
                <div id = "display"><div id="time">{this.state.timeString}</div>
                <div id = "date">{this.state.days}</div>
                <div id = "bar" style = {{width: this.state.percent*100 + `vw`}}></div>
                </div>
                }
            </div>
        );
    };
};

ReactDOM.render(<App />, document.getElementById("root"));
