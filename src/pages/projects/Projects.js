import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const languageIconMap = {
  JavaScript: "logos-javascript",
  TypeScript: "logos-typescript-icon",
  Python: "logos-python",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  Java: "logos-java",
  "C#": "logos-c-sharp",
  "C++": "logos-c-plusplus",
  Shell: "simple-icons:shell",
  Dockerfile: "simple-icons:docker",
  "Jupyter Notebook": "logos-jupyter",
  Go: "logos-go",
  Ruby: "logos-ruby",
  PHP: "logos-php",
  Swift: "logos-swift",
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: ProjectsData.data,
    };
  }

  componentDidMount() {
    const githubProfile = greeting.githubProfile || "";
    const usernameMatch = githubProfile.match(/github\.com\/([^/]+)/i);
    const username = usernameMatch ? usernameMatch[1] : "";

    if (!username) {
      return;
    }

    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub repositories");
        }
        return response.json();
      })
      .then((repos) => {
        this.setState({
          repos: repos.map((repo) => ({
            id: repo.id,
            name: repo.name,
            createdAt: repo.created_at,
            url: repo.html_url,
            description: repo.description || "No description provided.",
            isFork: repo.fork,
            languages: repo.language
              ? [
                  {
                    name: repo.language,
                    iconifyClass:
                      languageIconMap[repo.language] || "simple-icons:github",
                  },
                ]
              : [],
          })),
        });
      })
      .catch(() => {
        this.setState({ repos: ProjectsData.data });
      });
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
												src={require(`../../assets/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
											/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {this.state.repos.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
