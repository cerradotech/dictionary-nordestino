import Link from 'next/link';

import {
  DATE_TYPES,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  ROUTES,
  formatNowDateTo,
  translate,
} from '~/utils';

import {
  Brands,
  ContentWrapper,
  Disclaimer,
  Label,
  Logo,
  Social,
  Wrapper,
} from './footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <Brands>
        <ContentWrapper direction="row">
          <Logo />
          <Social>
            <FiLinkedin />
            <FiYoutube />
            <FiFacebook />
            <FiInstagram />
          </Social>
        </ContentWrapper>
      </Brands>

      <Disclaimer>
        <ContentWrapper>
          <Label>
            {translate('projectOwner')} | {formatNowDateTo(DATE_TYPES.YEAR)} -
            {translate('components.pageWrapper.allRightsReserved')}
            <Link href={ROUTES.HOME}>
              <Label>{translate('components.pageWrapper.termsOfUse')}</Label>
            </Link>
          </Label>
        </ContentWrapper>
      </Disclaimer>
    </Wrapper>
  );
};

export default Footer;
