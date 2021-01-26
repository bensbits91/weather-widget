import * as React from 'react';
import { ActivityItem, Icon, Stack } from 'office-ui-fabric-react';

const mcc = 'color:lime;';

export interface ListFromObjectProps {
    the_object: any;
    keys_ignore?: any;
    icon_name?: string;
    icon_color?: string;
    columns?: number;
}

// export interface ListFromObjectState {}


function splitCamelCaseToString(s) {
    return s.split(/(?=[A-Z])/).map(function (p) {
        return p.charAt(0).toUpperCase() + p.slice(1);
    }).join(' ');
}


class ListFromObject extends React.Component<ListFromObjectProps, {}> {
    constructor(props: ListFromObjectProps) {
        super(props);
        // this.state = { :  };
    }

    public render() {

        const { the_object, keys_ignore, icon_name, icon_color, columns } = this.props;

        const temp_obj = JSON.parse(JSON.stringify(the_object));

        Object.keys(temp_obj).map((key, index) => {
            if (!temp_obj[key]) delete temp_obj[key];
        });
        keys_ignore.map(k => {
            delete temp_obj[k];
        });

        const i_color = icon_color ? icon_color : 'black';
        console.log('%c : ListFromObject -> render -> i_color', mcc, i_color);

        const el_list = columns && columns === 2 ?

            <Stack horizontal className='nice-list-two-cols'>
                <div>
                    {Object.keys(temp_obj).map((key, index) => {
                        if (temp_obj[key] && index < Object.keys(temp_obj).length / 2) {
                            const ai = {
                                key: index,
                                activityDescription: [
                                    <span>
                                        {splitCamelCaseToString(key)}
                                    </span>,
                                    <span key={2}>: </span>,
                                    <span key={3}>{temp_obj[key]}</span>,
                                ],
                                activityIcon: <Icon style={{ color: i_color }} iconName={icon_name || 'WebAppBuilderFragment'} />,
                                isCompact: true,
                            }
                            return <ActivityItem
                                {...ai}
                                key={ai.key}
                            />;
                        }
                    })}
                </div>
                <div>
                    {Object.keys(temp_obj).map((key, index) => {
                        if ((!keys_ignore || keys_ignore.indexOf(key) === -1) && temp_obj[key] && index > Object.keys(temp_obj).length / 2 - 1) {
                            const ai = {
                                key: index,
                                activityDescription: [
                                    <span>
                                        {splitCamelCaseToString(key)}
                                    </span>,
                                    <span key={2}>: </span>,
                                    <span key={3}>{temp_obj[key]}</span>,
                                ],
                                activityIcon: <Icon style={{ color: i_color }} iconName={icon_name || 'WebAppBuilderFragment'} />,
                                isCompact: true,
                            }
                            return <ActivityItem
                                {...ai}
                                key={ai.key}
                            />;
                        }
                    })}
                </div>
            </Stack>


            : Object.keys(temp_obj).map((key, index) => {
                const ai = {
                    key: index,
                    activityDescription: [
                        <span>
                            {splitCamelCaseToString(key)}
                        </span>,
                        <span key={2}>: </span>,
                        <span key={3}>{temp_obj[key]}</span>,
                    ],
                    activityIcon: <Icon style={{ color: i_color }} iconName={icon_name || 'WebAppBuilderFragment'} />,
                    isCompact: true,
                }
                return <ActivityItem
                    {...ai}
                    key={ai.key}
                />;
            });


        return (
            el_list
        );
    }
}

export default ListFromObject;