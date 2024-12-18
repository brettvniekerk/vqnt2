import AppSection from "@/components/containers/AppSection";
import Paragraph from "@/components/text/Paragraph";
import SectionHeading from "@/components/text/SectionHeading";
import { SITE_TITLE, SITE_TITLE_LONG } from "@/constants/general";
import { FC, Fragment } from "react";

const Home: FC = () => {
  return (
    <Fragment>
      <AppSection className="text-center">
        <SectionHeading big>{SITE_TITLE}</SectionHeading>

        <Paragraph white wide>
          {SITE_TITLE_LONG}
        </Paragraph>
      </AppSection>
    </Fragment>
  );
};

export default Home;
