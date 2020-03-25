import React, { Component } from "react";
import Search from "./Search";
import VideoList from "./VideoList";

class MusicPlayer extends Component {
  state = {
    results: {
      kind: "youtube#searchListResponse",
      etag: '"SJZWTG6xR0eGuCOh2bX6w3s4F94/PZIvuanwaC16qf1nGbvlRNehQ8w"',
      nextPageToken: "CAgQAA",
      regionCode: "TW",
      pageInfo: {
        totalResults: 1000000,
        resultsPerPage: 8
      },
      items: [
        {
          kind: "youtube#searchResult",
          etag: '"SJZWTG6xR0eGuCOh2bX6w3s4F94/GM5bN6Pcl7AGXztPb_sYi1RDxio"',
          id: {
            kind: "youtube#video",
            videoId: "hwLo7aU1Aas"
          },
          snippet: {
            publishedAt: "2019-12-26T15:09:18.000Z",
            channelId: "UCKo-NbWOxnxBnU41b-AoKeA",
            title: "The Best Surfing Clips of 2019",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/hwLo7aU1Aas/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/hwLo7aU1Aas/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/hwLo7aU1Aas/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "SURFER",
            liveBroadcastContent: "none"
          }
        },
        {
          kind: "youtube#searchResult",
          etag: '"SJZWTG6xR0eGuCOh2bX6w3s4F94/yfVam76dXHEx_BigZW-xV7NBxqE"',
          id: {
            kind: "youtube#video",
            videoId: "W7h-Yho8EB0"
          },
          snippet: {
            publishedAt: "2019-06-15T15:21:45.000Z",
            channelId: "UCqhnX4jA0A5paNd1v-zEysw",
            title: "GoPro: Top 10 Surf Moments",
            description:
              "Celebrate International Surf Day with GoPro's Top 10 Surf Moments. Shot 100% on GoPro: http://bit.ly/2wUMwfI Get stoked and subscribe: http://goo.gl/HgVXpQ ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/W7h-Yho8EB0/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/W7h-Yho8EB0/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/W7h-Yho8EB0/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "GoPro",
            liveBroadcastContent: "none"
          }
        },
        {
          kind: "youtube#searchResult",
          etag: '"SJZWTG6xR0eGuCOh2bX6w3s4F94/v7shdW_mR4_8NpdFKhqjjfJtidI"',
          id: {
            kind: "youtube#channel",
            channelId: "UCo_q6aOlvPH7M-j_XGWVgXg"
          },
          snippet: {
            publishedAt: "2012-12-02T06:07:19.000Z",
            channelId: "UCo_q6aOlvPH7M-j_XGWVgXg",
            title: "Jamie O'Brien",
            description: "JOB ~ VLOGS ~ STAY PSYCHED.",
            thumbnails: {
              default: {
                url:
                  "https://yt3.ggpht.com/-I4-8iE3YjY4/AAAAAAAAAAI/AAAAAAAAAAA/FQhqJmOCpI4/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
              },
              medium: {
                url:
                  "https://yt3.ggpht.com/-I4-8iE3YjY4/AAAAAAAAAAI/AAAAAAAAAAA/FQhqJmOCpI4/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
              },
              high: {
                url:
                  "https://yt3.ggpht.com/-I4-8iE3YjY4/AAAAAAAAAAI/AAAAAAAAAAA/FQhqJmOCpI4/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
              }
            },
            channelTitle: "Jamie O'Brien",
            liveBroadcastContent: "none"
          }
        },
        {
          kind: "youtube#searchResult",
          etag: '"SJZWTG6xR0eGuCOh2bX6w3s4F94/z-4-8ZS7WBjxdAkQsCYIrkc2Yi4"',
          id: {
            kind: "youtube#video",
            videoId: "OU4d3O_VZCk"
          },
          snippet: {
            publishedAt: "2020-02-06T19:00:04.000Z",
            channelId: "UCo_q6aOlvPH7M-j_XGWVgXg",
            title: "SURFING WITH KELLY SLATER (HAWAII)",
            description:
              "FUN BARRELS, BEATER SPINS, AND GOOD TIMES WITH SOME OF THE REDBULL SKATEBOARD TEAM! STAY PSYCHED MERCH! HTTP://WWW.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/OU4d3O_VZCk/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/OU4d3O_VZCk/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/OU4d3O_VZCk/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "Jamie O'Brien",
            liveBroadcastContent: "none"
          }
        },
        {
          kind: "youtube#searchResult",
          etag: '"SJZWTG6xR0eGuCOh2bX6w3s4F94/vRr-nhg2aqHKh4ZGjQRzSHo9xXo"',
          id: {
            kind: "youtube#video",
            videoId: "vo1BzyBwZ1E"
          },
          snippet: {
            publishedAt: "2020-03-05T20:00:13.000Z",
            channelId: "UCn8zNIfYAQNdrFRrr8oibKw",
            title: "The Ice Beard Surfers of Lake Superior | Local Legends",
            description:
              "Even in sub-zero temperatures in Upper Peninsula Michigan, you can find one man who surfs Lake Superior. Daniel Schetter, known as “Surfer Dan,” has ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/vo1BzyBwZ1E/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/vo1BzyBwZ1E/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/vo1BzyBwZ1E/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "VICE",
            liveBroadcastContent: "none"
          }
        },
        {
          kind: "youtube#searchResult",
          etag: '"SJZWTG6xR0eGuCOh2bX6w3s4F94/zaiyqHbBJdyoBqfoY2zz481clSU"',
          id: {
            kind: "youtube#video",
            videoId: "67QNw2xQlsk"
          },
          snippet: {
            publishedAt: "2019-01-12T14:00:15.000Z",
            channelId: "UCuZSTHZf3vd7eVehhnotcsg",
            title: "Learn How To Surf In 10 Minutes",
            description:
              "This video is for anyone who wants to learn how to surf! From choosing your equipment, all the way to a step by step guide to standing up. We show you it all.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/67QNw2xQlsk/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/67QNw2xQlsk/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/67QNw2xQlsk/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "How to Rip",
            liveBroadcastContent: "none"
          }
        },
        {
          kind: "youtube#searchResult",
          etag: '"SJZWTG6xR0eGuCOh2bX6w3s4F94/j9grghmhodulrxd04LMAYUHGG8g"',
          id: {
            kind: "youtube#video",
            videoId: "A_0tgAVjQPw"
          },
          snippet: {
            publishedAt: "2018-12-18T03:46:00.000Z",
            channelId: "UCnJ0mt5Cgx4ER_LhTijG_4A",
            title:
              "2018 Billabong Pipe Masters - Final Day Highlights | Triple Crown of Surfing | VANS",
            description:
              "The waves were going off, Medina was going off. Watch the best moments of the final day of the Billabong Pipe Masters! Vans Triple Crown of Surfing is going ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/A_0tgAVjQPw/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/A_0tgAVjQPw/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/A_0tgAVjQPw/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "Vans",
            liveBroadcastContent: "none"
          }
        },
        {
          kind: "youtube#searchResult",
          etag: '"SJZWTG6xR0eGuCOh2bX6w3s4F94/TsB-ZEWwY1Yw0a4n3vjtXs7HdOY"',
          id: {
            kind: "youtube#channel",
            channelId: "UCKo-NbWOxnxBnU41b-AoKeA"
          },
          snippet: {
            publishedAt: "2005-11-02T06:29:47.000Z",
            channelId: "UCKo-NbWOxnxBnU41b-AoKeA",
            title: "SURFER",
            description:
              "We founded SURFER Magazine with a mission: to bring our readers a slice of the entire surfing world with each issue. And for over four decades, we've made ...",
            thumbnails: {
              default: {
                url:
                  "https://yt3.ggpht.com/-JxjgIQiM0mQ/AAAAAAAAAAI/AAAAAAAAAAA/L8WaJRKSSoo/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
              },
              medium: {
                url:
                  "https://yt3.ggpht.com/-JxjgIQiM0mQ/AAAAAAAAAAI/AAAAAAAAAAA/L8WaJRKSSoo/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
              },
              high: {
                url:
                  "https://yt3.ggpht.com/-JxjgIQiM0mQ/AAAAAAAAAAI/AAAAAAAAAAA/L8WaJRKSSoo/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
              }
            },
            channelTitle: "SURFER",
            liveBroadcastContent: "none"
          }
        }
      ]
    },
    selectedVideo: ""
  };

