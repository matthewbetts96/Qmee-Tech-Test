import React from "react";
import SpaceXStore from "./store/SpaceXStore";
import { observer, inject } from "mobx-react";
import styled from 'styled-components';
import LaunchTable from "./components/LaunchTable";


interface IAppProps {
	className?: string;
}

@inject('SpaceXStore')
@observer
class App extends React.Component<IAppProps>{
	get injected() {
		return this.props as any as {
			SpaceXStore: SpaceXStore;
		}
	}
	public render() {
		return (
			<LaunchTable/>
		);
	}
}


export default styled(App)`
	.launchNumButton{
		margin-left: 4px;
	}
`;
