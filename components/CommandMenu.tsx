/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  ReactElement,
  useCallback,
  useLayoutEffect,
  useState
} from 'react';
import { styled } from '@stitches/react';
import { useRouter } from 'next/router';

import { useCommandMenu } from '../hooks/useCommandMenu';
import { useDebounce } from '../hooks/useDebounce';
import { useDevice } from '../hooks/useDevice';
import { useTranslation } from '../hooks/useTranslation';

interface CommandItem {
  icon: ReactElement;
  label: string;
  href?: string;
  action?: () => void;
  shortcut?: string;
  newTab?: boolean;
}

export interface CommandCategory {
  name: string;
  items: CommandItem[];
}

interface CommandMenuProps {
  categories: CommandCategory[];
}

const CommandMenu = ({ categories }: CommandMenuProps) => {
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const { translations } = useTranslation();

  const router = useRouter();
  const device = useDevice();
  const { isOpen, setIsOpen } = useCommandMenu();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.metaKey && event.key === 'k') {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleAction = (item: CommandItem) => {
    if (item.href) {
      item.newTab ? window.open(item.href) : router.push(item.href);
      setIsOpen(false);
    } else if (item.action) {
      item.action();
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape, handleKeyDown]);

  const handleShortcut = useCallback(
    (event: KeyboardEvent) => {
      if (isOpen && isSearching !== true) {
        const shortcut = event.key.toLowerCase();
        const item = categories
          .flatMap(category => category.items)
          .find(item => item.shortcut === shortcut);

        if (item) {
          event.preventDefault();
          router.push(`${item.href}`);
          setIsOpen(false);
        }
      }
    },
    [isOpen, categories, router, isSearching]
  );

  useLayoutEffect(() => {
    window.addEventListener('keydown', handleShortcut);
    return () => {
      window.removeEventListener('keydown', handleShortcut);
    };
  }, [handleShortcut]);

  useLayoutEffect(() => {
    if (search.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [search]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const debouncedSearch = useDebounce(search, 300);

  const filteredCategories = categories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.label.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
  }));

  return (
    <Overlay
      style={isOpen ? { display: 'flex' } : { display: 'none' }}
      className={device === 'mobile' ? 'mobile' : ''}
      onClick={() => setIsOpen(false)}
    >
      <Menu onClick={e => e.stopPropagation()}>
        <React.Fragment>
          <Input
            type="text"
            placeholder={translations.kmenu.placeholder}
            value={search}
            onChange={handleSearch}
            onFocus={() => setIsSearching(true)}
          />
          <Content>
            <CategoryList>
              {filteredCategories.map(category => (
                <React.Fragment key={category.name}>
                  <CategoryName>{category.name}</CategoryName>
                  {category.items.map(item => (
                    <CategoryItem
                      key={item.label}
                      onClick={() => handleAction(item)}
                    >
                      <CategoryItemInfo>
                        {item.icon}
                        <CategoryItemLabel>
                          <span>{item.label}</span>
                        </CategoryItemLabel>
                      </CategoryItemInfo>
                      <CategoryItemShortcut>
                        <kbd>{item.shortcut}</kbd>
                      </CategoryItemShortcut>
                    </CategoryItem>
                  ))}
                </React.Fragment>
              ))}
            </CategoryList>
          </Content>
        </React.Fragment>
      </Menu>
    </Overlay>
  );
};

export default CommandMenu;

const Overlay = styled('div', {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: 0,
  padding: '14vh 1rem 1rem',
  background: 'rgba(0, 0, 0, 0.9)',
  zIndex: 9999,
  backfaceVisibility: 'hidden',

  '&.mobile': {
    width: 'auto',
    maxWidth: '100%'
  }
});

const Menu = styled('div', {
  maxWidth: '600px',
  width: '100%',
  color: '$primary',
  borderRadius: '8px',
  overflow: 'hidden',
  background: 'rgba(255, 255, 255, 0.09)',
  backdropFilter: 'blur(25px) saturate(300%)'
});

const Input = styled('input', {
  padding: '12px 16px',
  fontSize: '1rem',
  width: '100%',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: 'rgba(255, 255, 255, 0.05)',
  color: '$primary'
});

const Content = styled('div', {
  maxHeight: '400px',
  position: 'relative',
  overflow: 'auto'
});

const CategoryList = styled('div', {
  height: 'fit-content',
  width: '100%'
});

const CategoryName = styled('div', {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  color: '$secondary',
  background: 'rgba(255, 255, 255, 0.05)'
});

const CategoryItem = styled('div', {
  padding: '12px 16px',
  background: 'rgba(255, 255, 255, 0.05)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 0,
  cursor: 'pointer',
  color: '$secondary',
  transition: 'background 0.2s ease',

  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)'
  }
});

const CategoryItemInfo = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center'
});

const CategoryItemLabel = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '14px'
});

const CategoryItemShortcut = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px',

  kbd: {
    background: 'rgba(255, 255, 255, 0.1)',
    color: '$secondary',
    padding: '4px 8px',
    textTransform: 'uppercase',
    borderRadius: '4px',
    fontSize: '0.75rem'
  }
});
