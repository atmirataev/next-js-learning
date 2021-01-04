import { parseISO, format } from 'date-fns';

type OwnProps = {
  dateString: string;
};

export default function Date({ dateString }: OwnProps) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
