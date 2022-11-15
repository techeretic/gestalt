// @flow strict
import { Text, Flex, Box, Link, Image, Heading } from 'gestalt';
import { type Node } from 'react';
import MainSection from '../../../docs-components/MainSection.js';
import Page from '../../../docs-components/Page.js';
import PageHeader from '../../../docs-components/PageHeader.js';
import Markdown from '../../../docs-components/Markdown.js';

export default function MessagingComponentsPage(): Node {
  return (
    <Page title="Color">
      <PageHeader badge="pilot" name="Color" type="guidelines" />
      <Markdown
        text={`Pinterest product UI should be comprised of our hero and neutrals colors. We should continue to use our baseline color palette to allow photography, actions, and content to stand out. However, there are situations where color fills can help to express brand moments on product surfaces.

We recommend using the extended color palette to bring attention to a specific brand or marketing moment, such as celebratory news, a new feature announcement, or educational flows. However, be mindful of color choices when applying color fills to UI elements next to status messages, as they use semantic colors to convey a specific meaning. See background color usage for reference.

The Core brand team created a baseline brand palette with some of our extended colors; you can enable it as a library in your Figma file.`}
      />
      <Image
        src="https://i.pinimg.com/originals/6d/5d/f1/6d5df1699ff6d7f176302f94dc28306e.png"
        naturalHeight={1036}
        naturalWidth={1798}
        alt=""
      />
      <Text>Brand color swatches available in Figma (Baseline brand colors library)</Text>
      <Text>
        See below an example of brand expression in the product UI using color fill combined with
        other visual assets.{' '}
      </Text>
      <Image
        src="https://i.pinimg.com/originals/5d/cf/95/5dcf95eb3addf436c1404daf4874d580.png"
        naturalHeight={1216}
        naturalWidth={1792}
        alt=""
      />
      <Text>Idea Pin tips - Using color fills to bring brand expression </Text>
      <Text>
        Reach out to Core Brand for photography guidance, imagery and other types of visual assets.{' '}
      </Text>
      <MainSection.Subsection title="Color fills and dark-mode">
        <Markdown
          text={`Aim for sufficient color contrast in all appearances, no matter the color theme (light or dark mode). Our colors were defined to support you in achieving a reasonable contrast ratio between your foreground and background content in both appearances. At a minimum, ensure the contrast ratio between colors is no lower than 4.5:1, as this ratio ensures that your foreground content stands out from the background and helps your content meet recommended WCAG 2.1 AA accessibility standards.

We suggest checking Brand color expression + accessibility for references on color combination considering both themes. You can also use color pairing Figma plugin to test your color contrast level.
When using images or icons over color fills, ensure they look good in both themes. For icons, use the appropriate color tokens for each theme to provide readability and a great usability experience. For images, we suggest using the same asset if it looks good in both light and dark appearances. Consider softening the image treatment to avoid eye strain or to improve visibility; use your best judgment.

For more information about colors, check out our color documentation.
`}
        />
      </MainSection.Subsection>
      <MainSection.Subsection title="Color fills and typography">
        <Heading>Headings</Heading>
        <Text>
          Avoid using extended colors to text elements, as changing colors could lead to usability
          and cognitive issues due to their semantic meaning and required contrast level. Refer to
          our text color tokens for guidance.
        </Text>
        <Heading>Body</Heading>
        <Text>
          <p>
            Body should always be $color-text-default (default color), $color-text-inverse (text
            over a dark-colored background), or $color-text-subtle (secondary color), with the
            exception of status text colors, as they are needed to convey a certain meaning for
            specific cases.
          </p>
          <p>
            Avoid using alternative colors on body content, which could lead to accessibility
            issues.{' '}
          </p>
          <p>
            Please note: It only applies to product UI elements. For marketing websites, materials
            or promotional landing pages reach out to Core Brand for text color guidance.
          </p>
          <p>
            See below examples of UI elements using the appropriate text colors over color fills.
          </p>
        </Text>
        <Flex gap={4}>
          <Flex.Item>
            <Image
              src="https://i.pinimg.com/originals/6e/f3/5c/6ef35ce8021c2aa5502c18f50f2ef966.png"
              naturalHeight={480}
              naturalWidth={718}
              alt=""
            />
            <Text>Matchacado-green-500 + $color-text-inverse</Text>
          </Flex.Item>
          <Flex.Item>
            <Image
              src="https://i.pinimg.com/originals/e8/49/7c/e8497ce56cdab39f1af97864e31d5a99.png"
              naturalHeight={416}
              naturalWidth={686}
              alt=""
            />
            <Text>Firetine-orange-100 + $color-text-default</Text>
          </Flex.Item>
          <Flex.Item>
            <Image
              src="https://i.pinimg.com/originals/b2/f4/a4/b2f4a4bb96fa7579d13be3c6b1a60874.png"
              naturalHeight={410}
              naturalWidth={694}
              alt=""
            />
            <Text>Spabattical-teal-700 + $color-text-inverse</Text>
          </Flex.Item>
          <Flex.Item>
            <Image
              src="https://i.pinimg.com/originals/c6/3a/6e/c63a6e92a920f4b25698e64c4648b004.png"
              naturalHeight={358}
              naturalWidth={686}
              alt=""
            />
            <Text>Spabattical-teal-100 + $color-text-default</Text>
          </Flex.Item>
        </Flex>
      </MainSection.Subsection>
      <MainSection.Subsection title="Color fills and iconography">
        <Text>
          <p>
            When playing with color fills, we recommend using a tool like aremycolorsaccessible.com
            to check the foreground color against the background color. In Figma, you can use the
            Able or Pinterest brand color palettes plugins to check color contrast in your designs.
          </p>
          <p>
            Section 508, which aligns with WCAG 2.0 Level AA, establishes a legal standard for the
            contrast level essential between text and its background. The baseline AA contrast
            standard is 4.5:1 for most text and 3:1 for large text.{' '}
          </p>
          <p>
            Make sure your color fills have great contrast in our light and dark mode color themes.
          </p>
          <p>
            Don’t use color exclusively to convey meaning. Color should only be used as an
            enhancement — if color is the only cue, that cue won’t get through as intended to
            everyone.{' '}
          </p>
        </Text>
      </MainSection.Subsection>
      <MainSection name="Accessibility">
        <MainSection.Subsection>
          <Text>
            <p>
              Gestalt icons should always use established colors, as our color props are
              semantically aligned with our iconography principles.
            </p>
            <p>
              If colors are needed to express a brand moment on the product, consider adding a
              colored background to the icon instead of adding alternative colors to the icon
              component. Ensure it meets the WCAG 2.1 AA accessibility standard with the proper
              contrast between foreground and background. See the examples below.
            </p>
          </Text>
        </MainSection.Subsection>
        <MainSection.Subsection title="Extended color palette">
          <Text>
            <p>
              The extended color palette displays all the available shades and tints of each color
              in the palette. The colors are named and numbered for easy reference. The usage of
              these colors come in handy for brand moments. In order to ensure accessible contrast
              for color pairings, we require our darkGray Text color to be used for any colors 400
              and below. For 500 and above, we recommend using white. Learn more by checking our
              color palette documentation.
            </p>
            <p>
              The 450 colors are primarily reserved for Brand usage as they are among the least
              accessible colors. This set works best within larger brand moments, and is not
              commonly used for functional color pairings.
            </p>
          </Text>
        </MainSection.Subsection>
      </MainSection>
    </Page>
  );
}
