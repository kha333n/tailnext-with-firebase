import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import { contentHomeOne, featuresHome, heroHome, socialProofHome, stepsHome } from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      {/*Brief introduction about Usman Khan, highlighting his expertise as a Laravel Developer and mentioning his involvement in other development-related work.
Use a professional profile picture of Usman Khan.
*/}
      <Hero {...heroHome} />

      <SocialProof {...socialProofHome} />

      {/*what I do*/}
      {/*Highlight Usman Khan's skills and services offered, such as Laravel development, PHP development, jQuery, HTML, etc.
Use icons or graphics to visually represent each skill.*/}
      <Features {...featuresHome} />

      {/*Work Experience Section:*/}
      {/*Showcase Usman Khan's work experience, including current and previous positions.
Mention notable projects or achievements.*/}
      <Steps {...stepsHome} />
      {/*Personal Details Section:*/}
      {/*Display personal details such as location, education, and contact information.
Optionally, include a link to download Usman Khan's resume.*/}
      <Content {...contentHomeOne} />
      {/*Blog Section:*/}
      {/*Feature recent blog posts written by Usman Khan.
Include a "Read More" button or link to encourage visitors to explore the blog further.*/}
      {/*<Testimonials {...testimonialsHome} />*/}
      {/*<FAQs2 {...faqs2Home} />*/}
      {/*<Pricing {...pricingHome} />*/}
      {/*<Team {...teamHome} />*/}
      {/*<Contact {...contactHome} />*/}
      {/*<CallToAction2 {...callToAction2Home} />*/}
    </>
  );
}
