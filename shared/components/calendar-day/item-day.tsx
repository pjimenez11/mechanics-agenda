import { IDailySchedule } from '@/shared/interfaces/ISchedule'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

import ItemHour from './item-hour'

interface ItemDayProps {
  schedule: IDailySchedule
  onClick: (id: number) => void
}

const ItemDay = ({ schedule, onClick }: ItemDayProps) => {
  return (
    <>
      <li className="flex gap-0.5">
        <span className="-mt-[10px] w-12 text-sm text-blue-900 dark:text-white">{schedule.hour}</span>
        <div className="flex w-[calc(100%-50px)] flex-col gap-1 bg-blue-50 pb-1 dark:bg-blue-950">
          <hr className="w-full border-t-[1.5px] border-dashed border-blue-400" />
          <ScrollArea className="h-14 text-blue-900">
            <ul className="flex gap-1 px-1">
              {schedule.events1.map((event) => (
                <ItemHour key={event.id} event={event} onClick={onClick} />
              ))}
            </ul>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <ScrollArea className="h-14 text-blue-900">
            <ul className="flex gap-1 px-1">
              {schedule.events2.map((event) => (
                <ItemHour key={event.id} event={event} onClick={onClick} />
              ))}
            </ul>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </li>
    </>
  )
}

export default ItemDay
