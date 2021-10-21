// ********* Function Based Component Way/Managing State Using Hooks *******************************
import React, { useState, useEffect } from "react";
import "./Youtube.css";

function Youtube() {
	// creating state here (useState returns 2 values, initial state and state updater function)
	const [youtubeVideos, SetVideos] = useState([]); // initial state value is empty []
	// fetch data from youtube using fetch method using the URL
	// I want data to be fetched when component loads/initial load, so we use hook's useEffect (same as componentDidMount for class based functions)
	// leave the 2nd argument of useEffect empty array because we want the data fetched only at initial load/initial mounting/ not everytime a state changes
	useEffect(() => {
		fetch(
			"https://www.googleapis.com/youtube/v3/search?key=AIzaSyC8rz7XkgfI3bMM6bCGhGbpn6mjMDpFZvQ&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
		)
			// chaning the json file to JS object using json() method
			.then((response) => response.json())
			// let's call the response converted to JS object "data"
			.then((data) => {
				console.log(data); // logs an object containing the 12 news as an array (under items)
				const youTubeVideosData = data.items;
				// let's use our updater function (SetVideos) to update our state (youtubeVideos)
				// this is where our initial state (empty array) is updated to contain the fetched videos
				SetVideos(youTubeVideosData);
			});
	}, []);
	console.log(youtubeVideos); // the empty array (initial state) now has object of  12 videos in array form

	return (
		<div className="allVideosWrapper">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-12">
						<div className="title-wraper">
							Latest Videos <br />
							<br />
						</div>
					</div>
					{youtubeVideos?.map((singleVideo) => {
						/* if you see array of videos from console, for each video, there is id and videoId under id. This is unique to each video  */

						let vidId = singleVideo.id.videoId;
						let vidLink = "https://www.youtube.com/watch?" + vidId;
						/* ORRRR: let vidLink = `https://www.youtube.com/watch?v=${vidId}`;  */

						let videoWrapper = (
							<div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
								<div className="singleVideoWrapper">
									<div className="videoThumbnail">
										<a href={vidLink} target="_blank">
											<img src={singleVideo.snippet.thumbnails.high.url} />
										</a>
									</div>
									<div className="videoInfoWrapper">
										<div className="videoTitle">
											<a href={vidLink} target="_blank">
												{/* can be found from consoling youtubeVideos and looking at
												one video */}
												{singleVideo.snippet.title}
											</a>
										</div>
										<div className="videoDesc">
											{/* can be found from consoling youtubeVideos and looking at
												one video */}
											{singleVideo.snippet.description}
										</div>
										<div className="videoTitle">
											{singleVideo.snippet.publishedAt}
										</div>
									</div>
								</div>
							</div>
						);
						return videoWrapper;
					})}
				</div>
			</div>
		</div>
	);
}

export default Youtube;

// ********* Class Based Component Way *******************************
// import React, { Component } from "react";
// import "./Youtube.css";

// class Youtube extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			youtubeVideos: [],
// 		};
// 	}
// 	// componentDidMount will make sure our html loads before we do anything, like making the dom ready in pure js
// 	componentDidMount() {
// 		fetch(
// 			"https://www.googleapis.com/youtube/v3/search?key=AIzaSyC8rz7XkgfI3bMM6bCGhGbpn6mjMDpFZvQ&part=snippet,id&order=date&maxResults=9"
// 		)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				const youtubeVideos = data.items;
// 				this.setState((state) => {
// 					return {
// 						youtubeVideos: youtubeVideos,
// 					};
// 				});
// 			});
// 	}

// 	render() {
// 		return (
// 			<div className="allVideosWrapper">
// 				<div className="container">
// 					<div className="row justify-content-center text-center">
// 						<div className="col-12">
// 							<div className="title-wraper">
// 								Latest Videos <br />
// 								<br />
// 							</div>
// 						</div>
// 						{this.state.youtubeVideos?.map((singleVideo) => {
// 							let vidId = singleVideo.id.videoId;
// 							let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
// 							let videoWrapper = (
// 								<div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
// 									<div className="singleVideoWrapper">
// 										<div className="videoThumbnail">
// 											<a href={vidLink} target="_blank">
// 												<img src={singleVideo.snippet.thumbnails.high.url} />
// 											</a>
// 										</div>
// 										<div className="videoInfoWrapper">
// 											<div className="videoTitle">
// 												<a href={vidLink} target="_blank">
// 													{singleVideo.snippet.title}
// 												</a>
// 											</div>
// 											<div className="videoDesc">
// 												{singleVideo.snippet.description}
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							);
// 							return videoWrapper;
// 						})}
// 						{this.videoWrapper};
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default Youtube;
