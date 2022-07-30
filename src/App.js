import styled, { ThemeProvider } from "styled-components";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { useState } from "react";
import todo from "./pics/livetodolist.png";
import chat from "./pics/livemessenger.png";
import pass from "./pics/passwordmanager.png";

const darkTheme = {
  body: "black",
  text: "white",
  icons: "white",
  statusbar: "light-content",
};

const lightTheme = {
  body: "white",
  text: "black",
  icons: "black",
  statusbar: "dark-content",
};

const Wrapper = styled.div`
  padding-top: 50px;
  padding-right: 75px;
  padding-left: 75px;
  background-color: ${(props) => props.theme.body};
  height: 100vh;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 100px;
  line-height: 85px;
  color: ${(props) => props.theme.text};
`;
const Role = styled.h2`
  margin-bottom: 0;
  color: ${(props) => props.theme.text};
`;
const Skills = styled.h3`
  color: ${(props) => props.theme.text};
`;

const Socials = styled.div``;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px;
  border-style: solid;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;
  color: ${(props) => props.theme.text};
`;

const ProjectHeader = styled.h1`
  align-self: center;
  text-decoration: underline;
  text-decoration-thickness: 20px;
  color: ${(props) => props.theme.text};
  font-weight: 900;
`;

const PictureContainer = styled.a`
  padding-top: 50px;
`;

const Picture = styled.img`
  width: auto;
  height: 300px;
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Inspiration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Title = styled.h1`
  margin-bottom: 0;
  font-size: 60px;
  color: ${(props) => props.theme.text};
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 25px;
  letter-spacing: 0px;
  font-weight: 900;
  color: ${(props) => props.theme.text};
`;

const Test = styled.div`
  background-image: url("./pics/mountain.jpg");
`;

function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <button onClick={() => toggleTheme()} />
      <Wrapper>
        <TopSection>
          <AboutMe>
            <Name>
              WINSTON <br />
              CHAN
            </Name>
            <Role>SOFTWARE ENGINEER AT STRIVE TECH</Role>
            <Skills>
              JAVASCRIPT | TYPESCRIPT | PYTHON
              <br />
              REACT JS | NODE JS
            </Skills>
          </AboutMe>
          <Socials>
            <FaLinkedin
              size='75px'
              backgroundColor={isDarkTheme ? darkTheme.body : lightTheme.body}
              color={isDarkTheme ? darkTheme.icons : lightTheme.icons}
            ></FaLinkedin>
            <FaGithubSquare
              size='75px'
              style={{ paddingLeft: 20 }}
              backgroundColor={isDarkTheme ? darkTheme.body : lightTheme.body}
              color={isDarkTheme ? darkTheme.icons : lightTheme.icons}
            ></FaGithubSquare>
          </Socials>
        </TopSection>
        <BottomSection>
          <ProjectHeader>PROJECTS</ProjectHeader>
          <ProjectsContainer>
            <PictureContainer>
              <Picture src={todo}></Picture>
            </PictureContainer>
            <PictureContainer>
              <Picture src={pass}></Picture>
            </PictureContainer>
            <PictureContainer>
              <Picture src={chat}></Picture>
            </PictureContainer>
          </ProjectsContainer>
        </BottomSection>
      </Wrapper>
      <Wrapper>
        <Bio>
          <Title>About Me</Title>
          <Description>
            Hi! This is my personal portfolio I designed using a mixture of
            <br />
            JavaScript, React, Three.js and Tailwind. Im currently studying
            <br />
            Mechanical Engineering at the University at Buffalo entering into my
            <br />
            senior year. During my free time I like to create web applications,
            <br />
            work on my coding skills, and work out. After I graduate I hope to
            <br />
            pursue software development full time.
          </Description>
        </Bio>
        <Inspiration>
          <Title>Project Inspiration</Title>
          <Description>
            My priority when choosing a project is being able to find something
            <br />
            that I could implement in my life. I like creating projects that
            <br />
            have actual purpose and something I could use on the day-to-day.
            <br />
            Doing this allows me to experience the application from a user's
            <br />
            perspective and implement features I think are lacking. These
            <br />
            projects have been a good opportunity for me to learn the several
            <br />
            stacks out there as well as push my limits while creating something
            <br />
            fun and interactive.
          </Description>
        </Inspiration>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
