import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'HelloWorld',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Home() {
  const t = useTranslations('RootLayout');

  return (
    <main>
      <span>{`${t('home_link')} `}</span>
    </main>
  );
}
