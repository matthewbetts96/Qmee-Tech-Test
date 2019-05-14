import React from "react";
import { inject, observer } from "mobx-react";
import SpaceXStore from "../store/SpaceXStore";
import styled from "styled-components";
import YouTube from 'react-youtube';

interface ILinks {
    className?: string;
    launch?: any;
}

@inject('SpaceXStore')
@observer
class Links extends React.Component<ILinks> {
    get injected() {
        return this.props as any as {
            SpaceXStore: SpaceXStore;
        }
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const opts = {
            height: '400',
            width: '600',
            playerVars: {
                autoplay: 0
            }
        };
        const links = this.props.launch.original.links;
        return (
            <div className={this.props.className}>
                <div className="flexBox">
                    <div className="linksHolder">
                        {links.mission_patch_small !== null
                            ? <img alt="patch" src={links.mission_patch_small} />
                            : <img alt="patch" src={"https://via.placeholder.com/256x256?text=No Image"} />}
                        Media Links:
                    <ul>
                            {links.reddit_campaign && <li><a href={links.reddit_campaign}>Reddit Campaign</a></li>}
                            {links.reddit_launch && <li><a href={links.reddit_launch}>Reddit Launch</a></li>}
                            {links.reddit_media && <li><a href={links.reddit_media}>Reddit Media</a></li>}
                            {links.reddit_recovery && <li><a href={links.reddit_recovery}>Reddit Recovery</a></li>}
                            {links.wikipedia && <li><a href={links.wikipedia}>Wikipedia</a></li>}
                            {links.video_link && <li><a href={links.video_link}>Youtube Link</a></li>}
                        </ul>
                    </div>
                    {
                        links.youtube_id !== null
                            ? <YouTube
                                videoId={links.youtube_id}
                                opts={opts}
                                onReady={this._onReady}
                            />
                            : <img alt="video" src={"https://via.placeholder.com/300x300?text=No Video"} />
                    }
                </div>
            </div>
        )
    }
}

export default styled(Links)`
	.linksHolder{
        display: flex;
        min-width: 600px;
        background-color: Gainsboro;
    }

    .flexBox {
        display:flex;
        flex-grow:1;
        flex-direction:column;
    }
`;