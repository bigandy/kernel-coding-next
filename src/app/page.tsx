import styles from "./page.module.css";

import EpisodesList from "@/components/EpisodesList";

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  director: string;
  writer: string;
  characters: string[];
  img_url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  hair: string;
  alias: string[];
  origin: string;
  abilities: string[];
  img_url: string;
}

export default async function Home() {
  const { data, characterInfo } = await getData();
  return (
    <main className={styles.main}>
      <EpisodesList data={data} characterInfo={characterInfo} />
    </main>
  );
}

export const revalidate = 3600; // revalidate every hour

async function getData() {
  const res = await fetch("https://finalspaceapi.com/api/v0/episode");
  const data = await res.json();

  const grabCharacterInfo = async (data: IEpisode[]) => {
    const characters = data.map(({ characters }) => characters);
    const uniqueCharacterUrls = [...new Set(characters.flat())];

    const info: Record<string, { url: string; name: string }> = {};

    // fetch each character and add to info object.
    await Promise.all(
      uniqueCharacterUrls.map(async (url) => {
        return await fetch(url)
          .then((res) => res.json())
          .then((character: ICharacter) => {
            info[url] = { url: character.img_url, name: character.name };
            return;
          });
      })
    );

    return info;
  };
  const characterInfo = await grabCharacterInfo(data);

  return { data, characterInfo };
}
