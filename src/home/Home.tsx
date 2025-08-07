import { EMAIL, SOCIAL_MEDIA } from "../../constants";
import { Divider, Header, Page } from "../components";

import "./Home.css";

export const Home: React.FC = () => {
  return (
    <Page>
      <main className="main-home">
        <Header
          title="Welcome to my website, I'm Aru!"
          subtitle="a 1.65-ish nerd and computer scientist"
        />

        <section className="mainText">
          <p>
            Here you can see my current active projects, find my social media if
            you're interested in my hobbies and study sessions, and view a bunch of
            photos from my day-to-day life. I hope you enjoy them. :p
          </p>
        </section>

        <section className="useful-links">
          <p>
            If you're just interested in work-related matters, here are some
            useful and quick links:
          </p>
          <div>
            <a href={SOCIAL_MEDIA.GITHUB} rel="noreferrer" target="_blank">
              GitHub
            </a>
            <a href={SOCIAL_MEDIA.LINKEDIN} rel="noreferrer" target="_blank">
              Linkedin
            </a>
          </div>
          <p>This is my email:</p>
          <div>
            <a href={"mailto:" + EMAIL}>{EMAIL}</a>
          </div>
        </section>

        <Divider />
      </main>
    </Page>
  );
};
