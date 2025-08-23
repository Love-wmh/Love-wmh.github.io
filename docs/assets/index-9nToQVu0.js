import{d as o,j as r,p as i}from"./index-CFAqVv7M.js";const s=o.div`
  padding: 0 0;
`;o.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${e=>e.theme.textColor};
`;const a=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`,c=o.div`
  background-color: ${e=>e.theme.boxBgColor};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`,m=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* 将flex-start改为center实现垂直居中 */
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>e.theme.accentColor};
`,d=o.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>e.theme.accentColor};
`,l=o.span`
  font-size: 0.9rem;
  color: ${e=>e.theme.textColor};
  opacity: 0.8;
  white-space: nowrap;
`,x=o.div`
  margin-bottom: 1rem;
`,p=o.span`
  display: inline-block;
  background-color: ${e=>e.theme.accentColor};
  color: ${e=>e.theme.projectSkillColor};
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`,h=o.p`
  color: ${e=>e.theme.boxTextColor};
  line-height: 1.6;
  margin: 0;
`,b=()=>r.jsx(s,{children:r.jsx(a,{children:i.map(e=>r.jsxs(c,{id:e.linkID,children:[r.jsxs(m,{children:[r.jsx(d,{children:e.name}),r.jsx(l,{children:e.timeRange})]}),r.jsx(x,{children:e.technologies.map((t,n)=>r.jsx(p,{children:t},n))}),r.jsx(h,{children:e.description})]},e.id))})});export{b as default};
