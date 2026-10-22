import { useState } from "react";
const nav = ["Home", "About", "Legacy", "Media", "Contact"] as const;
type Page = typeof nav[number];
export default function App() {
 const [page,setPage]=useState<Page>("Home");
 const content: Record<Page,{eyebrow:string; title:string; description:string}> = {
  Home:{eyebrow:"JOURNALISM / PUBLISHING / LEADERSHIP",title:"Cynthia Horner",description:"Entertainment journalist, editor, publisher, and media leader. An ongoing career documenting Black entertainment and the changing landscape of journalism."},
  About:{eyebrow:"ABOUT CYNTHIA",title:"A lifetime in journalism.",description:"Cynthia Horner graduated from Pepperdine in 1975 and developed her career across entertainment publishing, editorial leadership, and media entrepreneurship. Full biography awaiting client approval."},
  Legacy:{eyebrow:"CAREER & LEGACY",title:"Stories that endure.",description:"From the pages of Right On! Magazine to the digital era. Historical milestones, archived interviews and publication assets will appear after verification and rights clearance."},
  Media:{eyebrow:"INTERVIEWS & FEATURES",title:"The story continues.",description:"Selected current journalism, appearances and features. Links, excerpts and media assets are pending editorial review."},
  Contact:{eyebrow:"PROFESSIONAL INQUIRIES",title:"Get in touch.",description:"For interviews, speaking invitations, and professional collaborations. Approved contact details and secure forms are being prepared."}
 };
 const c=content[page];
 return <><header className="header"><button className="wordmark" onClick={()=>setPage("Home")} aria-label="Cynthia Horner home">CH<span>.</span></button><nav aria-label="Main navigation">{nav.map(n=><button key={n} className={page===n?"active":""} onClick={()=>setPage(n)}>{n}</button>)}</nav></header><main><section className="hero"><div className="index">CYNTHIA HORNER / PERSONAL WEBSITE</div><p className="eyebrow">{c.eyebrow}</p><h1>{c.title}</h1><p className="lede">{c.description}</p><div className="rule"/><p className="note">Independent editorial profile · Prototype content subject to verification and approval</p></section></main><footer><span>© {new Date().getFullYear()} Cynthia Horner</span><span>Journalism · Culture · Leadership</span></footer></>;
}
