'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '../ui/input';

const NavSearch = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/products?${params.toString()}`);
  }, 200);

  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('');
    }
  }, [searchParams]);
  return (
    <>
      <Suspense>
        <Input
          value={search}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleSearch(event.target.value);
            setSearch(event.target.value);
          }}
          name=''
          type='type'
          placeholder='Search product...'
          className='max-w-xs dark:bg-muted'
        />
      </Suspense>
    </>
  );
};

export default NavSearch;
