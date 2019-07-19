import React, { Component } from "react"
import HomeCard from "../ui/HomeCard"

class Home extends Component {
  homeCardReleases = {
    title: "Releases",
    text: " Go to Releases",
    route: "/releases"
  }

  homeCardBacklog = {
    title: "Backlog",
    text: " Go to Backlog",
    route: "/backlog"
  }

  homeCardSprints = {
    title: "Sprints",
    text: " Go to Sprints",
    route: "/sprints"
  }

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <HomeCard
            title={this.homeCardReleases.title}
            text={this.homeCardReleases.text}
            route={this.homeCardReleases.route}
          />
          <HomeCard {...this.homeCardBacklog} />
          <HomeCard {...this.homeCardSprints} />
        </div>
      </div>
    )
  }
}

export default Home
