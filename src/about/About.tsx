// TODO: create sections for each 'section' lol

import { Divider, Header, Page, SocialMedia } from "../components";
import { Link } from "react-router-dom";

import "./About.css";
import {
  SOCIAL_MEDIA,
  CURRENT_LANGS,
  FUTURE_LANGS,
  SECTIONS,
} from "../../constants";

export const About: React.FC = () => {
  return (
    <Page>
      <main className="main-about">
        <Header
          title="But, Who Am I?"
          subtitle="what do I do in my day-to-day? why are there a crab above?"
        />

        <section className="mainText-about">
          <SocialMedia />
          <Divider />

          <p>
            Well, my (real) name is <label className="myname">Carlos</label>,
            but you can call me <label className="myname">Aru</label> (ngl, I really like it!).
          </p>
          <p>
            I'm a 21-year-old <label className="cs">Computer Science</label>{" "}
            student, and that's the reason why I'm really into everything about
            low-lever programming; I fell in love with how things work under the
            hood.
          </p>
          <p>
            My favorite language is <label className="rust">Rust</label>, and as
            you can imagine, that's the reason for that cute, tiny, eye-catching
            crab moving side to side at the top of the page. Although, I usually
            program in:
          </p>
          <section className="languages">
            {Object.values(CURRENT_LANGS).map(
              (lang) =>
                lang != "Rust" && (
                  <p key={lang} className={lang}>
                    {lang}
                  </p>
                ),
            )}
          </section>
          <p>Also, I'd like to learn:</p>
          <section className="languages">
            {Object.values(FUTURE_LANGS).map((lang) => (
              <p key={lang} className={lang}>
                {lang}
              </p>
            ))}
          </section>
          <p>
            I have a confession to make: I know I've said that my fav lang is
            <label className="rust"> Rust</label>, but I've been programming using
            <label className="cpp"> C++</label> recently and I'm really getting into it! Idk, I just
            started learning the syntax and suddenly it became my <label className="main-lang">main lang</label>.
          </p>
          <Divider />
          <section className="studysessions">
            <p>
              <label className="date">In November 2024</label> I decided to create an
              X/Twitter account with the main purpose of sharing my CS study sessions.
              I quickly found a friendly community called
              <label className="community"> "Study Buddy"</label> where lots of people
              share their personal <label className="notes">notes</label>,
              <label className="ssview"> study-session views</label>,
              <label className="setup"> setups</label>, and several other
              <label className="etc"> aesthetic things</label>.
            </p>

            <p>
              For instance, this is my usual view when <label className="personal-view">I'm studying at home</label>. It looks nice, doesn't it?
            </p>
            <div className="study-session-view">
              <img
                src="/studysession.webp"
                alt="A photo of a computer scientist's set up"
              />

              <small>I need coffee to work correctly</small>
            </div>
          </section>
          <Divider />
          <p className="logical-problems">
            One of the things I enjoy the most is solving logic problems. I'm
            sure you're familiar with platforms like{" "}
            <label className="leetcode">LeetCode</label> (my favorite btw ☝🏽🤓),{" "}
            <label className="hackerrank">HackerRank</label>,{" "}
            <label className="codesignal">CodeSignal</label>,{" "}
            <label className="codeforces">CodeForces</label>, and so on. I spend
            around 2 hours a day solving these kinds of problems.
          </p>
          <p>If you want to check out my profile, here's my LeetCode:</p>
          <div className="leetcode-profile">
            <img
              src="/leetcode.webp"
              alt="A screenshot of my LeetCode profile"
            />
            <a rel="noreferrer" target="_blank" href={SOCIAL_MEDIA.LEETCODE}>
              LeetCode
            </a>
            <small>I'm a newbie, don't judge me :p</small>
          </div>

          <Divider />
          <p>
            Yup, I've talked about my current studies, my favorite languages,
            and my obsession with LeetCode, but what do I do when I'm not
            programming? Do I play LoL like an average CS or SWE?
          </p>
          <Divider />

          <p className="gardering-text">
            I love <label className="gardering-label">gardening</label>. For a
            few months now, I've been growing various veggies in my garden. My
            dad grew up in a rural area, so he knows a lot about this wonderful
            world.
          </p>
          <p>
            Actually ☝🏽🤓, that's the reason I developed a garden organizer,
            which you can view in the{" "}
            <Link to="/projects">{SECTIONS.PROJECTS}</Link> tab.
          </p>
          <p className="gardering-text">
            At the moment, I'm growing{" "}
            <label className="coriander">coriander</label>,{" "}
            <label className="tomato">tomato</label>,{" "}
            <label className="zucchini">round zucchini</label>,{" "}
            <label className="corn">corn</label>,{" "}
            <label className="carrot">carrot</label>, and a couple more veggies.
            In the <Link to="/life">{SECTIONS.LIFE}</Link> tab, you'll find some
            photos I've taken so far.
          </p>
          <div className="gardering">
            <img src="/radish.webp" alt="A photo of radishes" />
            <small>This is the first one I took c:</small>
          </div>
        </section>
      </main>
    </Page>
  );
};
