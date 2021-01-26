import * as React from 'react';

import Forecast from 'react-forecast';

export interface WeatherProps {

}

// export interface WeatherState {}

class Weather extends React.Component<WeatherProps, {}> {
    constructor(props: WeatherProps) {
        super(props);
        // this.state = { :  };
    }
    render() {
        return (
            <Forecast latitude={48.08} longitude={11.35} name='Munich' />
        );
    }
}

export default Weather;