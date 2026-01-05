// Home page
export const HOME_QUERY = `
*[_type == "home"][0]{
  title,
  heroText,
  heroImage{
    asset->{url}
  },
  ctaText,
  featuredHomily->{
    title,
    date,
    scripture,
    content[0..2]
  },
  seo
}
`;

// About / Generic Pages
// Used for: About the Ministry
// Any static page
export const PAGE_QUERY = `
*[_type == "page" && slug.current == $slug][0]{
  title,
  content,
  image{
    asset->{url}
  },
  seo
}
`;

// Homlies page
export const HOMILIES_QUERY = `
*[_type == "homily"] | order(date desc){
  _id,
  title,
  date,
  scripture,
  category
}
`;

//Single Homily
export const HOMILY_QUERY = `
*[_type == "homily" && _id == $id][0]{
  title,
  date,
  scripture,
  audio,
  content,
  category,
  seo
}
`;

// Prayers and Devotional
export const PRAYERS_QUERY = `
*[_type == "prayer"]{
  title,
  category,
  content
}
`;

// Music and Worship
export const MUSIC_QUERY = `
*[_type == "music"]{
  title,
  artist,
  audioUrl,
  lyrics
}
`;

// Online Radio
export const RADIO_QUERY = `
*[_type == "radio"][0]{
  streamUrl,
  schedule,
  currentProgram
}
`;

// eBooks and Publications
export const PUBLICATIONS_QUERY = `
*[_type == "publication"]{
  title,
  description,
  price,
  cover{
    asset->{url}
  },
  file{
    asset->{url}
  }
}
`;

// News / Events (Upcoming)
export const EVENTS_QUERY = `
*[_type == "event" && date >= now()] | order(date asc){
  title,
  date,
  location,
  description,
  image{
    asset->{url}
  }
}
`;

//Donation page
export const DONATION_QUERY = `
*[_type == "donationPage"][0]{
  message,
  bankDetails,
  paymentLink
}
`;

// Newsletter Section
export const NEWSLETTER_QUERY = `
*[_type == "newsletter"][0]{
  headline,
  description
}
`;

// 📞 Contact Page
export const CONTACT_QUERY = `
*[_type == "contactPage"][0]{
  address,
  email,
  phone,
  socialLinks
}
`;

// SEO Fragment (Optional Reuse)
export const SEO_FIELDS = `
seo{
  metaTitle,
  metaDescription,
  ogImage{
    asset->{url}
  }
}
`;

// Magazine Landing page
export const MAGAZINE_LANDING_QUERY = `
*[_type == "magazineLanding"][0]{
  title,
  subtitle,
  heroImage{
    asset->{url}
  },
  aboutMagazine,
  mission,
  editorNote,
  seo
}
`;

// 📚 Magazine Issues List
export const MAGAZINE_ISSUES_QUERY = `
*[_type == "magazineIssue"] | order(publishDate desc){
  issueNumber,
  slug,
  publishDate,
  cover{
    asset->{url}
  }
}
`;

// 📝 Single Magazine Article Page
export const MAGAZINE_ISSUE_QUERY = `
*[_type == "magazineIssue" && slug.current == $slug][0]{
  issueNumber,
  publishDate,
  cover{
    asset->{url}
  },
  articles[]->{
    title,
    slug,
    author,
    image{
      asset->{url}
    }
  }
}
`;
