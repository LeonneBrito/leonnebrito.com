import { useEffect } from 'react';
import { Eye } from 'phosphor-react';
import useSWR from 'swr';

import { useTranslation } from '../hooks/useTranslation';

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface ViewsCounterProps {
  slug: string;
  blogPage?: boolean;
}

const ViewsCounter = ({ slug, blogPage }: ViewsCounterProps) => {
  const { data } = useSWR(`/api/blog/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  const { translations } = useTranslation();

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/blog/views/${slug}`, {
        method: 'POST'
      });

    if (blogPage) {
      registerView();
    }
  }, [slug, blogPage]);

  return (
    <span>
      <Eye size={20} />
      {views ? `${views} ${translations.blog.views}` : '–––'}
    </span>
  );
};

export default ViewsCounter;
