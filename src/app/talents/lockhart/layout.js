import talentData from './data.json';

const rawBio = talentData.lockhart?.biography ?? 'Meet this VSTAR PROJECT talent.';
const description = rawBio.replace(/\s+/g, ' ').trim().slice(0, 155);

export const metadata = {
  title: talentData.lockhart?.name ?? 'Lockhart',
  description,
  openGraph: {
    title: talentData.lockhart?.name ?? 'Lockhart',
    description,
    url: 'https://vstarproject.eu/talents/lockhart',
  },
};

export default function Layout({ children }) {
  return children;
}
