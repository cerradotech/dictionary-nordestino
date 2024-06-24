import { FC, useEffect, useState } from 'react';

import { isEmpty } from 'lodash';

import { Button } from '~/components';
import { EntryType } from '~/core/stores/dictionary.store';
import { IoClose, useStores } from '~/utils';

import {
  Card,
  Description,
  Heading,
  Input,
  Title,
  Wrapper,
  WrapperButtons,
  WrapperInput,
  WrapperList,
  WrapperText,
} from './home.styles';

type Props = {
  todo?: string;
};

const HomeView: FC<Props> = () => {
  const {
    dictionary: {
      entries,
      binarySearch,
      removeEntry,
      preOrderTraversal,
      postOrderTraversal,
    },
  } = useStores();

  const [searchValue, setSearchValue] = useState('');
  const [filteredDictionary, setFilteredDictionary] =
    useState<EntryType[]>(entries);

  const formatText = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const handleFilterDictionary = () => {
    const filteredValue = binarySearch(searchValue);
    setFilteredDictionary(filteredValue);
  };

  const handleRemoveDictionary = (term: string) => {
    const rest = removeEntry(term);
    setFilteredDictionary(rest);
  };

  const handlePreOrder = () => {
    const list = preOrderTraversal();
    setFilteredDictionary(list);
  };

  const handlePosOrder = () => {
    const list = postOrderTraversal();
    setFilteredDictionary(list);
  };

  useEffect(() => {
    if (isEmpty(searchValue)) {
      handleFilterDictionary();
    }
  }, [searchValue]);

  return (
    <Wrapper>
      <Heading>Dicionário Nordestino</Heading>
      <WrapperInput>
        <Input
          placeholder="Busque por uma palavra e encontre seu significado"
          value={searchValue}
          onChange={({ target: { value } }) => setSearchValue(value)}
        />
        <Button
          accessibility="Buscar significado"
          onPress={handleFilterDictionary}
        >
          Buscar
        </Button>
      </WrapperInput>

      <WrapperButtons>
        <Button accessibility="Buscar significado" onPress={handlePreOrder}>
          Pré ordem
        </Button>
        <Button accessibility="Buscar significado" onPress={handlePosOrder}>
          Pós ordem
        </Button>
      </WrapperButtons>

      <WrapperList>
        {filteredDictionary?.map((dictionaryValue) => (
          <Card key={dictionaryValue.term}>
            <WrapperText>
              <Title>{formatText(dictionaryValue?.term)}</Title>
              <Description>{formatText(dictionaryValue?.meaning)}</Description>
            </WrapperText>
            <IoClose
              onClick={() => handleRemoveDictionary(dictionaryValue?.term)}
            />
          </Card>
        ))}
      </WrapperList>
    </Wrapper>
  );
};

export default HomeView;
