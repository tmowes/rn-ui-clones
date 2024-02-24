import { FlatList } from 'react-native'
import { FilterItem } from './filter-item'

import { FilterProps } from './types'

export function Filters(props: FilterProps) {
  const { filters, filter, onChange } = props
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <FilterItem filter={item} selected={item === filter} onPress={() => onChange(item)} />
      )}
      horizontal
      contentContainerClassName="gap-6 px-2"
      showsHorizontalScrollIndicator={false}
    />
  )
}
