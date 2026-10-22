export type Verification = "verified" | "reported" | "review";
export type Editorial = { source?: string; verification: Verification; approved: boolean };
export type Milestone = Editorial & { year: string; title: string; description: string };
export type MediaItem = Editorial & { category: "By Cynthia" | "About Cynthia" | "Appearances"; date: string; title: string; description: string; url?: string };
export const profile = {
 name: "Cynthia Horner",
 descriptor: "Entertainment Journalist · Publisher · Media Leader",
 eyebrow: "CULTURE, JOURNALISM & THE STORIES THAT ENDURE",
 intro: "A career devoted to telling the stories of Black entertainment—and continuing the conversation as media evolves.",
 biography: [
 "Cynthia Horner is an entertainment journalist, editor, publisher and media entrepreneur whose work connects generations of Black popular culture with the history of entertainment publishing.",
 "A graduate of Pepperdine University, she joined Right On! Magazine during its formative years and went on to develop a career across interviews, editorial leadership and publishing. Her reporting history includes an early interview with Prince, alongside decades of coverage of music and entertainment.",
 "Her work also spans the digital era through Right On! Digital. Today, Horner continues contributing to entertainment journalism and serves as president of the New York Association of Black Journalists."
 ],
 contactEmail: null as string | null,
 socialLinks: [] as { label: string; url: string }[],
 portrait: null as string | null
};
export const milestones: Milestone[] = [
 {year:"1975",title:"Pepperdine University",description:"Graduated from Seaver College following early involvement in student journalism.",verification:"verified",approved:false,source:"https://pepperdine-graphic.com/from-south-la-to-malibu-the-effects-still-ripple/"},
 {year:"c. 1976",title:"Right On! Magazine",description:"Joined the publishing operation behind Right On! and developed a career in entertainment journalism.",verification:"reported",approved:false},
 {year:"1979",title:"Interviewing Prince",description:"An early interview with Prince became part of Right On!'s archival record.",verification:"verified",approved:false,source:"https://rightondigital.com/2018/06/14/exclusive-princes-first-interview-with-right-ons-cynthia-horner/"},
 {year:"2017",title:"Right On! Digital",description:"A new digital publishing chapter developed through Right On! Media Holdings.",verification:"reported",approved:false,source:"https://rightondigital.com/about-right-on/"},
 {year:"2023",title:"Black Media Honors",description:"Recognized with a Media Icon Award.",verification:"reported",approved:false},
 {year:"2025",title:"Professional recognition",description:"Recognized by NYABJ and the Living Legends Foundation.",verification:"reported",approved:false},
 {year:"2026",title:"Journalism leadership",description:"Serves as president of the New York Association of Black Journalists.",verification:"verified",approved:false,source:"https://nyabj.org/about"}
];
export const media: MediaItem[] = [
 {category:"By Cynthia",date:"2018",title:"An Early Conversation with Prince",description:"A published retrospective revisiting Cynthia Horner's interview with the musician.",url:"https://rightondigital.com/2018/06/14/exclusive-princes-first-interview-with-right-ons-cynthia-horner/",verification:"verified",approved:false},
 {category:"By Cynthia",date:"2018",title:"My Friendship with Michael Jackson",description:"A first-person remembrance of the artist and their relationship, in Cynthia's own words.",url:"https://rightondigital.com/2018/07/04/my-friendship-with-michael-jackson-the-king-of-pop/",verification:"verified",approved:false},
 {category:"About Cynthia",date:"2018",title:"Cynthia Horner in Conversation with AllHipHop",description:"An interview about journalism, publishing and the media business.",url:"https://allhiphop.com/features/ahhpowerfulwomen-cynthia-horner-urban-medias-mother-still-inspires/",verification:"reported",approved:false},
 {category:"Appearances",date:"2025",title:"NYABJ President's Award",description:"Recognition for her contributions to journalism and media.",verification:"reported",approved:false}
];
export const publications = [
 {name:"Right On! Magazine",period:"Legacy publication",description:"A print publication launched in 1971 that became part of the history of Black music and youth culture."},
 {name:"Right On! Digital",period:"Digital publishing",description:"Contemporary entertainment coverage and an extension of the Right On! publishing story."},
 {name:"Hip Hop Weekly",period:"Historical editorial role",description:"An additional chapter of Cynthia's entertainment publishing career; dates and responsibilities await confirmation."}
];
export const approvalNotes = [
 "Approve current title(s) and NYABJ term dates.",
 "Approve all biographies and feature descriptions before launch.",
 "Supply a licensed current portrait and selected cleared archival images.",
 "Confirm exact publishing and ownership transition dates.",
 "Approve a professional email, social links and whether bookings are accepted.",
 "Verify source URLs and image permissions before production publication."
];