/**
 * Created by Maurice on 5/28/2015.
 */


(function () {

    var Clock = React.createClass({
        render: function () {
            console.log('Clock Render')
            return <p>The current time is {this.props.time}</p>;
        }
    });
    //var Clock = React.createClass({
    //    getInitialState: function () {
    //        return {time: undefined};
    //    },
    //    componentDidMount: function () {
    //        console.log('Clock componentDidMount')
    //        var _this = this;
    //        this.timer = setInterval(function () {
    //            _this.setState({time: new Date().toTimeString()});
    //
    //        }, 1000);
    //    },
    //    render: function () {
    //        console.log('Clock Render')
    //        return <p>The current time is {this.state.time}</p>;
    //    },
    //    componentWillUnmount: function () {
    //        console.log('Clock componentWillUnmount')
    //        clearInterval(this.timer);
    //    }
    //});

    var Greet = React.createClass({
        getDefaultProps: function () {
            return {name: ''}
        },
        render: function () {
            console.log('Greet Render')

            return <h2 id='greet' data-xx='xx' className='greeting' htmlFor=''>
                Hallo {this.props.name.toLowerCase()}</h2>;
        }
    });

    var App = React.createClass({
        getInitialState: function () {
            return {visible: true};
        },
        componentDidMount: function () {
            var _this = this;
            setInterval(function () {
                _this.setState({visible: !_this.state.visible});
            }, 10000)
        },
        wasClicked: function(){
            this.setState({visible: !this.state.visible})
        },
        isChanged:function(e){
          console.log(e)
           var dom = React.findDOMNode(this.refs.inp);
            console.log(dom.value);
        },
        render: function () {
            console.log('App Render')

            var clock = '';
            if (this.state.visible) {
                var clock = <Clock time={new Date().toTimeString()} />;
            }

            //return <Greet name={this.props.name} />;
            return <div>
                <Greet {...this.props} />
                {clock}
                <br/>
                <input ref='inp' type="text" onChange={this.isChanged}/>
                <button onClick={this.wasClicked} >CLick me</button>
            </div>;
        }
    });


    React.render(<App name='Maurice'/>, document.getElementById('app'));

}());