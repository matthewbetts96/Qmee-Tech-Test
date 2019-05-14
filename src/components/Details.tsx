import React from "react";
import { inject, observer } from "mobx-react";
import SpaceXStore from "../store/SpaceXStore";
import styled from "styled-components";
import { toJS } from "mobx";

interface IDetails {
    className?: string;
    launch?: any;
}

@inject('SpaceXStore')
@observer
class Details extends React.Component<IDetails> {
    get injected() {
        return this.props as any as {
            SpaceXStore: SpaceXStore;
        }
    }

    render() {
        const currentLaunch = this.props.launch.original;
        const ships = toJS(currentLaunch.ships);
        console.log(currentLaunch)
        return (
            <span className={this.props.className}>
                <div className="detailsHolder">
                    <div className="flexRow">
                        <div className="box">
                            <u>Flight Number</u> <p>{currentLaunch.flight_number}</p>
                        </div>
                        <div className={`box ${currentLaunch.launch_success === true ? "green" : "red"}`}  >
                            <u>Launch Success</u>
                            <p>{currentLaunch.launch_success !== null
                                ? currentLaunch.launch_success.toString()
                                : "No Data"}
                            </p>
                        </div>
                        <div className="box">
                            <u>Mission Name</u> <p>{currentLaunch.mission_name}</p>
                        </div>
                        <div className="box">
                            <u>Site Name</u> <p>{currentLaunch.launch_site.site_name_long}</p>
                        </div>
                        <div className="box">
                            <u>Launch Year</u> <p>{currentLaunch.launch_year}</p>
                        </div>
                        <div className="box">
                            <u>Upcoming?</u>
                            {currentLaunch.upcoming.toString() === "true"
                                ? <p>Yes</p>
                                : <p>No</p>
                            }
                        </div>
                    </div>
                    <div>
                        <u>Flight Details:</u> : <p>{currentLaunch.details}</p>
                    </div>
                    <div>
                        <u>Launch Date UTC:</u> <p>{currentLaunch.launch_date_utc}</p>
                    </div>
                    <div>
                        <u>Ships:</u>
                        {
                            ships.length > 0 ? <p>{toJS(currentLaunch.ships).join("\n")}</p> : <p>No Ships.</p>
                        }

                    </div>
                </div>
            </span>
        )
    }
}

export default styled(Details)`
    .detailsHolder {
        padding: 8px;
        display: flex;
        flex-direction: column;
        flex-grow: 5;
        min-width: 500px;
    }

    .flexRow{
        display:flex;
        flex-direction: row;
    }

    .box {
        padding: 4px;
        margin: 4px;
        border-style: outset;
        border-color: black;
    }

    .green {
        background-color: green;
    }

    .red {
        background-color: red;
    }
`;