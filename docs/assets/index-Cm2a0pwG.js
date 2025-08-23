import{d as o,j as t,a as r}from"./index-CFAqVv7M.js";const p=()=>t.jsx(a,{children:t.jsx(n,{children:r.map(e=>t.jsxs(i,{children:[t.jsx(l,{children:e.title}),t.jsxs(s,{children:[t.jsx(c,{children:e.category}),t.jsx(d,{children:e.date})]}),t.jsx(m,{children:e.excerpt}),t.jsx(h,{href:`/articles/${e.id}`,children:"阅读全文 →"})]},e.id))})}),a=o.div`
  max-width: 1200px;
  margin: 0 auto;
`,n=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: ${e=>e.theme.modelMaxWidth}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,i=o.div`
  background: ${e=>e.theme.boxBgColor};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`,s=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,c=o.span`
  background: ${e=>e.theme.accentColor};
  color: ${e=>e.theme.projectSkillColor};
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`,l=o.h3`
  font-size: 1.2rem;
  color: ${e=>e.theme.textColor};
  margin: 0 0 1rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${e=>e.theme.accentColor};
  }
`,d=o.span`
  color: ${e=>e.theme.textColor};
  opacity: 0.8;
  font-size: 0.9rem;
`,m=o.p`
  color: ${e=>e.theme.textColor};
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  opacity: 0.9;
`,h=o.a`
  display: inline-block;
  color: ${e=>e.theme.accentColor};
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease;
  &:after {
    content: '';
    position: absolute;
    bottom: -5px; /* 距离文字底部5px */
    left: 50%; /* 初始位置居中 */
    width: 0; /* 初始宽度为0 */
    height: 2px;
    background-color: ${e=>e.theme.accentColor}; /* 下划线颜色为强调色 */
    transition:
      width 0.3s ease,
      left 0.3s ease; /* 宽度和位置过渡动画 */
  }
  /* hover效果 */
  &:hover {
    transform: translateX(5px);
    border-left: transparent solid 3px;
    cursor: pointer;
    color: ${e=>e.theme.accentColor}; /* 文字变为强调色 */
    /* 下划线从中间向两边展开 */
    &:after {
      width: 100%; /* 宽度变为100% */
      left: 0; /* 位置从左开始 */
    }
  }
`;export{d as ArticleDate,c as CategoryBadge,p as default};
