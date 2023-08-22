import moment from "moment/moment";
import "./VideoDisplay.scss";
import React from "react";
import numeral from "numeral";
import { useEffect } from "react";
import request from "../API";
import { useState } from "react";

export default function VideoDisplay({ video }) {
    // state
    const [channelUrl, setChannelUrl] = useState("");

    // fetching the data to get the channel image url
    useEffect(() => {
        (async () => {
            const res = await request("/channels", {
                params: {
                    part: "snippet",
                    id: video.snippet.channelId,
                },
            });
            setChannelUrl(res.data.items[0].snippet.thumbnails.medium.url);
        })();
    }, []);

    // duration
    const seconds = moment.duration(video.contentDetails.duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format("mm:ss");

    // console.log('in videodisplay', video)
    return (
        <div className="VideoDisplay flex-column">
            <div className="img ">
                <img src={video.snippet.thumbnails.high.url} alt="" />
                <div className="duration">{_duration}</div>
            </div>
            <div className="content flex-column">
                <div className="title flex">
                    <div className="img flex">
                        <img src={channelUrl} alt="" />
                    </div>
                    <span>{video.snippet.title}</span>
                </div>
                <div className="middle flex">
                    <div className="number-of-views">{numeral(video.statistics.viewCount).format("0.a")} views</div> ● <div className="posted-on">{moment(video.snippet.publishedAt).fromNow()}</div>
                </div>
                <div className="channel-name">{video.snippet.channelTitle}</div>
            </div>
        </div>
    );
}
