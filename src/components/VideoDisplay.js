import React from "react";
import "./VideoDisplay.scss";

export default function VideoDisplay() {
    return (
        <div className="VideoDisplay flex-column">
            <div className="img ">
                <img src="https://images.unsplash.com/photo-1692198669686-0a3959951e11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="duration">05:30</div>
            </div>
            <div className="content flex-column">
                <div className="title flex">
                    <div className="img flex">
                        <img src="https://yt3.ggpht.com/WrjDeIWr2pmRdCKFuEDfvkovr0O_o7gyfT_J_AMJjFk5KR9HGQVirOP0DeimyAoBUHRfH79X=s68-c-k-c0x00ffffff-no-rj" alt="" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, harum. Iusto laborum quam beatae optio.</span>
                </div>
                <div className="middle flex">
                    <div className="number-of-views">Sony Sub</div> ●
                    <div className="posted-on">3 days ago</div> 
                </div>
                <div className="channel-name">TradeFolks</div>
            </div>
        </div>
    );
}
