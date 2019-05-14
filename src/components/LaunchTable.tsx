import React from "react";
import { inject, observer } from "mobx-react";
import SpaceXStore from "../store/SpaceXStore";
import SingularLaunch from "./SingularLaunch";
import ReactTable from 'react-table'
import 'react-table/react-table.css'

interface ILaunchTable {
    className?: string;
}

@inject('SpaceXStore')
@observer
class LaunchTable extends React.Component<ILaunchTable> {
    get injected() {
        return this.props as any as {
            SpaceXStore: SpaceXStore;
        }
    }

    render() {
        return (
            <>
                {this.injected.SpaceXStore.allLaunches ?
                    <div className={this.props.className}>
                        <ReactTable
                            data={this.injected.SpaceXStore.allLaunches}
                            columns={this.injected.SpaceXStore.columns}
                            defaultPageSize= {25}
                            getTrProps={(s, row) => {
                                let selected;
                                if (row === undefined) {
                                    return {};
                                } else {
                                    selected = row;
                                }
                                return {
                                    style: {
                                        backgroundColor: selected.row.flight_number % 2 === 0 ? "Silver" : "LightGray"
                                    }
                                }
                            }}
                            SubComponent={row => {
                                return (
                                    <div>
                                        <SingularLaunch launch={row}/>
                                    </div>
                                )
                            }}
                        />
                    </div> : "Loading data..."}
            </>
        )
    }
}

export default LaunchTable;