export interface ISingularLaunch {
    details: string;
    flight_number: number;
    launch_date_local: string;
    launch_date_utc: string;
    launch_site: ILaunchSite;
    launch_year: string;
    launch_success: boolean;
    mission_name: string;
    mission_id: string[]
    ships: string[];
    links: ILinks;
    rocket: IRocket;
    upcoming: boolean;
}

export interface IRocket {
    rocket_name: string;
    rocket_type: string;
}

export interface ILinks {
    video_link: string;
    youtube_id: string;
    mission_patch: string;
    mission_patch_small: string;
    reddit_campaign: string;
    reddit_launch: string;
    reddit_media: string;
    reddit_recovery: string;
    wikipedia: string;
}

export interface ILaunchSite {
    site_id: string;
    site_name: string;
    site_name_long: string;
}