  componentDidMount() {
    const url = "https://www.googleapis.com/youtube/v3/search";
    //'https://www.youtube.com/embed/VIDEO_ID';
  }

  searchSong(name) {
    const url = "https://www.googleapis.com/youtube/v3/search";

    fetch(url).then(res => console.log(res));
    console.log(name);
  }

  selectVideo = id => {
    this.setState({ selectedVideo: id });
  };

  render() {
    const youtubeUrl =
      "http://www.youtube.com/embed/" + this.state.selectedVideo;
    return (
      <div className="uk-container">
        <Search searchSong={this.searchSong} />

        {this.state.selectedVideo ? (
          <div className="uk-margin uk-width-1-1 uk-text-center" uk-scrollspy="target: > div; cls: uk-animation-slide-up; delay: 200">
              <div>
              <button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom" onClick={() => this.setState({selectedVideo: ''})}>
                  Back to videos
              </button>
              
            <iframe
              id="player"
              type="text/html"
              width="640"
              height="360"
              src={youtubeUrl}
              frameborder="0"
            ></iframe>
            </div>
          </div>
        ) : (
          <div class="uk-column-1-4" uk-scrollspy="target: > div; cls: uk-animation-slide-top; delay: 200">
            <VideoList
              results={this.state.results.items}
              selectVideo={this.selectVideo}
            />
          </div>
        )}
      </div>
    );
  }
}
//todo auth app
const apiKey = "";

export default MusicPlayer;
