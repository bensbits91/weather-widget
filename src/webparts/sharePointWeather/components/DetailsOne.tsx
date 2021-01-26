import * as React from 'react';
import { ActivityItem, Icon, Stack } from 'office-ui-fabric-react';
import ListFromObject from './ListFromObject';

const mcc = 'color:magenta;';
const keys_ignore = ['icon', 'summary', 'time', 'precipIntensityError', 'temperature'];

export interface DetailsProps {
    weather: any;
    layout?: string;
    expand_details?: boolean;
    theme?: any;
}
// export interface DetailsState {}

function splitCamelCaseToString(s) {
    return s.split(/(?=[A-Z])/).map(function (p) {
        return p.charAt(0).toUpperCase() + p.slice(1);
    }).join(' ');
}


class Details extends React.Component<DetailsProps, {}> {
    constructor(props: DetailsProps) {
        super(props);
        // this.state = { :  };
    }


    public render() {
        const { weather, theme } = this.props;
        console.log('%c : Details -> render -> this.props', mcc, this.props);
        const color_2 = theme && theme.color_2 ? theme.color_2 : 'black';

        const el_details_two_columns =
            <ListFromObject
                the_object={weather}
                keys_ignore={keys_ignore}
                columns={2}
                icon_color={color_2}
            />;


        const el_details_simple_vertical =
            <ListFromObject
                the_object={weather}
                keys_ignore={keys_ignore}
                icon_color={color_2}
            />;

        return (
            <>
                {!this.props.expand_details && el_details_simple_vertical}
                {this.props.expand_details && el_details_two_columns}
            </>
        );
    }
}

export default Details;