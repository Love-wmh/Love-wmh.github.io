import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.backgroundColor};
`

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`

export const CopyrightText = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <CopyrightText>
          © {new Date().getFullYear()}-{new Date().getMonth() + 1}-{new Date().getDate()}
          &nbsp;Welcome to my blog
        </CopyrightText>
      </FooterContent>
    </StyledFooter>
  )
}
