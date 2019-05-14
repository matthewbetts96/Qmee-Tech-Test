import React from "react";
import { inject, observer } from "mobx-react";
import SpaceXStore from "../store/SpaceXStore";
import styled from "styled-components";
import Details from "./Details";
import Links from "./Links";

interface ISingularLaunch {
	className?: string;
	launch?: any;
}


@inject('SpaceXStore')
@observer
class ISingularLaunch extends React.Component<any, ISingularLaunch> {
	get injected() {
		return this.props as any as {
			SpaceXStore: SpaceXStore;
		}
	}

	render() {
		return (
			<>
				<div className={this.props.className}>
					{this.injected.SpaceXStore.allLaunches ?
						<div className="launchDetails">
							<Details launch={this.props.launch} />
							<div className="filler" />
							<Links launch={this.props.launch} />
						</div>
						: "Loading...."}
				</div>
			</>
		)
	}
}

export default styled(ISingularLaunch)`
	.launchDetails {
		display: flex;
		flex-direction: row;
		align-items: stretch;
	}

	.filler {
		flex-grow: 1;
	}

`;