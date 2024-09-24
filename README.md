# XFlix-Node

XFlix is a video-sharing platform designed to host and share videos worldwide. It facilitates video uploading through external links (e.g., from YouTube) and provides a seamless video playback experience.

- **Backend:** [XFlix Backend](https://xflix-node-teqb.onrender.com)

## Project Overview

During the development of XFlix, the following milestones were achieved:

- **Built XFlix Backend**: Developed the backend infrastructure using Node.js, Express.js, and MongoDB from scratch.
- **Implemented REST APIs**: Developed a set of 5 REST APIs to handle various functionalities of the platform.
- **Enhanced `GET /v1/videos` Endpoint**: Improved the `GET /v1/videos` endpoint to support features such as video title search, filtering by genres and content rating, and sorting by upload date or view count.
- **Utilized MongoDB**: Leveraged MongoDB for persisting video data, ensuring efficient storage and retrieval.
- **Full-stack Deployment**: Integrated the backend with XFlix frontend and deployed the full-stack application for public access.

## Scope of Work

The project scope included the implementation of the following REST APIs:

- `GET /v1/videos`: Retrieve a list of videos with various filtering and sorting options.
- `GET /v1/videos/:videoId`: Retrieve details of a specific video.
- `POST /v1/videos`: Upload a new video.
- `PATCH /v1/videos/:videoId/votes`: Update votes for a specific video.
- `PATCH /v1/videos/:videoId/views`: Update views count for a specific video.

## Skills Utilized

The development of XFlix involved the application of various skills, including:

- **Node.js**: Used for server-side scripting and backend development.
- **Express.js**: Employed to build robust and scalable APIs.
- **MongoDB**: Utilized as the database management system for storing video data.
- **REST API**: Designed and implemented RESTful APIs for communication between frontend and backend.
- **Postman**: Used for testing and documenting APIs during development.

## Images

![XFlix](https://directus.crio.do/assets/d3875f19-8dad-4ed6-9f43-924587394e89?)

![XFlix API contract in Postman](https://cdn-images.imagevenue.com/cb/54/2b/ME1944XA_o.png)

![Request variants supported by “GET /v1/videos” endpoint](https://cdn-images.imagevenue.com/b3/cc/0a/ME1944XB_o.png)

## Getting Started

To get started with XFlix, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.
4. Access the XFlix application through your web browser.
5. Use Postman or any other tool to interact.
