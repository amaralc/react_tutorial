import React, { Component } from "react"
import HomeCard from "../ui/HomeCard"

class Home extends Component {
  homeCardReleases = {
    title: "Releases",
    text: " Manage Releases",
    route: "/releases"
  }

  homeCardBacklog = {
    title: "Backlog",
    text: " Manage Backlog",
    route: "/backlog"
  }

  homeCardSprints = {
    title: "Sprints",
    text: " Manage Sprints",
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
