import talentData from './data.json';

const rawBio = talentData.biography ?? 'Meet this VSTAR PROJECT talent.';
const description = rawBio.replace(/\s+/g, ' ').trim().slice(0, 155);

export const metadata = {
  title: talentData.name,
  description,
  openGraph: {
    title: talentData.name,
    description,
    url: 'https://vstarproject.eu/talents/dee',
  },
};

export default function Layout({ children }) {
  return children;
}
