type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const parmasResolved = (await params).slug
  return { title: `Post: ${parmasResolved}` };
}

export default function Page({ params }: { params: any}) {

  return <h1>Slug: {params.slug}</h1>;
}