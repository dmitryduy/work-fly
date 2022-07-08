import { FC } from 'react';

import Button from '../../ui/Button';
import Icon from '../../ui/Icon';

import { MainTitle, Header, MainContainer, Wrapper, SubTitle, AuthLink, Form } from './AuthLayout.style';
import { IAuthLayoutProps } from './auth-layout.interface';
import BackgroundImage from './BackgroundImage';


const AuthLayout: FC<IAuthLayoutProps> = ({ children, type }) => {
  return (
    <Wrapper>
      <Header>
        <div>
          <Icon name="logo" width={72} height={42}/>
        </div>
        <Button styleMod="naked" size="M">Sign In</Button>
      </Header>
      <main>
        <MainContainer>
          <div>
            <MainTitle>Connect your team with WorkFly</MainTitle>
            {type === 'register' && <span>1/3 - Registration</span>}
            <SubTitle>
              {type === 'register' ? 'Already have an account? ' : 'Have no account? '}
              <AuthLink>{type === 'register' ? 'Sign in' : 'Registration'}</AuthLink>
            </SubTitle>
            <BackgroundImage type={type}/>
          </div>
          <Form>{children}</Form>
        </MainContainer>
      </main>
    </Wrapper>
  );
};

export default AuthLayout;
