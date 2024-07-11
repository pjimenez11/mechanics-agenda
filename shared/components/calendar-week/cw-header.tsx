import { useSearchParams } from 'next/navigation'

import { useUpdateQueryParam } from '@/shared/hooks/update-query-param'
import { CalendarCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import { formatDate, formatMonthYear } from '@/lib/formatDate'

const CWHeader = () => {
  const searchParams = useSearchParams()
  const date = searchParams.get('date')!
  const updateQueryParam = useUpdateQueryParam()

  const setDate = (date: string) => {
    updateQueryParam('date', formatDate(date))
  }
  return (
    <div className="flex items-center text-blue-900 dark:text-white">
      <h1 className="w-full text-lg font-medium lg:text-xl">{formatMonthYear(date)}</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-fit px-1 py-2">
            <CalendarCheck className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
          <Calendar onDayClick={(date) => setDate(date.toISOString())} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default CWHeader
