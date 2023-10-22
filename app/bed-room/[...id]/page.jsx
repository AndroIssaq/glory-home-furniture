import { createClient } from 'contentful';
import Image from 'next/image';
import SingleProduct from '@/components/SingleProduct';
import RelatedProducts from '@/components/RelatedProducts';

export async function getStaticPaths() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntries({ content_type: 'bedRooms' });
    const paths = res.items.map((item) => ({
      params: { id: item.sys.id },
    }));
    return { paths, fallback: true };
  } catch (err) {
    console.error('Error fetching data:', err);
    return { paths: [], fallback: true };
  }
}

export async function getStaticProps({ params }) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntries({
      content_type: 'bedRooms',
      'sys.id': params.id,
    });
    if (!res.items.length) {
      return { notFound: true };
    }
    const bedroom = res.items[0];
    return {
      props: { bedroom },
      revalidate: 10,
    };
  } catch (err) {
    console.error('Error fetching data:', err);
    return { notFound: true };
  }
}

const BedRooms = ({ bedroom }) => {
  const { name, images, price, description } = bedroom.fields;
  const imageData = images[0].fields.file;
  return (
    <>
      <SingleProduct
        name={name}
        price={price}
        description={description}
        image={imageData}
      />
      <RelatedProducts page="bed-room" id={bedroom.sys.id} />
    </>
  );
};

export default BedRooms;