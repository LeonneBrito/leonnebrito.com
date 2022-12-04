import Head from 'next/head';
import Image from 'next/image';

interface HeadProps {
  title: string;
  description: string;
  image: string;
}

const HeadComponent = ({ title, description, image }: HeadProps) => {
  const url = process.env.NEXT_PUBLIC_API_URL;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <noscript>
        <Image
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=504450094944793&ev=PageView&noscript=1"
          alt="Facebook Pixel"
        />
      </noscript>
    </Head>
  );
};

export default HeadComponent;
