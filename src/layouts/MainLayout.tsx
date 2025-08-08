import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContent = styled.main`
  display: flex;
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`

const ContentArea = styled.div`
  flex: 1;
  margin-right: 2rem;
`

const MainLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <ContentArea>
          <Outlet /> {/* 页面内容将在这里渲染 */}
        </ContentArea>
        <Sidebar />
      </MainContent>
      <Footer />
    </LayoutContainer>
  )
}

export default MainLayout
