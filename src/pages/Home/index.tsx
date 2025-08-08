import styled from 'styled-components';

const HomeContainer = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .intro {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>欢迎来到我的个人博客</h1>
      <p className="intro">这里是我分享技术文章、学习心得和日常思考的地方。</p>
      {/* 可以添加最新文章列表或特色内容 */}
    </HomeContainer>
  );
};

export default Home;
