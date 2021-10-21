import React, { Component } from "react";
import "../../Common/css/styles.css";
import appletv from "../../Common/images/icons/apple-tv-logo.png";
import banker from "../../Common/images/home/banker.png";
import watchseries from "../../Common/images/icons/watch-series5-logo.png";

class Fifth extends Component {
  render() {
    return (
    <section className="fifth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={appletv} />
							</div>
						</div>

						<div className="tvshow-logo-wraper">
							<img src={banker} />
						</div>

						<div className="watch-more-wrapper">
							<a href="#">Watch now on the Apple TV App</a>
						</div>
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={watchseries} />
							</div>
						</div>
						<div className="description-wraper">
							With the Always-On Retina display.
                            <br></br>
							You’ve never seen a watch like this.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Buy</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
     
    );
  }
}

export default Fifth;
