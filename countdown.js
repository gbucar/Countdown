class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dateString: "00:00:00",
            days: "00",
            endDate: new Date(2021, 3, 25, 8)
        };
        this.render = this.render.bind(this)
    };
    
    render() {
        setInterval(() => {
            date = new Date(new Date(this.state.endDate) - new Date());
            this.setState({
                timeString: `${date.toTimeString().split(" ")[0]}`,
                days: `${date.getDate()}`
            });
        }, 1000);
        return (
            <div id = "display">
                <div id="time">{
                    this.state.timeString
                }</div>
                <div id = "date">{this.state.days}</div>
            </div>
        );
    };
};

ReactDOM.render(<App />, document.getElementById("root"));
