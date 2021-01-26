import * as React from 'react';
// import DarkSkyDemo from './DarkSkyDemo';
import WidgetOne from './WidgetOne';
import * as colors from './colors';


const mcc = 'color:lime;';

// const coords = '34.398918,-119.518356'; // carp
// const coords = '48.135124,11.581981'; // munich
// const coords = '45.512794,-122.679565'; // portland
// const coords = '39.9525839,-75.1652215'; // philadelphia
// const coords = '-47.935071,-15.776563'; // brasilia doesn't work
// const coords = '35.6762,139.6503'; // tokyo
const coords = '39.9525839,-75.1652215'; // philadelphia

export interface DarkSkyOneProps {

}

export interface DarkSkyOneState {
    city: string;
    weather: any;
    error: any;
}

class DarkSkyOne extends React.Component<DarkSkyOneProps, DarkSkyOneState> {
    constructor(props: DarkSkyOneProps) {
        super(props);
        this.state = {
            city: null,
            weather: null,
            error: null
        };
    }

    public componentDidMount() {
        this.get_location().then((location: any) => {
            this.get_weather().then(weather => {
                this.setState({
                    city: location.adminArea5,
                    weather: weather
                });
            });
        });
    }

    public get_location = () => new Promise(resolve => {
        const url_location = 'https://open.mapquestapi.com/geocoding/v1/reverse?key=8v66cpTH8hhGKApG1nz34zpgABEG9yAE&location=' + coords;
        fetch(url_location)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('%c : DarkSkyOne -> componentDidMount -> locations', mcc, result.results[0].locations[0]);
                    resolve(result.results[0].locations[0]);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log('%c : DarkSkyOne -> componentDidMount -> error', mcc, error);
                    resolve(error);
                }
            );
    })

    public get_weather = () => new Promise(resolve => {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const url_weather = 'https://api.darksky.net/forecast/28b3868ffd943a1787dcd81a37070a6b/' + coords;
        fetch(proxy + url_weather)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('%c : DarkSkyOne -> componentDidMount -> result', mcc, result);
                    resolve(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log('%c : DarkSkyOne -> componentDidMount -> error', mcc, error);
                    resolve(error);
                }
            );
    })

    public render() {

        const widget_one_vertical =
            <>
                {/* 
                <div className='widget-group-wrap'>
                    <WidgetOne
                        weather={this.state.weather}
                        city={this.state.city}
                        className='no-card vertical'
                        layout='vertical'
                    />
                </div>
                <br /><br /><br /><br /><br /><br /><br />
                <div className='widget-group-wrap'>
                    <WidgetOne
                        weather={this.state.weather}
                        city={this.state.city}
                        className='no-card vertical'
                        layout='vertical'
                        forecast={5}
                    />
                </div>
                <br /><br /><br /><br /><br /><br /><br /> 
                <div className='widget-group-wrap'>
                    <WidgetOne
                        weather={this.state.weather}
                        city={this.state.city}
                        className='no-card vertical'
                        theme={{
                            // color_1: 'black',
                            color_2: colors.mint,
                            theme: 'dark'
                        }}
                        layout='vertical'
                        details
                    />
                </div>
                <br /><br /><br /><br /><br /><br /><br />
                <div className='widget-group-wrap'>
                    <WidgetOne
                        weather={this.state.weather}
                        city={this.state.city}
                        className='no-card vertical'
                        theme={{
                            // color_1: 'black',
                            color_2: colors.red,
                            theme: 'light'
                        }}
                        layout='vertical'
                        details
                    />
                </div>
                <br /><br /><br /><br /><br /><br /><br />
                <div className='widget-group-wrap'>
                    <WidgetOne
                        weather={this.state.weather}
                        city={this.state.city}
                        className='no-card vertical'
                        layout='vertical'
                        details
                    />
                </div>
                <br /><br /><br /><br /><br /><br /><br />
                */}
                <div className='widget-group-wrap'>
                    <WidgetOne
                        weather={this.state.weather}
                        city={this.state.city}
                        className='no-card vertical vert_on_vert'
                        layout='vertical'
                        layout_variation='vert_on_vert'
                        forecast={3}
                    // theme={{
                    //     // color_1: 'black',
                    //     color_2: colors.mint,
                    //     theme: 'light'
                    // }}
                    />
                </div>
                {/* 
                */}
            </>;

        const widget_one_horizontal =
            <>
                {/* 
                <WidgetOne
                    weather={this.state.weather}
                    city={this.state.city}
                    className='no-card'
                />
                <br /><br /><br /><br /><br /><br /><br />
                <WidgetOne
                    weather={this.state.weather}
                    city={this.state.city}
                    className='no-card'
                    forecast={3}
                /> 
                <br /><br /><br /><br /><br /><br /><br />
                <WidgetOne
                    weather={this.state.weather}
                    city={this.state.city}
                    className='one-big-card'
                    forecast={3}
                    theme={{
                        // color_1: 'black',
                        color_2: colors.orange,
                        theme: 'dark'
                    }}
                />
                <br /><br /><br /><br /><br /><br /><br />
                <WidgetOne
                    weather={this.state.weather}
                    city={this.state.city}
                    className='one-big-card'
                    forecast={3}
                />
                <br /><br /><br /><br /><br /><br /><br />
                <WidgetOne
                    weather={this.state.weather}
                    city={this.state.city}
                    className='separate-cards'
                    forecast={3}
                />
                <br /><br /><br /><br /><br /><br /><br />
                */}
                <WidgetOne
                    weather={this.state.weather}
                    city={this.state.city}
                    className='separate-cards daily-cards-only'
                    forecast={3}
                    theme={{
                        icon_color: colors.green,
                        color_2: colors.green,
                    }}
                />
                <br /><br /><br /><br /><br /><br /><br />
                <WidgetOne
                    weather={this.state.weather}
                    city={this.state.city}
                    className='separate-cards top-card-only'
                    forecast={3}
                    theme={{
                        icon_color: colors.mint,
                        color_2: colors.mint,
                    }}
                />
                <br /><br /><br /><br /><br /><br /><br />
                <WidgetOne
                    weather={this.state.weather}
                    city={this.state.city}
                    className='separate-cards top-card-only'
                    expand_details
                    forecast={3}
                    theme={{
                        icon_color: colors.red,
                        color_2: colors.red,
                    }}
                />
                {/* 
                <br /><br /><br /><br /><br /><br /><br />
                <WidgetOne
                    weather={this.state.weather}
                    city={this.state.city}
                    className='separate-cards top-card-only'
                    expand_details
                    forecast={3}
                />
                */}
            </>;



        return (
            <>
                {this.state.weather && this.state.city &&
                    <>
                        {/* 
                        <div className='widget-group-wrap'>
                            <h1>Widget One Vertical</h1>
                            {widget_one_vertical}
                        </div>
                         */}
                        <div className='widget-group-wrap'>
                            <h1>Widget One Horizontal</h1>
                            {widget_one_horizontal}
                        </div>
                        {/* <br /><br /><br /><br /><br /><br /><br />
                        <h1>Demos</h1>
                        <DarkSkyDemo data={this.state.weather} /> */}
                    </>
                }
            </>
        );
    }
}

export default DarkSkyOne;