import ReviewNoContent from '@/public/reviews-no-content.webp'
import NoContent from '@/shared/components/no-content'
import React from 'react'

import useReviewsList from '../../../hooks/use-reviews-day-list'
import { ReviewListItem } from './review-list-item'
import { ReviewListSkeleton } from './review-list-skeleton'

const List: React.FC = () => {
  const { data: filteredItems, isLoading, isFetching } = useReviewsList()

  if (!filteredItems) {
    return null
  }

  if (isLoading || isFetching) {
    return <ReviewListSkeleton />
  }

  if (filteredItems.length === 0 && !isLoading && !isFetching) {
    return (
      <NoContent
        src={ReviewNoContent.src}
        title="No hay revisiones disponibles"
        subtitle="Parece que no se han agendado revisiones para este día."
        className="h-[calc(93vh_-_206px)]"
      />
    )
  }

  return (
    <div className="scrollbar-hide flex h-[calc(93vh_-_206px)] flex-col overflow-auto">
      <div className="mt-2 flex flex-col gap-4">
        {filteredItems?.map((item) => <ReviewListItem review={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default List
